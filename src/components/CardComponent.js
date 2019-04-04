import React, { Component, Fragment } from 'react';
import styles from '../cssFiles/card.module.css';
import PropTypes from 'prop-types'

// displays the card and the structure it gets from props
class CardComponent extends Component {
   static propTypes = {
    myInfo: PropTypes.string,
    cardHeader: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      showOrHide: false,
    }
  }

  showAndHideContent = () => {
    this.setState({
      showOrHide: !this.state.showOrHide
    })
  }

  render() {
    return (
      <div>
        <div className={styles.card}>
          <h3 className={styles.header}>{this.props.cardHeader}</h3>
          {this.props.children}
          {this.state.showOrHide && <div> {this.props.myInfo} </div>}
          {this.props.myInfo &&
            <Fragment>
               {this.state.showOrHide ?
                <button onClick={this.showAndHideContent}  className={`btn ${styles.ShowContentBtn}`}>Hide Info</button>
                :
                <button onClick={this.showAndHideContent}  className={`btn ${styles.ShowContentBtn}`}>Show info</button>}
            </Fragment>
          }
        </div>
      </div>
    )
  }
}

export default CardComponent;
