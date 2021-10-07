const author = "Anirban Deb Singha";

const Banner = () => {
    return <div className=" mx-auto max-w-7xl my-5 items-center">
        <div className="flex bg-gray-100 h-490px">
            <div className="flex" style={{ flex: 0.5 }}>
                <img className=" object-cover" src="https://thumbs.dreamstime.com/b/typescript-paper-texture-typescript-programming-language-developed-maintained-microsoft-strict-syntactical-205974659.jpg" alt="" />
            </div>
            <div className="p-10 mx-6 relative" style={{ flex: 0.5 }}>
                <div className="text-gray-500">FEATURED ARTICLE</div>
                <div className="text-4xl py-2 hover:underline cursor-pointer"><a href="/articles/123">A beginner’s guide to TypeScript (with some history of the TypeScript)</a></div>
                <div className=" text-xl py-3 text-gray-500 overflow-hidden">In this lesson, we are going to learn how TypeScript came into existence and what problem it solves.</div>
                <div className=" text-gray-500 overflow-hidden">JavaScript is arguably one of the most popular programming languages as of 2020 and its popularity is just growing day by day. The primary reason why it is so popular is because it is the default language of the web frontend. What that means is that browsers can only understand JavaScript and nothing else.
                </div>
                <div className="pt-10">
                    <div>By <b>{author}</b></div>
                    <div className="text-gray-600">Published on 3rd October, 2021</div>
                </div>
            </div>
        </div>
    </div>
}

export default Banner;