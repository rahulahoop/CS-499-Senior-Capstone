var Menu = {

    preload : function(){
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        Game.load.image('menu','./images/purple gradient.png');
        Game.load.spritesheet('playGame','./images/menu/playGame.png');
        Game.load.spritesheet('highScores','./images/menu/highScores.png');
        Game.load.spritesheet('exitGame','./images/menu/exitGame.png');
    },

    create: function (){
        menu = Game.add.sprite(0,0,'menu');
        menu.scale.setTo(7,6);
        menu.anchor.setTo(.5,.5);
        
        // Add Duders Pacman to background
        dudes = Game.add.text(400, 150, 'Duders Pacman', { font: '65px Comic Sans', fill: '#ffa' });
        dudes.anchor.setTo(0.5, 0.5);
        
        // Add buttons - Play Game, High Scores, Quit Game 
        // All of them have the same function right now - start the game
        // Scaled to original size, but we can resize them
        
        playGame = Game.add.button(300,230, 'playGame', this.startGame, this);
        playGame.scale.setTo(1,1);
        
        highScores = Game.add.button(300,325, 'highScores', this.startGame, this);
        highScores.scale.setTo(1,1);
        
        exitGame = Game.add.button(300,420, 'exitGame', this.exitGame, this);
        exitGame.scale.setTo(1,1);
       
    },
    
    startGame: function(){
    
        this.state.start('game');
},
    exitGame: function(){
        Game.destroy();
        window.location.href = "http://www.youtube.com/watch?v=WnaJCd2HiH0";
}

};
