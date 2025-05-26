import React, { useEffect, useState } from 'react'
import AsideBlock from '../AsideBlock'
import ArticlesListItem from './ArticlesListItem'
import { articlesList } from '../../../../data/articlesList'

const Articles = () => {
  const [articleCount, setArticleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg
        setArticleCount(3)
      } else if (window.innerWidth >= 768) { // md
        setArticleCount(4)
      } else { // sm
        setArticleCount(3)
      }
    }

    handleResize() // set on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Sort articles by createdAt date in descending order
  const sortedArticles = [...articlesList].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )
  // Get the latest articles based on the articleCount
  const latestArticles = sortedArticles.slice(0, articleCount)

  return (
    <AsideBlock name="Articles" path="/articles" buttonName="voir plus" content={
    <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0'>
          { latestArticles.map((article) => (
            <ArticlesListItem article={article} key={article.id}/>
          ))}
        </ul>
    } />
  )
}

export default Articles
