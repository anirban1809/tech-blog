

export type CardMediumProps = {
    bannerImage:string,
    title:string,
    subtitle?:string,
    author:string
}

const CardMedium = (props:CardMediumProps) =>
    <div className=" hover:bg-gray-100 cursor-pointer">
        <div className="flex">
            <img className="object-fill"  src={props.bannerImage} alt="" />
        </div>
        <div className=" p-3">
            <div className="text-2xl font-semibold py-3">
            {props.title}
            </div>

            <div className="text-xl text-gray-500 py-3">
                {props.subtitle}
            </div>
            <p className="py-3 text-gray-500">
                By <b>{props.author}</b>
            </p>
            <p className=" text-gray-500">
                3rd October, 2021
            </p>

            
        </div>
    </div>


export default CardMedium;