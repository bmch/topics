import React from 'react';

function TopicForm(props) {
  return (
    <form className="add-topic" onSubmit={props.handleSubmit}>
      <h3>Add a topic</h3>
      <label>
        Topic:
          <input type="text" value={props.newtopic} onChange={props.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TopicForm;
