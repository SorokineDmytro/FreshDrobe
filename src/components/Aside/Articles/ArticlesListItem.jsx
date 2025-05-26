import React from 'react'
import { Link } from 'react-router'

const ArticlesListItem = ({ article }) => {
    // Function to format date to "DD.MM.YYYY"
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
    
  return (
          <li className='overflow-hidden bg-white w-full rounded-4xl lg:rounded-none'>
            <Link to={`/articles/${article.id}`} className='group flex flex-col p-4 md:p-5 text-sm lg:text-base text-custom-gray duration-300 ease-in-out lg:border-t border-gray-200 lg:hover:border-l-3 lg:hover:border-l-primary'>
              <span className='mb-2.5'>{formatDate(article.createdAt)}</span>
              <div className='flex items-start gap-4'>
              <img src={article.image} alt={article.title} className='h-15 w-15 object-cover rounded-full' />
              <h4 className='pt-2 group-hover:text-primary duration-300 ease-in-out'>{article.title}</h4>
              </div>
            </Link>
          </li>
  )
}

export default ArticlesListItem
