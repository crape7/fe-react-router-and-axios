import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

const MainPage = () => {
    const {pageId} = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState("");
  
    useEffect(() => {
      axios
        .get(`https://guestbook.jmoomin.com/articles/${pageId}`)
        .then((res) => {
          console.log(res);
          setPage(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);
  
    const deletePage = () => {
      axios
        .delete(`https://guestbook.jmoomin.com/${pageId}/articles`)
        .then((res) => {
          console.log(res);
          navigate(-1);
        });
    };
  
      return MainPage === null ? (
          <p>로딩중</p>
      ):(
          <>
          <h1>{page.title}</h1>
          <p>{page.content}</p>
          <p>작성일: {MainPage.createdAt}</p>
  
          <button onClick={() => navigate(`/articles/${pageId}/edit`)}>
          수정하기
          </button>
          <button onClick={deletePage}>제거하기</button>
          </>
      )
};

export default MainPage;