import React from 'react'

export default function TagCard({ tag, keyword }) {
  const cardStyle = {
    marginTop: '1rem',
    padding: '1rem',
    border: '1px solid #00000033',
    borderRadius: '1rem',
  }

  const keywordIcon = {
    padding: '0.5rem',
    margin: '0.2rem',
    borderRadius: '1rem',
    placeContent: 'center',
    width: '100%',
  }

  let keywords = tag.keywords.filter(word => (word.length > 0))

  return (
    <div style={cardStyle}>
      <p><b>Description: </b>{tag.description}</p>
      <p><b>Time stamp: </b>{tag.timeStamp}</p>
      <div className='keywords-container' >
        {keywords.map(keyword => <div className='keyword-icon' style={keywordIcon}>{keyword}</div>)}
      </div>
    </div>
  )
}
