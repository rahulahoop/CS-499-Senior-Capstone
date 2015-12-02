// Global Vars.

// Game Setup.
var Pacman = function (Game) {

        this.map = null;
        this.layer = null;
        this.pacman = null;

        this.safetile = 14;
        this.gridsize = 16;

        this.speed = 150;
        this.threshold = 3;

        this.marker = new Phaser.Point();
        this.turnPoint = new Phaser.Point();

        this.directions = [ null, null, null, null, null ];
        this.opposites = [ Phaser.NONE, Phaser.RIGHT, Phaser.LEFT, Phaser.DOWN, Phaser.UP ];

        this.current = Phaser.NONE;
        this.turning = Phaser.NONE;

    };

Pacman.prototype =  {

init: function () {
    
    this.physics.startSystem(Phaser.Physics.ARCADE);

},
    
preload: function(){
    
    this.load.image('dot', 'images/dot.png');
    this.load.spritesheet('pacman', 'images/PacMen.png', 255, 255,12);
    this.load.image('tiles','images/map/pacman-tiles.png');
    this.load.tilemap('tiledMap', 'images/map/pacman-map.json',null,Phaser.Tilemap.TILED_JSON);
    
},

create: function() {
    
    this.map = this.add.tilemap('tiledMap');
    this.map.addTilesetImage('pacman-tiles','tiles');
    
    this.layer = this.map.createLayer("Pacman");
    this.layer.debug = true;
    this.dots = this.add.physicsGroup();
    
    this.map.createFromTiles(7, 14, 'dot', layer, dots);
    
    this.dots.setAll('x', 6, false, false, 1);
    this.dots.setAll('y', 6, false, false, 1);

    
    this.map.setCollisionByExclusion([14],true,layer);

    // Add pacman sprite, scale, and add anchor.
    this.pacman = this.add.sprite((14 * 16) + 8, (17 * 16) + 8, 'pacman', 0);
    this.pacman.scale.setTo(.08,.08);
    this.pacman.anchor.set(.5);
    
    //Various animations.
    var death = this.pacman.animations.add('death');
    var waka = this.pacman.animations.add('waka',[0,2,4,2],15,true);
        
    
    // Add other sprites to physics list.
    this.physics.enable(this.pacman);


    //game.physics.enable(walls, Phaser.Physics.ARCADE);
    
},

update : function() {    
    
    this.physics.arcade.collide(this.pacman,this.layer);
    
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

    

