import React from 'react'

function Years() {
    let years = [];
    for (var i = 1930; i <= 2030; i++) {
        years.push(i);
    }
    return (
        <>
            {years.map(year =>(
                 <option key={year}>{year}</option>
            ))}
        </>
    )
}

export default Years
