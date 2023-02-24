import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRepo } from "../modules";
import { RootState } from "../store";
import { addFavirite, removeFavorite } from "../store/github/githubSlice";

const UserCard = ({ user }: { user: IRepo }) => {
  const { favorites } = useSelector((state: RootState) => state.github);
  const [fav, setFav] = useState(favorites.includes(user.html_url));

  const dispatch = useDispatch();

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addFavirite(user.html_url));
    setFav(true);
  };

  const removeFromFavoite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(removeFavorite(user.html_url));
    setFav(false);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gary-200 transition-all">
      <a href={user.html_url} target="_blank">
        <h2 className="text-lg font-bold">{user.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{user.forks}</span>
          Watchers: <span className="font-bold">{user.watchers}</span>
        </p>
        <p className="font-thin text-sm">{user?.description}</p>
      </a>
      {!fav && (
        <button
          className="py-2 px-4 bg-orange-400 rounded hover:shadow-md transition-all"
          onClick={addToFavorite}
        >
          Add
        </button>
      )}

      {fav && (
        <button
          className="py-2 px-4 bg-red-800 rounded hover:shadow-md transition-all text-white hover:bg-red-600"
          onClick={removeFromFavoite}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default UserCard;
