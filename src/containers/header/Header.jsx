import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className = "gpt3__header section__padding">
        <div className = "gpt3__header-content">
          <h1 className = "gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque facilisis aliquam ante. Praesent sed turpis id tellus molestie odio fringilla accumsan. </p>
          
          <div className = "gpt3__header-content__input">
            <input type= "email" placeholder = "Your email"></input>
            <button type= "button">Get Started</button>
          </div>

          <div className = "gpt3__header-content__people">
            <img src = {people} alt = "People"/>
            <p>1,600 people requested access a visit within the last 24 hours</p>
          </div>
        </div>
        <div className = "gpt3__header-image">
            <img src = {ai} alt = "ai"/>
        </div>
        
    </div>
  )
}

export default Header