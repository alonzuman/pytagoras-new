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
      <p>
        {tag.description}
      </p>
      <p>
        time stamp: {tag.timeStamp}
      </p>
      <p>
        keywords: {tag.keywords}
      </p>
    </div>
  )
}
