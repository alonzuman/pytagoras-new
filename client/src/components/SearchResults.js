import React from 'react';
import VideoCard from './VideoCard';

export default function SearchResults({ searchResults }) {
  return (
    <div>
      {searchResults.map(result => <VideoCard video={result} key={result._id} />)}
    </div>
  )
}
