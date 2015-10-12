// Global Vars.
var pacman;
var wall;
var map;
var layer;
var layer2;
// Game Setup.
var game =  {


preload : function(){
    
    game.load.spritesheet('pacman', 'images/PacMen.png', 255, 255,12);
    
    //game.load.tilemap('tiledMap', 'images/map/testmap_map.csv',null,Phaser.Tilemap.CSV);
    game.load.tilemap('tiledDots', 'images/map/testmap_dots.csv',Phaser.Tilemap.CSV);
    game.load.image('tiles','images/map/tiles.png');
    
},

create : function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //map = game.add.tilemap('map',32,32);
    dots = game.add.tilemap('tiledDots',32,32);
    //map.addTilesetImage('tiles');
    dots.addTilesetImage('tiles');
    //layer = map.createLayer("layer");
    layer2 = dots.createLayer(0);
    layer2.resizeWorld();
    
    dots.setCollision([29], false, layer2, false);
        
    // Add pacman sprite, scale, and add anchor.
    pacman = game.add.sprite(game.world.center,4,"pacman");
    pacman.scale.setTo(.08,.08);
    pacman.anchor.setTo(.5,.5);

    // Pacman Position
    pacman.x = 256
    pacman.y = 344
    
    //Various animations.
    var death = pacman.animations.add('death');
    var waka = pacman.animations.add('waka',[0,2,4,2],15,true);
        
    
    // Add other sprites to physics list.
    game.physics.arcade.enable([pacman,dots]);


    //game.physics.enable(walls, Phaser.Physics.ARCADE);
    
},

update : function() {    
    
    game.physics.arcade.collide(pacman,layer2);
    
    // Teleport to from the right to left side
    if (pacman.x > 517 && pacman.y > 260)
    {
        pacman.x = 110;
    }
    // Teleport from left to right side
    if (pacman.x < 110 && pacman.y > 260)
    {
        pacman.x = 512;
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
    else if(game.input.keyboard.isDown(Phaser.Keyboard.ESC)){
        Game.paused = true;
    }
    else
    {
//        console.log("X" + pacman.x);
//        console.log("Y" + pacman.y);
    }
    
    
}

};

function collide(pacman, wall){ 
        
    /*if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){      
        pacman.x += 6;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        pacman.x -= 6;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
        pacman.y -= 6;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        pacman.y += 6;
    }*/
    if(pacman.x > wall.x){
        pacman.x += 3;    
    }
    if(pacman.x < wall.x){
        pacman.x -= 3;        
    }
    if(pacman.y > wall.y){
        pacman.y += 3;
    }
    if(pacman.y < wall.y){
        pacman.y -= 3;
    }
    
}
