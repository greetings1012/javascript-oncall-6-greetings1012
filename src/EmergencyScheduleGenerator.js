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
        let lastWorker = ''
        for (let day = 1; day <= totalDays; day++) {
            const currentDayOfWeek = (day + dayOfWeekInNumber - 1) % 7; // 요일 계산
            const isHoliday = ((NATIONAL_HOLIDAY[month] && NATIONAL_HOLIDAY[month] === day) || (currentDayOfWeek == 6 || currentDayOfWeek == 0));
            
            let currentWorker;

            if (isHoliday) {
                currentWorker = totalOffdaySchedule.shift();

                // 휴일 다음 평일 근무가 연속될 경우 순서를 바꿈
                if (lastWorker && lastWorker === currentWorker) {
                    const nextWorker = totalOffdaySchedule.shift();
                    totalOffdaySchedule.unshift(currentWorker);
                    currentWorker = nextWorker;
                }
            } 
            else {
                currentWorker = totalWeekdaySchedule.shift();

                // 평일 다음 휴일 근무가 연속될 경우 순서를 바꿈
                if (lastWorker && lastWorker === currentWorker) {
                    const nextWorker = totalWeekdaySchedule.shift();
                    totalWeekdaySchedule.unshift(currentWorker);
                    currentWorker = nextWorker;
                }
            }


            scheduleSet.add({ day, dayOfWeek: this.getKoreanDayOfWeek(currentDayOfWeek), name: currentWorker });
            lastWorker = currentWorker;
        }

        return scheduleSet;
    },

    getKoreanDayOfWeek(dayOfWeek) {
        return DAY_OF_WEEK[dayOfWeek];
    }
}

export default EmergencyScheduleGenerator;