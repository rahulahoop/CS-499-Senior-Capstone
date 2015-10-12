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
    game.load.image('map', 'images/map.png');
    game.load.spritesheet('dot', 'images/dots.png', 124, 124, 4);
    
    game.load.tilemap('tiledMap', 'images/map/testmap_map.csv',null,Phaser.Tilemap.CSV);
    game.load.tilemap('tiledDots', 'images/map/testmap_dots.csv',Phaser.Tilemap.CSV);
    game.load.image('tiles','images/map/tiles.png');
    
},

create : function() {
    
    map = game.add.tilemap('tiledMap',32,32);
    dots = game.add.tilemap('tiledDots',32,32);
    map.addTilesetImage('tiles');
    dots.addTilesetImage('tiles');
    layer = map.createLayer(0);
    layer2 = dots.createLayer(0)
    layer.resizeWorld();
    
    map.setCollision([-1],true,layer,false);
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
        
   // map = game.add.sprite(40,40,'map');
    //map.scale.setTo(2.5,2.5);
    
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
    
    
    //Add walls
    //createWalls();
        
    
    // Add other sprites to physics list.
    game.physics.arcade.enable(pacman);


    //game.physics.enable(walls, Phaser.Physics.ARCADE);
    
},

update : function() {    
    
    //game.physics.arcade.overlap(pacman, walls, collide);
    game.physics.arcade.collide(pacman, layer2);
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

function createWalls(){
    walls = game.add.group();
    
    walls.create(200, 260, 'mapghostpen');
    
    walls.create(360, 80, 'mapblock');
    walls.create(280, 80, 'mapblock');
    walls.create(160, 80, 'mapblock');
    walls.create(80, 80, 'mapblock');
    
    walls.create(78, 160, 'maproundblocksmall');
    walls.create(360, 160, 'maproundblocksmall');
    
    walls.create(200, 160, 'mapprongbase');
    walls.create(238, 190, 'mapprong');
    walls.create(200, 360, 'mapprongbase');
    walls.create(238, 390, 'mapprong');
    walls.create(200, 460, 'mapprongbase');
    walls.create(238, 490, 'mapprong');
    
    walls.create(160, 163, 'skinnyprongbaseleft');
    walls.create(175, 220, 'skinnyprongleft');
    walls.create(320, 163, 'skinnyprongbaseright');
    walls.create(283, 219, 'skinnyprongright');
    
    walls.create(160, 323, 'mapvertbar');
    walls.create(320, 323, 'mapvertbar');
    
    walls.create(160, 420, 'maphorizbar');
    walls.create(280, 420, 'maphorizbar');
    
    walls.create(80, 420, 'ltopleft');
    walls.create(118, 433, 'lbottomleft');
    
    walls.create(358, 420, 'ltopright');
    walls.create(358, 432, 'lbottomright');
    
    walls.create(83, 518, 'bottomleftbase');
    walls.create(159, 465, 'bottomleftprong');
    
    walls.create(283, 518, 'bottomrightbase');
    walls.create(320, 465, 'bottomrightprong');
    
    walls.create(40, 40, 'topleft');
    walls.create(40, 392, 'bottomleft');
    walls.create(440, 40, 'topright');
    walls.create(440, 392, 'bottomright');
    walls.create(45, 40, 'top');
    walls.create(45, 555, 'bottom');
    
    walls.create(42, 219, 'topleftsquare');
    walls.create(43, 319, 'bottomleftsquare');
    walls.create(361, 219, 'toprightsquare');
    walls.create(361, 319, 'bottomrightsquare');
    
    walls.create(48, 460, 'leftloop');
    walls.create(400, 460, 'rightloop');
    walls.create(238, 55, 'topprong');
    
}
