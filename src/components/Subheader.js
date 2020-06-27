import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { months } from '../functions/dateFunctions'

function Subheader(props) {

    const style = {
        backgroundColor: props.backgroundColor
    }

    // Function that handles the changes in terms of months and years after the button either one of the arrow keys has been pressed.
    const handleMonthChange = (event) => {
        const id = event.target.id
        // Cannot use ++/-- here, as this will try to override the state value without using the useState method, which is forbidden.
        // Underscore name only used to quickly process the value, which is only used within the scope of the function.
        if (id === 'arrow__increase') {
            const _month = props.month + 1
            // In case the month state is reaching twelve, the number of years will increase by one and the months variable is set to zero again to simulate going from December to January.
            if (_month === 12) {
                props.setMonth(0)
                const _year = props.year + 1
                props.setYear(_year)
            } else {
                props.setMonth(_month)
            }
        } else if (id === 'arrow__decrease') {
            const _month = props.month - 1
            // In case the month state is reaching minus one, the number of years will decrease by one and the months variable is set to eleven again to simulate going from January to December.
            if (_month === -1) {
                props.setMonth(11)
                const _year = props.year - 1
                props.setYear(_year)
            } else {
                props.setMonth(_month)
            }
        }
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-dark' style={style}>
            <div>
                <div className='navbar__arrows'>
                    <div id='arrow__decrease' onClick={handleMonthChange}>
                        <IoIosArrowBack />
                    </div>
                    <div id='arrow__increase' onClick={handleMonthChange}>
                        <IoIosArrowForward />
                    </div>
                </div>
                <p>{`${months[props.month]} ${props.year}`}</p>
            </div>
        </nav>
    )
}

export default Subheader