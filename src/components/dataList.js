import { calculateBiorhythms } from "../calculation";

function dataList(birthDate, targetDate) {
    const outData = [];
    for (var day = targetDate; day < 6; day.setDate(day.getDate() + 1)) {
        const {Physical, Emotional, Intellectual} = calculateBiorhythms(birthDate, day);
        const eachDayDate = {
            targetDate: day.toString(),
            physical: Physical.toFixed(4),
            emotional: Emotional.toFixed(4),
            intellectual: Intellectual.toFixed(4),
        };
        outData.push({eachDayDate});
    }
    console.log(outData);
    return ({outData});
}

export default dataList;