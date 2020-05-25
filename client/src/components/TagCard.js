import React from 'react'

export default function TagCard({ tag }) {
  const cardStyle = {
    marginTop: '1rem',
    padding: '1rem',
    border: '1px solid #00000033',
    borderRadius: '1rem'
  }

  return (
    <div style={cardStyle}>
      <p><b>Description: </b>{tag.description}</p>
      <p><b>Time stamp: </b>{tag.timeStamp}</p>
      <p><b>Relevant keywords: </b>{tag.keywords}</p>
    </div>
  )
}
