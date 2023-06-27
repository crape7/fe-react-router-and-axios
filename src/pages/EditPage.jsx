import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

const EditPage = () => {
    const {ownerId} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    const titleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const contentChange = (e) => {
      setContent(e.target.value);
    };
  
  const submit = () => {
      axios
      .post(`https://guestbook.jmoomin.com/${ownerId}/articles`,{
        title,
        content,
      })
      .then((res) => {
        console.log(res);
          navigate(-1);
      })
      .catch((e) => {
          console.log(e);
          alert(e);
      });
  };
  
      return (
          <>
          <h1> {ownerId}님에게 방명록 남기기</h1>
  
          <input
          name="text"
          placeholder="제목"
          onChange={titleChange}
          value={title}
        />
        <br />
        <textarea
          name="text"
          placeholder="본문"
          onChange={contentChange}
          value={content}
        />
        <br />
  
        <button onClick={submit}>방명록 남기기</button>
          </>
      )
};

export default EditPage;