import React from 'react'

const ArticleImage = (props:{imgSource:string,caption?:string}) => {
    return (
        <div>
            <img className=" border-2 rounded-md block m-auto" width="70%" src={props.imgSource} alt="" />
            <p className="text-gray-500 flex justify-around my-10">{props.caption}</p>
        </div>
    )
}

export default ArticleImage
