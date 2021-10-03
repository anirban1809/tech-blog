import React from "react";
import CardSmall from "./card-small";

const Trending = () =>
    <div className="flex flex-col" style={{ flex: 0.3 }}>
        <p className="py-5 text-gray-500 text-2xl">
            Trending
        </p>

        <div className="flex flex-col justify-between" style={{ flex: 1 }}>
                <div >
                    <CardSmall />
                </div>
                <div >
                    <CardSmall />
                </div>
                <div >
                    <CardSmall />
                </div>

            </div>
    </div>


export default Trending;