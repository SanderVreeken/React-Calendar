
// Function returning the number of the days within a month.
// For the month parameter start counting at zero for January.
export function getNumberOfDays(year, month) {
    return new Date(year, month, 0).getDate()
}

// Function returning the first weekday of the month represented in a number, whereby zero is Sunday.
// For the month parameter start counting at zero for January.
export function getFirstWeekdayOfMonth(year, month) {
    return new Date(year, month, 1).getDay() - 1
}

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
