
const firebaseCtrl = {
  refs: {
    main: {},
    gameLookup: {}
  },

  store: {
    gameLookup: {}
  },

  init() {
    console.info('FIREBASE::init()');

    const db = firebase.database();
    const main = db.ref('temp/test1');
    const gameLookup = main.child('game_lookup');

    this.refs = { main, gameLookup };

    this.bindStore('gameLookup');
  },

  bindStore(key) {
    console.info(`FIREBASE::bindStore(${key})`);

    const ref = this.refs[key];
    const consoleLabel = `FIREBASE::store:${key}`;

    const handleUpdate = (snapshot) => {
      this.store[key] = snapshot.val();
      console.info(consoleLabel, this.store[key]);
    };

    const handleError = (error) => {
      console.error(consoleLabel, error);
    };

    ref.on('value', handleUpdate, handleError);
  }
};

export default firebaseCtrl;
