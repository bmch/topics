import React from 'react';
import Topic from './Topic';

function TopicList(props) {
  return (
    props.topics.map((topic, index) => {
      return <Topic topic={topic} key={index}
        handleDelete={props.handleDelete}
        handleup={props.handleup}
        handledown={props.handledown}
      />
    })
  )
}

export default TopicList;
