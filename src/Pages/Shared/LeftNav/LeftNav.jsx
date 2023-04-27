import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    })
    return (
        <div>
            <h2>Left Nav</h2>
        </div>
    );
};

export default LeftNav;