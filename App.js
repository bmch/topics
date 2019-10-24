import React, { useState, useEffect } from "react"
import './App.css';
import TopicForm from './TopicForm';
import TopicList from './TopicList';

const App = () => {

  const [topics, setTopics] = useState([])
  const [newtopic, setNewtopic] = useState("")
  const BASE_URL = 'http://localhost:3000/topics/'

  useEffect(() => { updateTopics() }, [])

  const updateTopics = () => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(topics => {
        topics.sort((a,b)=> {return a.score > b.score ? -1 : b.score > a.score ? 1 : 0;} )
        setTopics(topics)
      })
  }

  const sendRequest = async (url = '', data = {}, METHOD) => {
    const response = await fetch(url, {
      method: `${METHOD}`,
      headers: { 'Content-Type': 'application/json' },
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response;
  }

  const handleChange = event => setNewtopic(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
     await sendRequest(BASE_URL, { title: newtopic }, 'POST')
    updateTopics()
    setNewtopic("")
  }

  const handleDelete = async topic => {
    await sendRequest(`${BASE_URL}${topic._id}`, {}, 'DELETE')
    updateTopics()
  }

  const handleUp = async topic => {
    await sendRequest(`${BASE_URL}${topic._id}/up`, {}, 'PUT')
    updateTopics()
  }
  const handleDown = async topic => {
     await sendRequest(`${BASE_URL}${topic._id}/down`, {}, 'PUT')
    updateTopics()
  }

  return (
    <div>
      <h1>Topics</h1>
      <div className="container">
        <TopicForm handleChange={handleChange} newtopic={newtopic} handleSubmit={handleSubmit} />
        <TopicList topics={topics} handleDelete={handleDelete} handleup={handleUp} handledown={handleDown} />
      </div>
    </div>
  )
}


export default App;
