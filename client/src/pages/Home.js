import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import SearchResults from '../components/SearchResults';
import logo from './pytagoras-logo.jpg';


export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState(false);
  const [resultsMessage, setResultsMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = e => {
    setResultsMessage('');
    setKeyword(e);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchResults([]);
    setMessage(true);
    setIsLoading(true);
    const res = await axios.get(`/api/videos/s=${keyword}`);
    setIsLoading(false);
    if (res.data.length > 0) {
      setResultsMessage(`Found ${res.data.length} results for "${keyword}"`)
      setSearchResults(res.data)
    } else {
      setMessage('Couldnt find any result')
    }
  }

  return (
    <div>
      <div className="App">
        <div className='container'>
          <img src={logo} className='logo' alt='logo' />
          <form onSubmit={handleSubmit}>
            <input
              onChange={e => handleInput(e.target.value)}
              value={keyword}
              required
              type='text'
              placeholder='What are you looking for?'
            />
            <button type='submit'>Search</button>
          </form>
          {searchResults.length > 0 && <h2>{resultsMessage}</h2>}
          <SearchResults searchResults={searchResults} />
          {isLoading && <Spinner />}
          {message && <h3>{message}</h3>}
        </div>
      </div>
    </div>
  )
}
