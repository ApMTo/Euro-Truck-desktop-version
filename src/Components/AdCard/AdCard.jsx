import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdCard = ({ ad }) => {
    const navigate = useNavigate()
    const goToItem = () => [
        navigate(`/item/${ad.id}`)
    ]
    return (
        <div className='ad_container' onClick={goToItem}>
            <div className='ad_img' style={{backgroundImage: `url(${ad.adImages[0].ImageURL})`}}> </div>
            <div className='ad_info'>
                <h3>{ad.adTitle}</h3>
                <h4>{ad.price}</h4>
                <span>{ad.location}</span>
                <span>{ad.type}</span>
                <span>{ad.date}</span>
            </div>
        </div>
    );
}

export default AdCard;
