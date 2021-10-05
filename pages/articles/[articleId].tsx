import { useRouter } from 'next/dist/client/router'
import React from 'react'
import NotFoundPage from '../../components/fallbacks/404';

const Article = () => {

    const { articleId } = useRouter().query;

    return (
        <div>
            {articleId ?? <NotFoundPage/>}
        </div>
    )
}

export default Article
