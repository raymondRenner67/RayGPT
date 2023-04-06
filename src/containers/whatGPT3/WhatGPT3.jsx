import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin"  id = "wgpt3">
      <div className = "gpt3__whatgpt3-feature">
        <Feature title ="What is GPT-3" text = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className= "gpt3__whatgpt3-container">
        <Feature title="Chatbots"  text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
        <Feature title="Knowledgebase"  text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
        <Feature title="Education"  text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."/>
      </div>
    </div>
  )
}

export default WhatGPT3