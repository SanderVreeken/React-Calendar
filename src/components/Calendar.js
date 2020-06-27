import React, { useEffect, useState } from 'react'

import { getFirstWeekdayOfMonth, getNumberOfDays, weekdays } from '../functions/dateFunctions'

function Calendar(props) {
    const [days, setDays] = useState(null)
    const [firstDay, setFirstDay] = useState(null)

    // Hook used to set the state for the number of days and first day of the month.
    useEffect(() => {
        setDays(getNumberOfDays(props.year, props.month + 1))
        setFirstDay(getFirstWeekdayOfMonth(props.year, props.month))
    })

    // Grid style element seperated from the CSS in order to enable a dynamically number of rows.
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridTemplateRows: 'repeat(5, 95px)'
    }

    // Array to store the calendar day elements that will be created by the loop below.
    const elements = []
    // Constant used the find the number of days in the previous month, so the calendar elements could be added accordingly.
    const numberOfDaysPreviousMonth = getNumberOfDays(props.year, props.month)
    // For-range loop that initializes the calendar day element.
    for (let a = firstDay; a > 0; a--) {
        elements.push(
            <div>
                <p>{(numberOfDaysPreviousMonth - a) + 1}</p>
            </div>
        )
    }
    for (let b = 0; b < days; b++) {
        elements.push(
            <div>
                <p>{b + 1}</p>
            </div>
        )
    }
    // Variable that keeps track of the element that are extra created in order to fill the calendar.
    // The remaining elements will be numbers according to the elementsIndex, which is increased after a new element has been pushed to the array.
    let elementsIndex = 1
    // If-statement checking the number of elements that already have been created in order to finish with either five or six full weeks.
    if (elements.length < 35) {
        for (let c = elements.length; c < 35; c++) {
            elements.push(
                <div>
                    <p>{elementsIndex}</p>
                </div>
            )
            elementsIndex++
        }
    } else {
        for (let c = elements.length; c < 42; c++) {
            elements.push(
                <div>
                    <p>{elementsIndex}</p>
                </div>
            )
            elementsIndex++
        }
    }

    return (
        <div className='calendar'>
            <div className='calendar__header'>
                {weekdays.map(weekday => {
                    return (
                        <div>
                            <p>{weekday}</p>
                        </div>
                    )
                })}
            </div>
            <div className='calendar__days' style={gridStyle}>
                {elements}
            </div>
        </div>
    )
}

export default Calendar