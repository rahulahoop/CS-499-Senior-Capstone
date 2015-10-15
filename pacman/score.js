var ScoreMenu = {

    preload : function(){
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        Game.load.image('menu','./images/purple gradient.png');
        Game.load.spritesheet('playGame','./images/menu/playGame.png');
        Game.load.spritesheet('exitGame','./images/menu/exitGame.png');
        Game.load.spritesheet('mainMenu','./images/menu/mainmenu.png');
    },

    create: function (){
        menu = Game.add.sprite(0,0,'menu');
        menu.scale.setTo(7,6);
        menu.anchor.setTo(.5,.5);
        
        // Add Top Five Scores to background
        topfive = Game.add.text(400, 50, 'Top Five', { font: '65px Comic Sans', fill: '#ffa' });
        topfive.anchor.setTo(0.5, 0.5);
        
        // Add Placements to background
        name = Game.add.text(50, 150, 'NAME', { font: '35px Comic Sans', fill: '#ffa' });
        place1 = Game.add.text(50, 200, '1ST PLACE', { font: '35px Comic Sans', fill: '#ffa' });
        place2 = Game.add.text(50, 250, '2ND PLACE', { font: '35px Comic Sans', fill: '#ffa' });
        place3 = Game.add.text(50, 300, '3RD PLACE', { font: '35px Comic Sans', fill: '#ffa' });
        place4 = Game.add.text(50, 350, '4TH PLACE', { font: '35px Comic Sans', fill: '#ffa' });
        place5 = Game.add.text(50, 400, '5TH PLACE', { font: '35px Comic Sans', fill: '#ffa' });
        
        // Add buttons - Play Game, Main Menu, Quit Game 
        // Scaled to original size, but we can resize them
        
        playGame = Game.add.button(0,500, 'playGame', this.startGame, this);
        playGame.scale.setTo(1,1);
        
        highScores = Game.add.button(300,500, 'mainMenu', this.mainMenu, this);
        highScores.scale.setTo(1,1);
        
        exitGame = Game.add.button(595,500, 'exitGame', this.exitGame, this);
        exitGame.scale.setTo(1,1);
       
    },
    
    startGame: function(){
        this.state.start('game');
},
    exitGame: function(){
        Game.destroy();
        window.location.href = "http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1";
},
    mainMenu: function(){
        Game.state.start('Menu');
    }

};
