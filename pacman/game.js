var game = new Phaser.Game(
    800, 600, Phaser.AUTO, '', 
    { preload: preload, create: create, update: update}
);
function preload(){
    game.load.image("pacman","Pacman.png");
    game.load.spritesheet('ghosts', 'ghost.png', 255, 255,14);
    game.load.spritesheet('pacmen', 'PacMen.png', 255, 255,12);
}

function create(){
//sample commands
//    game.stage.backgroundColor = '#ffffff';
//    ghost = game.add.sprite(256,256,'ghosts',7);
//    pacmen = game.add.sprite(285,256,'pacmen',2);
//    ghost.scale.setTo(.1,.1);
//    pacmen.scale.setTo(.1,.1);
//    pacman = game.add.sprite(game.world.centerx,0,"pacman");
//    pacman.body.collideWorldBounds = true;
//    pacman.anchor.setTo(1,1);
}

function update(){
    
}