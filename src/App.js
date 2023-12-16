import InputView from './InputView.js';

import {Console} from '@woowacourse/mission-utils';

class App {
  async run() {
    
    let month, dayOfWeek = await InputView.getMonthAndDayOfWeek();
    Console.print(month + dayOfWeek);
  }
}

export default App;
