
import './less/terminal.less';

const terminal = {
  dom: {
    consoleInput: {}
  },

  consoleHistory: [],

  init() {
    this.getElements();
    this.bindInputEvents();
  },

  render() {
    this.printConsole();
  },

  command(commandString) {
    this.consoleHistory.push(commandString);
    this.printConsole();
  },

  printConsole() {
    const { consoleHistory } = this;
    const { consoleOutput } = this.dom;
    // const fragment = document.createDocumentFragment();

    const outputLine = document.createElement('div');
    const outputText = document.createTextNode(consoleHistory[consoleHistory.length - 1]);

    // consoleOutput.innerHTML = '';

    // for (let i = 0, x = consoleHistory.length; i < x; i += 1) {
    // const outputLine = document.createElement('div');
    // const outputText = document.createTextNode(consoleHistory[i]);

    //   outputLine.appendChild(outputText);
    //   fragment.appendChild(outputLine);
    // }

    outputLine.appendChild(outputText);
    // fragment.appendChild(outputLine);

    consoleOutput.appendChild(outputLine);
    this.dom.consoleInput.value = '';
  },

  getElements() {
    this.dom.consoleInput = document.getElementById('js-consoleInput');
    this.dom.consoleOutput = document.getElementById('js-consoleOutput');
  },


  bindInputEvents() {
    const onEnterPress = (event) => {
      const input = event.target;
      if (event.keyCode !== 13) return;
      this.command(input.value);
      input.value = '';
    };

    this.dom.consoleInput.addEventListener('keypress', onEnterPress);
  }
};

export default terminal;
