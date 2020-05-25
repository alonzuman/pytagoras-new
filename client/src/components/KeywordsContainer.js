import React from 'react';
import KeywordIcon from './KeywordIcon';

export default function KeywordsContainer({ keywords }) {
  const keywordsStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <div style={keywordsStyle}>
      {keywords.map(keyword => {
        if (keyword.length > 0) return (<KeywordIcon keyword={keyword} key={keyword} />)
      })}
    </div>
  )
}
