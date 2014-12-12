var Game = require('../src/game');
var Attila = require('../src/attila');

describe('Gutter game', function(){
  var game = new Game();
  it('Scores 0 on a gutter game', function(){
    for(var i = 0; i <20; i++){
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });
});

describe('Perfect Game', function(){
  var game = new Game();
  it('Scores 100', function(){
    for(var i = 0; i<10; i++){
      game.roll(10);
      game.hitStrike();
    }
    expect(game.score).toEqual(100);
    expect(game.strikes).toEqual(10);
  });
});

describe('The Perfect Attila', function(){
  var theman = new Attila(); 
  it('wears a hat', function(){
    theman.putsOnHat("beanie");
    Attila.zebra();
    expect(theman.attilaHats.length).toEqual(1);
  });
});