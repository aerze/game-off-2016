
import './less/game.less';

function Game(point) {
  this.x = point.x;
  this.y = point.y;
}

Game.prototype.init = function init() {
  console.info('GAME::init()');
};


export default Game;
