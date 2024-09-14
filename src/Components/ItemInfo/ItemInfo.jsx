import React from 'react';
import './itemInfo.css';

const ItemInfo = ({ item }) => {
    const addInfo = item?.addInfo?.replace(/\n/g, '<br />');
    console.log(addInfo);
    return (
        <div className='item_information'>
            <div className='info_heading'>
                <h2>{item.adTitle}</h2>
            </div>
            <div className='item_location'>
                <i className="fa-solid fa-location-dot"></i> <span>{item.location}</span>
            </div>
            <div className='item_price'>
                <h2>{item.price}</h2>
            </div>
            <div className='item_specifications'>
                <div className='item_specifications_heading'>
                    <h3>Specifications</h3>
                </div>
                <div className='item_specifications_info'>
                    <div>
                        <p>Type</p>
                        <span>{item.type}</span>
                    </div>
                    <div>
                        <p>Make</p>
                        <span>{item.brand}</span>
                    </div>
                    <div>
                        <p>Year</p>
                        <span>{item.year}</span>
                    </div>
                    <div>
                        <p>Engine Type</p>
                        <span>{item.engineType}</span>
                    </div>
                    <div>
                        <p>Chassis Configuration</p>
                        <span>{item.chassisConf}</span>
                    </div>
                </div>
            </div>
            <div className='item_description'>
                <div className='item_description_heading'>
                    <h3>Description</h3>
                </div>
                <div className='item_description_info' dangerouslySetInnerHTML={{ __html: addInfo }} />
            </div>
        </div>
    );
}

export default ItemInfo;
