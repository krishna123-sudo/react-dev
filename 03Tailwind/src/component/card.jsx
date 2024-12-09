import React from 'react'

const Card = ({username="HC",post="not Assigned yet"}) => {
  return (
    <div>
        
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media.licdn.com/dms/image/v2/D5603AQFSSwuNR58Gxw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722442944449?e=1738800000&v=beta&t=Z-AL0APlBHhE0rJLF_aJcD4R_10IIumZvtt_dQQ9BsM" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure>

    </div>
  )
}

export default Card