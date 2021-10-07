import React from 'react'

const ArticleParagraph = (props: { content: string }) => {
    return (
        <div className="text-2xl">
            <p className="my-8">
                {props.content}
            </p>
        </div>
    )
}

export default ArticleParagraph
