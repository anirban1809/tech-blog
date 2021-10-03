import React from 'react'
import CardSmall from './card-small';

const TopCategory = (props:{categoryName:string}) => {
    return (
        <div style={{flex:0.5}}>
            <div className="py-5 text-gray-500 text-2xl">
            {props.categoryName}
            </div>
            <div className="flex flex-col justify-between" style={{ flex: 1 }}>
                <div className="pb-7 pr-3" >
                    <CardSmall />
                </div>
                <div className="pb-7 pr-3" >
                    <CardSmall />
                </div>
                <div className="pb-7 pr-3" >
                    <CardSmall />
                </div>

            </div>
        </div>
    )
}

export default TopCategory;
