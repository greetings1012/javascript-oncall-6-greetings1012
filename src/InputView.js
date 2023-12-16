import {
    Console,
} from '@woowacourse/mission-utils';

import {
    MONTH,
    INPUT_MESSAGE,
    ERROR_MESSAGE,
    DAY_OF_THE_WEEK,
} from './constants.js'

const InputView = {

    async getMonthAndDayOfWeek(){
        try {
            const input = await Console.readLineAsync(INPUT_MESSAGE.MONTH_DAY_OF_THE_WEEK);
            InputValidation.isValidateForm(input);
            InputValidation.isValidateMonth(input);
            InputValidation.isValidateDayOfWeek(input);
            return input.split(',');
        } catch (error) {
            Console.print(error.message);
            return await this.getMonthAndDayOfWeek();
        }
    },

    async getWeekDayEmergencyWorkSchedule() {
        try {
            const input = await Console.readLineAsync(INPUT_MESSAGE.WEEKDAY_EMERGENCY_WORK_SCHEDULE);
            InputValidation.isNicknameOverlapped(input);
            return input.split(',');
        } catch (error) {
            Console.print(error.message);
            return await this.getWeekDayEmergencyWorkSchedule();
        }
    }
}

const InputValidation = {

    isValidateForm(input){
        const monthAndDayOfWeek = input.split(',');
        if (monthAndDayOfWeek.length != 2){
            throw new Error(ERROR_MESSAGE.WRONG_INPUT_MONTH_DAY_OF_THE_WEEK_FORM);
        }
    },

    isValidateMonth(input){
        const monthAndDayOfWeek = input.split(',');
        if (isNaN(Number(monthAndDayOfWeek[0])) || Number(monthAndDayOfWeek[0]) < 1 || Number(monthAndDayOfWeek[0]) > 12) {
            throw new Error(ERROR_MESSAGE.WRONG_INPUT_MONTH);
        }
    },

    isValidateDayOfWeek(input){
        const monthAndDayOfWeek = input.split(',');
        if (!DAY_OF_THE_WEEK.includes(monthAndDayOfWeek[1])) {
            throw new Error(ERROR_MESSAGE.WRONG_INPUT_DAY_OF_THE_WEEK);
        }
    },

    isNicknameOverlapped(input){
        const nicknames = input.split(',');
        const nicknameSet = new Set(nicknames);
        if(nicknames.length != nicknameSet.size){
            throw new Error(ERROR_MESSAGE.WRONG_INPUT_EMPLOYEE_OVERLAP);
        }
    }
}

export default InputView;