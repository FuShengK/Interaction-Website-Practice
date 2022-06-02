// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import NotFound from "../404/404";

export default function Secondhand() {
  // const [items, setItems] = useState([{
  //     name: '',
  //     price: 0,
  //     content: ''
  // }])

  // useEffect(() => {
  //   fetch("/secondhand").then(res => {
  //     if(res.ok) {
  //       return res.json()
  //     }
  //   }).then(jsonRes => setItems(jsonRes));
  // })

  return (
    // <div className='container'>
    //   <h1> Marketplace </h1>

    //   <>{items.map(item =>
    //   <div><h1>{item.name}</h1>
    //     <h2>{item.price}</h2>
    //     <p>{item.content}</p>
    //   </div>
    //     )}</>
    //   <button> <Link to='/secondhand/create'> Create New Listing </Link></button>  
    // </div>
    <NotFound/>
  )
}
