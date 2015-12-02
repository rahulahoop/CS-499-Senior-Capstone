var Game; 

Game = new Phaser.Game(800, 600, Phaser.AUTO, '');

Game.state.add('Menu', Menu);

<<<<<<< HEAD
Game.state.add('game', Game);
=======
Game.state.add('ScoreMenu', ScoreMenu);

Game.state.add('game', game);
>>>>>>> bc28c267f4098411ad0a2aef8ea8ab643e8ba85f

Game.state.start('Menu');