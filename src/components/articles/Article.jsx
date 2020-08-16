import React, {useState, useEffect} from 'react'

const Article = ({match}) => {
    const [ article, setArticle] = useState({})

    useEffect(() => {
        fetch(`/api/articles/${match.params.articleId}`)
        .then(res =>res.json())
        .then(article => setArticle(article))
        .catch(error => alert(error))
    })
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.text}</p>
        </div>
    )
}

export default Article
