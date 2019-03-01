import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
             {props.cards.map(cards => (
              <div key={cards.id} className="cards">
              <img src={cards.img} alt={cards.name} />

             )
              <div>
                    <h3>{cards.name}</h3>
                  </div>
                </div>
              ))}
            {/* </> */}
         
        </div>
  )
}
             

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
  headline: PropTypes.string.isRequired,
  author:PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
    })
  )
  }

export default Cards;