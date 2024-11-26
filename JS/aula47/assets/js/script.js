function leftZero(minutes) {
    return minutes >= 10 ? minutes : `0${minutes}`
}

function getDayOfWeekText(dayNumber) {
//     let dayName;
//     switch (dayNumber) {
//         case 1:
//             dayName = 'Segunda-feira';
//             return dayName;
//         case 2:
//             dayName = 'Terça-feira';
//             return dayName;
//         case 3:
//             dayName = 'Quarta-feira';
//             return dayName;
//         case 4:
//             dayName = 'Quinta-feira';
//             return dayName;
//         case 5:
//             dayName = 'Sexta-feira';
//             return dayName;
//         case 6:
//             dayName = 'Sábado';
//             return dayName;
//         case 7:
//             dayName = 'Domingo';
//             return dayName;
//         default:
//             dayName = '';
//             return dayName;
//     }
    const daysOfWeek = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'];
    return daysOfWeek[dayNumber];
}

function getMonthName(monthNumber) {
    // let month;
    // switch (monthNumber) {
    //     case 0:
    //         month = 'janeiro';
    //         return month;
    //     case 1:
    //         month = 'fevereiro';
    //         return month;
    //     case 2:
    //         month = 'março';
    //         return month;
    //     case 3:
    //         month = 'abril';
    //         return month;
    //     case 4:
    //         month = 'maio';
    //         return month;
    //     case 5:
    //         month = 'junho';
    //         return month;
    //     case 6:
    //         month = 'julho';
    //         return month;
    //     case 7:
    //         month = 'agosto';
    //         return month;
    //     case 8:
    //         month = 'setembro';
    //         return month;
    //     case 9:
    //         month = 'outubro';
    //         return month;
    //     case 10:
    //         month = 'novembro';
    //         return month;
    //     case 11:
    //         month = 'dezembro';
    //         return month;
    // }

    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return months[monthNumber];

}

function buildDateString(date) {
    const dayName = getDayOfWeekText(date.getDay());
    const dayNumber = date.getDay();
    const monthName = getMonthName(date.getMonth());
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = leftZero(date.getMinutes());
    const seconds = leftZero(date.getSeconds());

    return `${dayName}, ${dayNumber} de ${monthName} de ${year} - ${hours}:${minutes}:${seconds}`;
}

const h1 = document.querySelector('.container h1');
const date = new Date();

h1.innerHTML = date.toLocaleDateString('pt-br', {dateStyle: 'full'});