/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import { apiUrl } from "../api/key";
import NoRecipe from "../utils/NoRecipe";
import { useParams } from "react-router-dom";
import RecipeHeader from "./recipe/RecipeHeader";
import RecipeIngredients from "./recipe/RecipeIngredients";

const FullRecipe = () => {
  const params = useParams();
  const id = params.id;

  const [fullRec, setFullRec] = useState<any>();

  useEffect(() => {
    const getRecipe = async () => {
      const res = await fetch(apiUrl + `/${id}`);
      const data = await res.json();

      setFullRec(data.data.recipe);
    };

    if (id !== "") {
      getRecipe();
    }

    console.log(id);
  }, [id]);

  console.log(fullRec);

  if (!fullRec) {
    return <NoRecipe />;
  } else {
    return (
      <>
        <div className="w-3/4 h-full text-slate-900 flex flex-col">
          <RecipeHeader fullRec={fullRec} />
          <RecipeIngredients ingredients={fullRec.ingredients} />
        </div>
      </>
    );
  }
};

export default FullRecipe;
