const dates = ['20th Oct 2052', '31st Jan 2001', '30th Nov 1991'];
// 2052-10-20
const dateRegex = /(\d{2})[st|th]+/;
const monthRegex = /[A-Za-z]{3}/;
const yearRegex = /\d{4}/;
const month = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
};
let formattedDate = [];
function retrieveDates(dates) {
    formattedDate = dates.map(function(date){
        let matchedRegex = date.match(dateRegex);
        let numericDate = matchedRegex ? matchedRegex[1] : null;
        let monthAlpha = date.match(monthRegex);
        let monthNumeric = month[monthAlpha];
        let year = date.match(yearRegex)[0];
        return `${year}-${monthNumeric}-${numericDate}`
    });
}
retrieveDates(dates);
