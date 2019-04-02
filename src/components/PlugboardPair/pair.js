import React from 'react'

function PlugboardPair(props) {  
    return <div className="">
      Pair {props.num}
      <div>
        <select
          className="form-control my-1 text-center"
          value={props.pairKey}
          onChange={(e) => props.onChangeKey(e.target.value, props.num)}
        >
          <option>{props.pairKey}</option>
          {props.possible}
        </select>
      </div>
      <div>
        <select 
          className="form-control my-1 text-center"
          value={props.pairValue}
          onChange={(e) => props.onChangeValue(e.target.value, props.num)}
        >
          <option>{props.pairValue}</option>
          {props.possible}
        </select>
      </div>
    </div>  
}

export default PlugboardPair