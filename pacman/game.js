// Game Setup.
var game = new Phaser.Game(
    800, 600, Phaser.AUTO, '', 
    { preload: preload, create: create, update: update}
);

// Global Vars.
var pacman;
var wall;

function preload()
{
    game.load.spritesheet('pacman', 'images/PacMen.png', 255, 255,12);
    game.load.image('wallOne', 'images/originalWall.png');
}

function create()
{   
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // Add pacman sprite, scale, and add anchor.
    pacman = game.add.sprite(game.world.center,0,"pacman");
    pacman.scale.setTo(.1,.1);
    pacman.anchor.setTo(.5,.5);
    
    // Pacman Position
    pacman.x = 400
    pacman.y = 200
    
    //Various animations.
    var death = pacman.animations.add('death');
    var waka = pacman.animations.add('waka',[0,2,4,2],15,true);
    
    // Add walls or map.

    // Add other sprites to physics list.
    game.physics.enable([pacman], Phaser.Physics.ARCADE);
    
}

function update()
{    
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
        pacman.animations.stop();
    }

}