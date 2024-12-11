import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold mb-4">GitHub Portfolio</h1>
      
      {/* Profile and Bio Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-8 mb-6">
        <img
          src={data.avatar_url}
          alt="GitHub Profile"
          className="rounded-full border-4 border-blue-500 mb-4 lg:mb-0"
          width={200}
        />
        <div className="text-left w-full lg:w-1/2">
          <p className="text-xl font-medium mb-2">{data.name}</p>
          <p className="text-lg text-gray-400 mb-4">{data.bio}</p>
          {/* <p className="mb-2">Followers: <span className="text-blue-400">{data.followers}</span></p> */}
          <p className="mb-2">Public Repos: <span className="text-blue-400">{data.public_repos}</span></p>
        </div>
      </div>

      {/* GitHub Visit Button */}
      <div className="mt-6">
        <button
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md"
          onClick={() => window.open("https://github.com/krishna123-sudo?tab=repositories", "_blank")}
        >
          Visit My GitHub
        </button>
      </div>

      {/* Stats Section */}
      <div className="mt-8 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${data.login}&theme=vue-dark&show_icons=true&hide_border=false&count_private=true`}
          alt="GitHub Stats"
          className="w-full lg:w-1/2"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=krishna123-sudo&theme=vue-dark&show_icons=true&hide_border=false&layout=compact"
          alt="Most Used Language"
          className="w-full lg:w-1/2"
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/krishna123-sudo');
  return response.json();
};
