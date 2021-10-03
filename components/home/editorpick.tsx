import CardMedium from "./card-medium";
import CardSmall from "./card-small";

const editorpicks = [
    {
        bannerImage:'https://miro.medium.com/max/1400/0*o0JrsphlUW7yeutR',
        title:'From Basic to Intermediate SQL in 10 Minutes',
        author:'Anirban Deb Singha'
    }
];

const EditorsPick = () => {
    return <div className="" style={{ flex: 0.7 }}>
        <p className="py-5 text-gray-500 text-2xl">
            Editor's Pick
        </p>
        <div className="flex ">
            <div className="" style={{ flex: 1 }}>
                <CardMedium bannerImage={editorpicks[0].bannerImage} author={editorpicks[0].author} title={editorpicks[0].title}/>
            </div>
            <div className="flex px-7 flex-col justify-between" style={{ flex: 1 }}>
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
    </div>
}

export default EditorsPick;