import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/krishna123-sudo')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <p>GitHub Followers: {data.followers}</p>
      <p>GitHub Repositories: {data.public_repos}</p>
      {/* <p>GitHub Bio: {data.bio}</p> */}
      <div className='flex justify-between items-center'>
          <img src={data.avatar_url} alt="GitHub Profile Picture" width={300} />
          <p className='ml-6 text-left'>{data.bio}</p>
      </div>
      <div>
        <button className="mt-4 px-4 py-2 bg-green-500 hover:bg-blue-600 text-white font-bold rounded"
          onClick={() => window.open("https://pastebin.com/u/kisu123", "_blank")}>
          Visit My PasteBibn
        </button>
      </div>
    {/* <img src={data.avatar_url} alt="Git picture" width={300} /> */}
    <button
    className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
    onClick={() => window.open("https://github.com/krishna123-sudo?tab=repositories", "_blank")}
    >
    Visit GitHub
     </button>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/krishna123-sudo')
    return response.json()
}