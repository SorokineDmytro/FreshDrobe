import React from "react";
import Wrapper from "./Wrapper";
import { articlesList } from "../../data/articlesList";
import { Link } from "react-router";

const Articles = () => {
  // Sort articles by createdAt date in descending order
  const sortedArticles = [...articlesList].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
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

  // Truncate text if it exceeds a certain length
  const truncate = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <Wrapper
      titleText={"Articles"}
      pageContent={
        <ul className="flex flex-col gap-4 lg:gap-6">
          {sortedArticles.map((article) => (
            <li
              key={article.id}
              className="w-full p-4 md:p-5 flex flex-col gap-3 bg-white rounded-4xl duration-300 ease-in-out hover:shadow-xs hover:scale-[1.02] md:hover:scale-[1.005] transition-all"
            >
              <span className="text-sm text-custom-gray">
                {formatDate(article.createdAt)}
              </span>
              <Link to={`${article.id}`} className="md:hidden text-xl text-primary">{article.title}</Link>
              <article className="grid grid-cols-2 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_5fr] gap-3 md:gap-5 lg:gap-10 md:h-30 lg:h-auto">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Link to={`${article.id}`} className="hidden md:block text-xl text-primary hover:underline">{article.title}</Link>
                  <p className="block md:hidden text-[15px]">{truncate(article.text, 75)}</p>
                  <p className="hidden md:block lg:hidden text-[15px]">{truncate(article.text, 230)}</p>
                  <p className="hidden lg:block text-[15px]">{truncate(article.text, 1140)}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      }
    />
  );
};

export default Articles;
