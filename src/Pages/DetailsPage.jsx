import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
    let location = useLocation();
    let specificImage = location.state.x;

    return (

        <div className='detailDiv' key={location.state.id}>
            
             <img src={specificImage.webformatURL} alt="Image" />
            <p>{specificImage.user}</p>
            <button onClick={() => window.history.back()}>Home</button>
        </div>
    )
}
export default DetailsPage;