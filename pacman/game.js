// Global Vars.
var pacman;
var wall;

// Game Setup.
var game =  {


preload : function(){
    
    game.load.spritesheet('pacman', 'images/PacMen.png', 255, 255,12);
    game.load.image('map', 'images/map.png');
    game.load.spritesheet('dot', 'images/dots.png', 124, 124, 4);
},

create : function() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    map = game.add.sprite(40,40,'map');
    map.scale.setTo(2.5,2.5);
    
    // Add pacman sprite, scale, and add anchor.
    pacman = game.add.sprite(game.world.center,4,"pacman");
    pacman.scale.setTo(.1,.1);
    pacman.anchor.setTo(.5,.5);
    
    // Pacman Position
    pacman.x = 256
    pacman.y = 344
    
    //Various animations.
    var death = pacman.animations.add('death');
    var waka = pacman.animations.add('waka',[0,2,4,2],15,true);
    
    dot = game.add.sprite(0,0,'dot');
    
    
    // Add other sprites to physics list.
    game.physics.enable([pacman], Phaser.Physics.ARCADE);
    
},

update : function() {    
    

    // Teleport to from the right to left side
    if (pacman.x > 450 && pacman.y > 304)
    {
        pacman.x = 40;
    }
    // Teleport from left to right side
    if (pacman.x < 40 && pacman.y > 304)
    {
        pacman.x = 450;
    }
    
    // Movement Keys.
    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        pacman.x -= 3;
        pacman.rotation = -3;
        pacman.animations.play('waka');
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        pacman.x += 3;
        pacman.rotation = 0;
        pacman.animations.play('waka');
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
        pacman.y += 3;
        pacman.rotation = 1.5;
        pacman.animations.play('waka');
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        pacman.y -= 3;
        pacman.rotation = -1.5
        pacman.animations.play('waka');
    }
    else
    {
        //pacman.animations.stop();
    }
    
    
}

};