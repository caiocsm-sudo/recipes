/* eslint-disable @typescript-eslint/no-explicit-any */

const RecipeIngredients = ({ ingredients }: { ingredients: any }) => {
  return (
    <>
      <section className="h-full w-full">
        <h3 className="text-center font-bold text-2xl uppercase w-fit m-auto p-2 rounded text-white bg-gradient-to-r from-indigo-500 to-indigo-700">
          Ingredients
        </h3>
        <div className="w-full h-3/5 px-8 py-8">
          <ul className="flex flex-col gap-2 flex-wrap h-full">
            {ingredients.map((ing: any) => {
              return (
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span>{`${ing.quantity === null ? "" : ing.quantity} ${
                    ing.unit
                  } ${ing.description}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default RecipeIngredients;
