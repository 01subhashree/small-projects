import React, { useState } from "react";
import Article from "./components/Article";
import ARTICLES from "./components/ArticleData";

export default function App() {
  const sortedByUpvotes = ARTICLES.sort((a, b) => b.upvotes - a.upvotes);

  const [sortArticles, setSortArticles] = useState(sortedByUpvotes);
  return (
    <div>
      <div
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Sort Article</h1>
        <div className="d-flex justify-content-center gap-4">
          <button
            onClick={() =>
              setSortArticles(
                ARTICLES.slice().sort((a, b) => b.upvotes - a.upvotes)
              )
            }
          >
            Most Upvoted
          </button>
          <button
            onClick={() =>
              setSortArticles(
                ARTICLES.slice().sort(
                  (a, b) => new Date(b.date) - new Date(a.date)
                )
              )
            }
          >
            Most Recent
          </button>
        </div>
      </div>
      <Article article={sortArticles} />
    </div>
  );
}
