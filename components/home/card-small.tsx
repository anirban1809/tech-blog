const CardSmall = () =>
    <div className="flex hover:bg-gray-100 cursor-pointer">
        <div className="flex" style={{flex:0.4}}>
            <img  className="object-cover" src="https://preview.colorlib.com/theme/meranda/images/ximg_h_1.jpg.pagespeed.ic.IUFbLUay1G.webp" alt="" />
        </div>
        <div className=" pl-7  pt-7 pb-7 " style={{flex:0.6}}>
            <div className="font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>
            <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>


export default CardSmall;