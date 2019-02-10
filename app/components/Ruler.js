import React, {Component} from 'react'
import styles from './Ruler.css'

class Ruler extends Component {

  constructor(props) {
    super(props)
  }

  drawBlock(number) {
    return (
      <div className={styles['block']} key={number}>
        <p>
          {number !== 0 ? number * 5 + 5 : 5}
        </p>
      </div>
    )
  }

  drawRuler() {
    const rulerElements = []
    for (let i = 0; i < 50; i++) {
      rulerElements.push(this.drawBlock(i))
    }
    return rulerElements
  }

  render() {
    return (
      <div className={styles['ruler-container']}>
        {this.drawRuler()}
      </div>
    )
  }
}

export default Ruler
