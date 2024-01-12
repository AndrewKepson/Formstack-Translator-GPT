import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { setUser } from "./app/features/auth";

import { Layout } from "./components";
import { Authorization, Forms, Form, TranslateForm } from "./routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user");

    if (isLoggedIn) {
      const user = JSON.parse(isLoggedIn);

      dispatch(setUser(user));
    }
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/forms" />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/forms/:id" element={<Form />} />
        <Route path="/forms/:id/translate" element={<TranslateForm />} />
      </Routes>
    </Layout>
  );
};

export default App;
