var Menu = {

    preload : function(){
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        Game.load.image('menu','./images/purple gradient.png');
        Game.load.spritesheet('startButton','./images/PacMen.png', 255, 255,12);
    },

    create: function (){
        menu = Game.add.sprite(0,0,'menu');
        menu.scale.setTo(7,6);
        menu.anchor.setTo(.5,.5);
        
        startButton = Game.add.button(0,0, 'startButton', this.startGame, this);
        startButton.scale.setTo(.5,.5);
        
        startButton.x = 400;
        startButton.y = 300;
    
    },
    
    startGame: function(){
    
        this.state.start('game');
}

};