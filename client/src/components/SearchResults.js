import React from 'react';
import VideoCard from './VideoCard';

export default function SearchResults({ searchResults, keyword }) {
  let newResults = [];
  searchResults.forEach(result => {
    if (result.keywords.includes(keyword)) return newResults.push(result)
  })

  return (
    <div>
      {searchResults.map(result => <VideoCard keyword={keyword} video={result} key={result._id} />)}
    </div>
  )
}
