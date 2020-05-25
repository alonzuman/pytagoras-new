import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import SearchResults from '../components/SearchResults';
import axios from 'axios';

export default function AllVideos() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVids = async () => {
      setIsLoading(true);
      const res = await axios.get('/api/videos/all');
      setResults(res.data)
      setIsLoading(false);
    }
    fetchVids();
  }, [])

  return (
    <div className='container'>
      {isLoading && <Spinner />}
      {!isLoading && <SearchResults searchResults={results} />}
    </div>
  )
}
