import React, { Component } from 'react';
import styles from '../cssFiles/card.module.css';

// displays the card and the structure it gets from props
class CardComponent extends Component {


  render() {
    return (
      <div>
        <div className={styles.card}>
          <h3 className={styles.header}>{this.props.cardHeader}</h3>
          {this.props.children}   
        </div>
      </div>
    )
  }
}

export default CardComponent;
