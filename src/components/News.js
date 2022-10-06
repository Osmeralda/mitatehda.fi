import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'gatsby'
import * as styles from "../styles/keskukset.module.css"

function News() {

    const [iLnews, iLsetNews] = useState([])

    const iltaLehti = `https://api.il.fi/v1/articles/search?q=kuusamo&limit=20&image_sizes[]=size138`


    useEffect(() => {
        axios.get(iltaLehti)
        .then(res => {
            console.log(res)
            iLsetNews(res.data.response)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div className={styles.news}>
        <h2>Uutisia</h2>
        <ul>
        {iLnews.map(article => (
            <div>
                <li key={article.article_id}>
                    <div>
                        <img src={article.main_image_urls.size138} />
                        </div>
                        <div className={styles.white}>
                            {article.title}
                            <div>
                                <a href={`https://iltalehti.fi/${article.category.category_name}/a/${article.article_id}`}>
                                    Uutisen tarjoaa: {article.service_name}
                                </a>
                                </div>
                                </div>
                                </li>
                                </div>
        ))}
        </ul>

        <ul>
            {}
        </ul>
    </div>
  )
}

export default News