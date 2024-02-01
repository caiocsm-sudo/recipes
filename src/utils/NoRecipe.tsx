const NoRecipe = () => {
  return (
    <>
      <section className="bg-white w-2/3">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              No recipes found. You can type what you want to cook in the header
              input above.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoRecipe;
