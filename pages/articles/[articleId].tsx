import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import NotFoundPage from '../../components/fallbacks/404';
import Navbar from '../../components/home/navbar';
import SearchBar from '../../components/home/searchbar';
import 'tailwindcss/tailwind.css'
import ArticleBanner from '../../components/article/articleBanner';
import ArticleParagraph from '../../components/article/contents/paragraph';
import ArticleImage from '../../components/article/contents/image';

const renderArticle = (contentItem:{type:'paragraph' | 'image',content:'string', caption?:string,key?:number}) => {
    switch (contentItem.type) {
        case 'paragraph':
            return <ArticleParagraph content={contentItem.content} key={contentItem.key} />
        case 'image':
            return <ArticleImage imgSource={contentItem.content} caption={contentItem.caption} key={contentItem.key}/>
    }
}

const article = {
    title: 'A beginner’s guide to TypeScript (with some history of the TypeScript)',
    author: 'Anirban Deb Singha',
    published: 'October 8th, 2021',
    body: [
        {
            key:0,
            type: 'paragraph',
            content: 'JavaScript is arguably one of the most popular programming languages as of 2020 and its popularity is just growing day by day. The primary reason why it is so popular is because it is the default language of the web frontend. What that means is that browsers can only understand JavaScript and nothing else.'
        },
        {
            key:1,
            type: 'paragraph',
            content: 'This unfortunate condition enforced every web developer to become a JavaScript developer. So as the web development industry demand grew for web developers, more and more people became the JavaScript developers.'
        },
        {
            key:2,
            type: 'paragraph',
            content: 'At first, it seems like a good thing but it’s not that impressive. JavaScript, though it might be on the top of the popularity chart in terms of its use, but I would not use “popular” as the exact word to describe it.'
        },
        {
            key:3,
            type: 'paragraph',
            content: 'JavaScript is not an old programming language like the C or C++ programming language. Actually it was not even designed to behave like a general-purpose programming language. It was developed by Brendan Eich in 1995 for the Netscape browser in 10 days. It was supposed to be a scripting language to add dynamic behavior to the web page.'
        },
        {
            key:4,
            type:'image',
            content:'https://miro.medium.com/max/4800/1*LvzzWugE-J7qo9p1u27RSQ.png',
            caption:'(Source: StackOverflow Developer Survey (2019))'
        },
        {
            key:5,
            type:'paragraph',
            content:'From an online survey conducted by StackOverflow in 2019, JavaScript is the most popular language on the planet and Node.js deserves huge credit for this since it is the most popular tool (actually platform) as shown below.'

        },
        {
            key:6,
            type:'image',
            content:'https://miro.medium.com/max/4800/1*gcFzAGhOrWstKbcqbshmNw.png',
            caption:'Program.js'
        }
    ]
}

const Article = () => {

    const { articleId, edit } = useRouter().query;

    const [titleText, setTitleText] = useState('A beginner’s guide to TypeScript (with some history of the TypeScript)')

    useEffect(() => console.log('state changed'), [titleText]);

    return (
        <div>
            <Navbar />
            <SearchBar />
            <ArticleBanner />

            <div className=" mt-10 mx-auto max-w-7xl my-5 items-center " >
                <p className="text-5xl font-semibold" suppressContentEditableWarning contentEditable={Boolean(edit)} onInput={(e) => setTitleText(e.currentTarget.innerText)}>
                    {article.title}
                </p>

                <div className="mt-8 text-lg">
                    <p>By <b>{article.author}</b></p>
                    <p className="text-gray-500">Published {article.published}</p>
                </div>

                <div className="text-2xl">
                    {article.body.map((contentItem:any) => renderArticle(contentItem)) }
                </div>

            </div>

        </div>
    )
}

export default Article
