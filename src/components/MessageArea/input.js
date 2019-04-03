import React from 'react'

export default function(props) {
  return <div className="my-4">
    <textarea
      className="form-control w-100 mx-1 my-1"
      placeholder="your message"
      autoComplete="off"
      rows={6}
      value={props.message}
      onChange={event=>props.inputChange(event.target.value,props.crypto)}
    />
    <textarea
      className="form-control w-100 mx-1 my-1"
      readOnly={true}
      placeholder="encoded message"
      autoComplete="off"
      rows={6}
      value={props.encoded}      
    />
  </div>
}