import React from 'react'
import pt from 'prop-types'

import PlugboardPair from 'components/PlugboardPair'

function Plugboard(props) {
  const getPossible = () => {
    return props.possible.map((element, index) => {
      return <option key={index}>
        {element}
      </option>
    })
  }

  const getKey = (num) => {
    return Object.keys(props.board[num])[0]
  }
  const numsTop = [1,2,3,4,5]
  const numsBottom = [6,7,8,9,10]

  return <div className="my-4">
    <h4 className="my-2">Plugboard</h4>
    <div className="d-flex justify-content-between">
    {
      numsTop.map((element, index) => {
        return <PlugboardPair
        key={"plugboard_pair_top_"+index}
          theme={props.theme}
          num={element}
          possible={getPossible()}
          pairKey={getKey(element)} 
          pairValue={props.board[element][getKey(element)]} 
          onChangeKey={props.onChangeKey} 
          onChangeValue={props.onChangeValue}
        />
      })
    }
    </div>
    <div className="d-flex justify-content-between">
    {
      numsBottom.map((element, index) => {          
        return <PlugboardPair
          key={"plugboard_pair_bottom_"+index}
          theme={props.theme}
          num={element}
          possible={getPossible()} 
          pairKey={getKey(element)} 
          pairValue={props.board[element][getKey(element)]}
          onChangeKey={props.onChangeKey} 
          onChangeValue={props.onChangeValue}
        />
      })
    }
    </div>          
  </div>  
}

Plugboard.propTypes = {
  board: pt.arrayOf(pt.object).isRequired,
  possible: pt.arrayOf(pt.string).isRequired,
  onChangeKey: pt.func.isRequired,
  onChangeValue: pt.func.isRequired,
}

export default Plugboard