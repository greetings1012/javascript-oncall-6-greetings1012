import {
    Console,
} from '@woowacourse/mission-utils';

import {
    INPUT_MESSAGE,
    ERROR_MESSAGE
} from './constants.js'

const InputView = {

    async getMonthAndDayOfWeek(){
        try {
            const input = await Console.readLineAsync(INPUT_MESSAGE.MONTH_DAY_OF_THE_WEEK);
            InputValidation.isValidateForm(input);
            return input;
        } catch (error) {
            Console.print(error.message);
            return await this.getMonthAndDayOfWeek();
        }
    }
}

const InputValidation = {

    isValidateForm(input){
        const monthAndDayOfWeek = input.split(',');
        if (monthAndDayOfWeek.length != 2){
            throw new Error(ERROR_MESSAGE.WRONG_INPUT_MONTH_DAY_OF_THE_WEEK_FORM);
        }
    }
}

export default InputView;