import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../img/1.jpg"

 const Page2 = () => {
  return (
    <>
    <Link to="/">page1</Link>
        <h1>Page2</h1>
        <img src={img1} alt="" />
    </>
  )
}
export default Page2