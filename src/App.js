import InputView from './InputView.js';

import {Console} from '@woowacourse/mission-utils';

class App {
  async run() {
    const monthAndDayOfWeek = await InputView.getMonthAndDayOfWeek();
    const month = Number(monthAndDayOfWeek[0]);
    const dayOfWeek = monthAndDayOfWeek[1];
  }
}

export default App;
