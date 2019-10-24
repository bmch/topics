import React from 'react';

function Topic(props) {
  return (
    <div className="item" >
      <div className="score">
        <div>
          <button
            onClick={() => props.handleup(props.topic)}
          >Up</button></div>
        <div className="score">{props.topic.score}</div>
        <div>
          <button
            onClick={() => props.handledown(props.topic)}
          >Down</button></div>
      </div>
      <div>
        <h1>{props.topic.title}</h1>
        <p>{props.topic.published_at}</p>
      </div>
      <div className="delete-div">
        <button
          onClick={() => props.handleDelete(props.topic)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Topic;