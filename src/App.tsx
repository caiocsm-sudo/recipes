/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { apiUrl, apikey } from "./api/key";
import Header from "./components/Header";
import Panel from "./components/Panel";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import FullRecipe from "./components/FullRecipe";
import MainPanel from "./components/MainPanel";

function App() {
  const [recipe, setRecipe] = useState<any>();
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (search !== "") {
      setLoading(true);
      fetch(apiUrl + `?search=${search}` + "&key=" + apikey)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRecipe(data);
          setLoading(false);
        });
    }
  }, [search]);

  console.log(recipe);

  return (
    <>
      <Routers>
        <Header setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <MainPanel>
                <Panel recipe={recipe} loading={loading} />
                <FullRecipe />
              </MainPanel>
            }
          ></Route>
          <Route
            path="/:id"
            element={
              <MainPanel>
                <Panel recipe={recipe} loading={loading} />
                <FullRecipe />
              </MainPanel>
            }
          ></Route>
        </Routes>
      </Routers>
    </>
  );
}

export default App;
