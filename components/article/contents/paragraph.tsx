const ArticleParagraph = (props: { content: string, editMode?:boolean }) => {

    return (
        <div className="text-2xl my-6">
            <p contentEditable={props.editMode} suppressContentEditableWarning>
                {props.content}
            </p>
        </div>
    )
}

export default ArticleParagraph
