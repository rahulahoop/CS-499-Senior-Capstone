var Game; 

Game = new Phaser.Game(800, 600, Phaser.AUTO, '');

Game.state.add('Menu', Menu);

Game.state.add('ScoreMenu', ScoreMenu);

Game.state.add('game', game);

Game.state.start('Menu');