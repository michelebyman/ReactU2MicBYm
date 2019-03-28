import React, { Component } from 'react';
import styles from '../cssFiles/card.module.css';


class CardComponent extends Component {


  render() {
    return (
      <div>
        <div className={styles.card}>
          <h3>{this.props.cardHeader}</h3>
          {this.props.children}   
        </div>
      </div>
    )
  }
}

export default CardComponent;
