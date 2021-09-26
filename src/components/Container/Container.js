import React, { useEffect, useState } from 'react';
import RecruitCart from '../RecruitCart/RecruitCart';
import Programmer from '../Programmer/Programmer';
import './Container.css'
const Container = () => {

    //using Use State
    const [programmers, setProgrammers]=useState([])
    const [recruit, setRecruit]=useState([])


    // using use Effect to load data from JSON file
    useEffect(()=>{
        fetch('./programmer.json')
        .then(res => res.json())
        .then(data=> setProgrammers(data)
        )
    },[])

    const handleInviteCart = (programmer) => {
        const newRecruit = [...recruit, programmer];
        setRecruit(newRecruit);
    }

    return (
        <div className='container row'>
            <div className="programmers col-lg-9 my-3">
                {
                    // sending data to programmer component
                    programmers.map(programmer => <Programmer
                    key={programmer.name}
                    programmer={programmer}
                    handleInviteCart={handleInviteCart}
                    ></Programmer>)
                }
            </div>
            <div className="InviteCart col-lg-1 my-3">
                {/* // sending data recruit component */}
                <RecruitCart recruit={recruit}></RecruitCart>
            </div>
        </div>
    );
};

export default Container;