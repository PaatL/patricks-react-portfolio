import React from 'react'
import eImage from '../images/ecomExample.png';

const Portfolio = () => {
  const handleClick = (e) => { 
    
    console.log(e.target.value) }  
  return (
    <div>Portfolio

        <h2>Porfolio stuff Here
           <a href="https://github.com/PaatL/patricks-ecommerce-backend" target ="_blank" rel= "noopener noreferrer">
           <img onClick={handleClick} src={eImage} alt="ecommerce image" />
        </a></h2>
    </div>
    
  )
}

export default Portfolio