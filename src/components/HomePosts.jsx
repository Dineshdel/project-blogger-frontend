/* eslint-disable react/prop-types */
import { IF } from "../url";

const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex mt-8 space-x-4 hover:bg-gray-100 rounded-md hover:scale-105 shadow-md">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={IF + post.photo}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl italic font-bold md:mb-2 mb-1 md:text-2xl text-amber-400">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm  font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="italic text-sm md:text-lg">
          {post.desc.slice(0, 200)}
          <span style={{ fontWeight: "600" }} className="hover:text-blue-400">
            ...Read more
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
