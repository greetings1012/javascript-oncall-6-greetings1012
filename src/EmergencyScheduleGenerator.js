import {
    MONTH,
    DAY_OF_WEEK,
    NATIONAL_HOLIDAY
} from './constants.js'

import { Console } from '@woowacourse/mission-utils';

const EmergencyScheduleGenerator = {

    generateEmergencySchedule(month, dayOfWeek, weekDaySchedule, offDaySchedule) {
        const totalDays = MONTH[month];
        const dayOfWeekInNumber = DAY_OF_WEEK.indexOf(dayOfWeek);
        const scheduleSet = this.getScheduleSet(month, totalDays, dayOfWeekInNumber, weekDaySchedule, offDaySchedule);

        return scheduleSet;
    },

    getScheduleSet(month, totalDays, dayOfWeekInNumber, weekDaySchedule, offDaySchedule) {
        const scheduleSet = new Set();

        let totalWeekdaySchedule = Array.from({ length: totalDays }, (_, index) => weekDaySchedule[index % weekDaySchedule.length]);
        let totalOffdaySchedule = Array.from({ length: totalDays }, (_, index) => offDaySchedule[index % offDaySchedule.length]);

        for (let day = 1; day <= totalDays; day++) {
            const currentDayOfWeek = (day + dayOfWeekInNumber - 1) % 7; // 요일 계산
            const isHoliday = NATIONAL_HOLIDAY[month] && NATIONAL_HOLIDAY[month] === day;

            if (isHoliday) {
                scheduleSet.add({ day, dayOfWeek: this.getKoreanDayOfWeek(currentDayOfWeek), name: totalOffdaySchedule.shift() });
            } else {
                scheduleSet.add({ day, dayOfWeek: this.getKoreanDayOfWeek(currentDayOfWeek), name: totalWeekdaySchedule.shift() });
            }
        }

        return scheduleSet;
    },

    getKoreanDayOfWeek(dayOfWeek) {
        return DAY_OF_WEEK[dayOfWeek];
    }
}

export default EmergencyScheduleGenerator;