import React from 'react';
import './RecruitCart.css'
const Cost = (props) => {
    //using destructuring
    const { recruit } = props;

    // calculate the total salary
    let totalSalary = 0;
    for (const programmer of recruit) {
        totalSalary = totalSalary + programmer.salary;
    }

    //for loop to add programmer name in recruit cart
    let programmerName = [];
    for (const programmer of recruit) {
        programmerName.push(programmer.name);
    }
    return (
        <div className='cart text-start px-3'>
            <p className='pt-3 fw-bold'>Total Recruit: {recruit.length}</p>
            <p className='pt-3 fw-bold'>Total Salary: ${totalSalary}</p>
            <p className='pt-3 fw-bold d-flex'> Recruited Programmer: <span className='px-3 pb-3'>{programmerName.map(programmer => <li>{programmer}</li> )}</span></p>
        </div>
    );
};

export default Cost;