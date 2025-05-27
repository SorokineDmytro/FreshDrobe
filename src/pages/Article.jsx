import React from "react";
import { useLocation } from "react-router";
import Wrapper from "./Wrapper";
import { articlesList } from "../../data/articlesList";

const Article = () => {
  // Extract the article ID from the URL
  const articleId = useLocation().pathname.split("/").pop();
  const article = articlesList.find(
    (article) => article.id === parseInt(articleId)
  );

  // Function to format date to "DD.MM.YYYY"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year} ${hour}:${minute}`;
  };
  if (!article) {
    return (
      <Wrapper
        titleText="Article Not Found"
        pageContent={
          <p className="text-center text-red-500">Article not found.</p>
        }
      />
    );
  }
  return (
    <Wrapper
      titleText={article.title}
      customLastCrumb={article.title}
      pageContent={
        <div className="w-full flex flex-col gap-3">
          <span className="text-sm text-custom-gray">
            publié le {formatDate(article.createdAt)}
          </span>
          <div className="w-full">
            <img
              src={article.image}
              alt={article.title}
              className="float-left mr-4 md:mr-6 mb-1 md:mb-2 lg:mb-3 w-40 md:w-70 lg:w-100 h-auto object-cover rounded-4xl"
            />
            <p className="text-[15px]">{article.text}</p>
          </div>
        </div>
      }
    />
  );
};

export default Article;
