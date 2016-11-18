
import firebaseCtrl from './firebase';
import Game from './game';
import './less/main.less';

const point = { x: 1, y: 2 };
const game = new Game(point);

game.init();
firebaseCtrl.init();
