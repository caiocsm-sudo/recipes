/* eslint-disable @typescript-eslint/no-explicit-any */

const RecipeHeader = ({ fullRec }: { fullRec: any }) => {
  return (
    <>
      <div className="w-full h-2/5 flex bg-gradient-to-r from-gray-50 to-gray-100 mb-4 justify-center items-center gap-2 p-6">
        <div className="w-2/4 h-1/3">
          <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700">
            {fullRec.title}
          </h2>
          <div className="flex flex-row gap-2 mt-1">
            <div className="flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon inline icon-tabler icon-tabler-clock"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 7v5l3 3" />
              </svg>
              <b>{fullRec.cooking_time}</b> Minutes
            </div>
            <div className="flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <b>{fullRec.servings}</b> Servings
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full">
          <img
            src={fullRec.image_url}
            className="block w-full object-cover h-full rounded-md"
            alt="recipe image"
          />
        </div>
      </div>
    </>
  );
};

export default RecipeHeader
