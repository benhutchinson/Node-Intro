function Attila() {

  this.attilaHats = []; 

}

Attila.prototype.putsOnHat = function(hat) {
    this.attilaHats.push(hat);
  };

module.exports = Attila;





module.exports.zebra = function(){
  console.log("test illustrating how to call in a method");
};
