import React from "react";

function SearchInput() {
  return (
    <div className="form-control ">
      <div className="input-group border-2 border-grey-200 w-auto   mt-5 rounded-lg">
        <button className="btn btn-square bg-white border-none hover:bg-zinc-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Search"
          className="input text-md w-full focus:outline-none focus:bg-gray-100"
        />
      </div>
    </div>
  );
}

export default SearchInput;
