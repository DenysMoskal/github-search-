import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

import { useDebaunce } from "../hooks/debaunce";
import {
  useSerchUsersQuery,
  useLazyGetUserReposQuery,
} from "../store/github/githubApi";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState(false);

  const debaunce = useDebaunce(search);
  const { isError, isLoading, data } = useSerchUsersQuery(debaunce, {
    skip: debaunce.length < 2,
  });

  const [
    fetchReops,
    { isError: isErrorUser, isLoading: isLoadingUser, data: user },
  ] = useLazyGetUserReposQuery();

  const openUser = (username: string) => {
    fetchReops(username);
    setDrop(false);
  };

  useEffect(() => {
    setDrop(debaunce.length > 2 && data?.length! > 0);
  }, [debaunce, data]);

  return (
    <>
      {isError && (
        <p className="text-center text-6xl mt-[100px] text-red-700">Error!</p>
      )}
      <div className="flex justify-center h-screen w-screen">
        <div className="w-[560px] mt-2 relative">
          <input
            className="border-2 py-2 px-4  border-black border-radius rounded  h-[42px] w-full "
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul className="list-none absolute top-[42px] shadow-md max-h-[200px] w-full overflow-y-scroll">
            {isLoading && <h1>Loading...</h1>}
            {drop
              ? data?.map((item) => (
                  <li
                    className="py-2 px-4 hover:bg-slate-300 hover:text-white cursor-pointer"
                    onClick={() => openUser(item.login)}
                    key={item.id}
                  >
                    {item.login}
                  </li>
                ))
              : null}
          </ul>
          {user?.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
