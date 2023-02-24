import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeFavorite } from "../store/github/githubSlice";

const FavoritePage = () => {
  const { favorites } = useSelector((state: RootState) => state.github);
  const dispatch = useDispatch();

  if (favorites.length === 0)
    return <h2 className="font-bold text-center">No items</h2>;

  return (
    <div className="flex justify-center h-screen w-screen mt-2">
      <ul className="list-none text-center">
        {favorites.map((item) => (
          <li className="border-2 border-black  px-4 py-2 mt-2" key={item}>
            <a className="mr-[40px] c" href={item} target="_blank">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePage;
