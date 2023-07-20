import React from "react";

export default function Article({ article }) {
  return (
    <div className="p-4">
      <h2>Article</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {article.map((ele, index) => (
            <tr key={index}>
              <td>{ele.title}</td>
              <td>{ele.upvotes}</td>
              <td>{ele.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
