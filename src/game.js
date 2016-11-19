
import firebaseCtrl from './firebase';
import terminal from './terminal';

import './less/game.less';

const game = {
  state: {
    terminal: {
      input: ''
    },
  },

  init() {
    firebaseCtrl.init();
    terminal.init();
  },

  update() {
    // firebaseCtrl.update();
    // terminal.update();
    // screen.update();
  },

  // 60 fps
  // optimize render methods
  render() {
    // terminal.render(this.state);
    // screen.render(this.state.screen);
  }
};


export default game;
