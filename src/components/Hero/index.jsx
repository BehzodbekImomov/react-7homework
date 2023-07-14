

// import PropTypes from 'prop-types';
import {  NavLink } from "react-router-dom"
import "./Hero.scss"

const Hero = (c) => {

  return (
    <div className="container">

      <li className="card">
        <NavLink to={c.to}>
        <img src={c.image} alt="" />
        <p>{c.name}</p>
        </NavLink>
      </li>
    </div>
  )
}


export default Hero