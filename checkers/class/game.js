
function Checkers(color) {
  this.color = color;
  this._type = 'checker';
  this._alive = true;

  this.switchType = function() {
    	this._type='queen';
  }

  this.setAlive = function() {
  	if (this._alive===true) {
    	this._alive=false;
  	}
  	else {
    	this._alive=true;
  	}
  }
}

var newChecker = new Checkers('white');

document.getElementById('board').innerHTML+='<div id="block1"></div><div id="block2"></div><div id="changeType">Сменить тип шашки</div><div id="changeAlive">Сменить статус шашки</div>';

var changeType = document.getElementById('changeType');
var changeAlive = document.getElementById('changeAlive');

changeType.addEventListener( "click" , function() {
	newChecker.switchType()
});

changeAlive.addEventListener( "click" , function() {
	newChecker.setAlive()
});


