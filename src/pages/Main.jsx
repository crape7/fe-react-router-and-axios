import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Main = () => {
    const { ownerId } = useParams();
    useEffect(() => {
        axios
        .get(`https://guestbook.jmoomin.com/${ownerId}/articles`)
        .then((res) => {
            setArticles(res.data);
        })
        .catch((e) => {
            console.log(e);
        });
     }, [ownerId]);

const [articles, setArticles] = useState([]);
console.log(articles);

   
    return (
        <>
        <h1> {ownerId}님의 방명록</h1>

        {articles.length ? (
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.id}>
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>방명록이 없습니다.</p>
      )}
      
        <button onClick={() => Navigate("/${ownerId}")}>방명록 남기기</button>
        </>
    )
};

export default Main;