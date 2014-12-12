function Game(){
  this.score = 0;
  this.attempt = 0;
  this.strikes = 0;
}

Game.prototype.roll = function(num){
    this.attempt = num;
    this.score += num;
};

Game.prototype.hitStrike = function(){
  if(this.attempt === 10){
    this.strikes += 1;
  }
};

module.exports = Game;