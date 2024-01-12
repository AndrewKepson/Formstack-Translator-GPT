import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

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
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/forms">
          <Route index element={<Forms />} />
          <Route path=":id" element={<Form />}>
            <Route path="translate" element={<TranslateForm />} />
          </Route>
        </Route>
        <Route path="/translate" element={<TranslateForm />} />
      </Routes>
    </Layout>
  );
};

export default App;
