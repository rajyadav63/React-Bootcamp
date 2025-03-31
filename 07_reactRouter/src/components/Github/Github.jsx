import React, { useEffect, useState } from 'react'
import { useRouteLoaderData } from 'react-router';

function Github() {
    const data = useRouteLoaderData()
    
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rajyadav63')
    //         .then(response =>{
    //             if(!response.ok){
    //                 throw new Error('Failed to fetch data')
    //             }
    //             return response.json();
    //         }) 
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='bg-amber-600 py-3 rounded-2xl'>
            Github followers: {data?.followers}
            <img src="{data.avatar_url}" alt="Git Profile dp" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response =await fetch('https://api.github.com/users/rajyadav63')
    return  response.json()
}
