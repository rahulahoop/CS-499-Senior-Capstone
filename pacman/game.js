// Global Vars.
var pacman;
var wall;

// Game Setup.
var game =  {


preload : function(){
    
    game.load.spritesheet('pacman', 'images/PacMen.png', 255, 255,12);
    game.load.image('map', 'images/map.png');
    game.load.spritesheet('dot', 'images/dots.png', 124, 124, 4);
    
    //map images
    game.load.image('mapblock', 'images/mapblock.png');
    game.load.image('mapghostpen', 'images/mapghostpen.png');
    game.load.image('mapprong', 'images/mapprong.png');
    game.load.image('mapprongbase', 'images/mapprongbase.png');
    game.load.image('maproundblocksmall', 'images/maproundblocksmall.png');
    game.load.image('skinnyprongbaseleft', 'images/mapskinnyprongbaseleft.png');
    game.load.image('skinnyprongleft', 'images/mapskinnyprongleft.png');
    game.load.image('skinnyprongbaseright', 'images/mapskinnyprongbaseright.png');
    game.load.image('skinnyprongright', 'images/mapskinnyprongright.png');
    game.load.image('ltopleft', 'images/ltopleft.png');
    game.load.image('lbottomleft', 'images/lbottomleft.png');
    game.load.image('ltopright', 'images/ltopright.png');
    game.load.image('lbottomright', 'images/lbottomright.png');
    game.load.image('maphorizbar', 'images/maphorizbar.png');
    game.load.image('mapvertbar', 'images/mapvertbar.png');
    game.load.image('bottomleftbase', 'images/mapbottomleftbase.png');
    game.load.image('bottomleftprong', 'images/mapbottomleftprong.png');
    game.load.image('bottomrightbase', 'images/mapbottomrightbase.png');
    game.load.image('bottomrightprong', 'images/mapbottomrightprong.png');
    game.load.image('topleft', 'images/maptopleft.png');
    game.load.image('bottomleft', 'images/mapbottomleft.png');
    game.load.image('bottomright', 'images/mapbottomright.png');
    game.load.image('topright', 'images/maptopright.png');  
    game.load.image('top', 'images/maptop.png');
    game.load.image('bottom', 'images/mapbottom.png');
    game.load.image('bottomleftsquare', 'images/mapbottomleftsquare.png');
    game.load.image('topleftsquare', 'images/maptopleftsquare.png');
    game.load.image('bottomrightsquare', 'images/maptoprightsquare.png');
    game.load.image('toprightsquare', 'images/maptoprightsquare.png'); 
    game.load.image('topprong', 'images/maptopprong.png');
    game.load.image('leftloop', 'images/mapleftloop.png');
    game.load.image('rightloop', 'images/maprightloop.png');
},

create : function() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    map = game.add.sprite(40,40,'map');
    map.scale.setTo(2.5,2.5);
    
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
    createWalls();
    
    dot = game.add.sprite(0,0,'dot');
    
    
    // Add other sprites to physics list.
    game.physics.enable([pacman], Phaser.Physics.ARCADE);
    game.physics.enable(walls, Phaser.Physics.ARCADE);
    
},

update : function() {    
    
    game.physics.arcade.overlap(pacman, walls, collide);

    // Teleport to from the right to left side
    if (pacman.x > 450 && pacman.y > 280)
    {
        pacman.x = 40;
    }
    // Teleport from left to right side
    if (pacman.x < 40 && pacman.y > 280)
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
    else if(game.input.keyboard.isDown(Phaser.Keyboard.ESC)){
        Game.paused = true;
    }
    else
    {
        //pacman.animations.stop();
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
