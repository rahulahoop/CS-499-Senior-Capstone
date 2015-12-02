var Game; 

Game = new Phaser.Game(800, 600, Phaser.AUTO, '');

Game.state.add('Menu', Menu);

Game.state.add('game', Game);

Game.state.start('Menu');