import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  }
]
const Features = () => {
  return (
    <div className = "gpt3__features section__padding" id = "features" >
      <div className = "gpt3__features-heading">
        <h1 className = "gradient__text">The Future is Now and You Just Need To Realize It. Step into Your Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item , index) =>(
          <Feature title={item.title} text= {item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features