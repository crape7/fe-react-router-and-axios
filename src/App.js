import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import Main from "./pages/Main";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<Main />} />
        <Route path="/:ownerId/create" element={<CreatePage />} />
        <Route path="/articles/:articleId" element={<MainPage />} />
        <Route path="/articles/:articleId/edit" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

