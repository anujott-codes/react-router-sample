import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';

function Github() {
    const [data, setData] = useState(0)
    useEffect(() => {
        const data = Math.floor(Math.random()*100000)
        setData(data)
        },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data}
      <img src="https://avatars.githubusercontent.com/u/181885609?v=4" alt="Git picture" width={300} />
    </div>
  )
}

export default Github
