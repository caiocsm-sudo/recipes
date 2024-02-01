import { useState, BaseSyntheticEvent, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import egg from "/kawaii-egg.png";

const Header = ({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  const [val, setVal] = useState<string>("");

  const handleInputChange = (val: string): void => {
    setVal(val);
  };
  const handleSearch = (): void => {
    setSearch(val);
  };

  const keySearch = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 w-full">
            <div className="flex justify-between items-center w-full gap-4">
              <div>
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={egg}
                    alt="ressaytahs logo"
                    className="block w-7 h-7"
                  />
                  <h2 className="inline">Ressay Tahs</h2>
                </Link>
              </div>

              <div className="relative">
                <label className="sr-only">Search</label>

                <input
                  className="h-10 w-full rounded-lg text-slate-800 border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search recipe..."
                  value={val}
                  onChange={(e: BaseSyntheticEvent) =>
                    handleInputChange(e.target.value)
                  }
                  onKeyDown={keySearch}
                />

                <button
                  type="button"
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 transition hover:text-gray-700"
                  onClick={handleSearch}
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
