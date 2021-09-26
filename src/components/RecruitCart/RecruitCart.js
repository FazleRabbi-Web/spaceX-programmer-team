import React from 'react';
import './RecruitCart.css'
const Cost = (props) => {
    const { invite } = props;

    let totalSalary = 0;
    for (const programmer of invite) {
        totalSalary = totalSalary + programmer.salary;
    }
    let programmerName = [];
    for (const programmer of invite) {
        programmerName.push(programmer.name);
    }
    return (
        <div className='cart text-start px-3'>
            <p className='pt-3 fw-bold'>Total Recruit: {invite.length}</p>
            <p className='pt-3 fw-bold'>Total Salary: ${totalSalary}</p>
            <p className='pt-3 fw-bold d-flex'> Recruited Programmer: <span className='px-3 pb-3'>{programmerName.map(programmer => <li>{programmer}</li> )}</span></p>
        </div>
    );
};

export default Cost;