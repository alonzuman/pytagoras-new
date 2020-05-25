import React from 'react'

export default function KeywordIcon({ keyword }) {
  const keywordStyle = {
    backgroundColor: '#40aada',
    color: 'white',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    margin: '0.2rem',
    borderRadius: '1rem',
    height: 'fit-content',
    textAlign: 'center'
  }

  return (
    <div style={keywordStyle}>
      {keyword}
    </div>
  )
}
