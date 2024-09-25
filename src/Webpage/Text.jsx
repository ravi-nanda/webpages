import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const Text = () => {
  let { userId } = useParams();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:userId" element={<Home />}>
            <Route path="contact" component={Contact} />
            <Route path="*" component={NoPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Contact = () => {};
const NoPage = () => {
  <button>contact page</button>;
};

export default Text;
