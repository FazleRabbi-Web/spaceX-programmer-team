import React, { useEffect, useState } from 'react';
import RecruitCart from '../RecruitCart/RecruitCart';
import Programmer from '../Programmer/Programmer';
import './Container.css'
const Container = () => {
    const [programmers, setProgrammers]=useState([])
    const [invite, setInvite]=useState([])

    useEffect(()=>{
        fetch('./programmer.json')
        .then(res => res.json())
        .then(data=> setProgrammers(data)
        )
    },[])

    const handleInviteCart = (programmer) => {
        const newInvite = [...invite, programmer];
        setInvite(newInvite);
    }

    return (
        <div className='container row'>
            <div className="programmers col-lg-9 my-3">
                {
                    programmers.map(programmer => <Programmer
                    key={programmer.name}
                    programmer={programmer}
                    handleInviteCart={handleInviteCart}
                    ></Programmer>)
                }
            </div>
            <div className="InviteCart col-lg-1 my-3">
                <RecruitCart invite={invite}></RecruitCart>
            </div>
        </div>
    );
};

export default Container;