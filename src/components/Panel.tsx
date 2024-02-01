/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Loading from "../utils/loading";
import Recipe from "./Recipe";

const Panel = ({ recipe, loading }: { recipe: any; loading: boolean }) => {
  return (
    <section className="flex flex-row flex-nowrap w-1/4 border-e">
      <div className="rounded-md flex flex-col w-full h-full">
        {!loading ? (
          recipe?.data.recipes.map((el: any) => {
            return (
              <>
                <Link to={`/${el.id}`}>
                  <Recipe
                    img={el.image_url}
                    key={el.id}
                    title={el.title}
                    desc={el.publisher}
                  />
                </Link>
              </>
            );
          })
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default Panel;
