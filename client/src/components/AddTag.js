import React, { useState } from 'react';

export default function AddTag({ addTag }) {
  const [description, setDescription] = useState('');
  const [timeStamp, setTimeStamp] = useState('');
  const [keyword1, setKeyword1] = useState('')
  const [keyword2, setKeyword2] = useState('')
  const [keyword3, setKeyword3] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    const keywords = [keyword1, keyword2, keyword3]
    const newTag = { description, timeStamp, keywords }
    addTag(newTag)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input required value={description} onChange={e => setDescription(e.target.value)} type='text' placeholder='Div background colors...' />
      <input required value={timeStamp} onChange={e => setTimeStamp(e.target.value)} type='text' placeholder='00:34' />
      <input required value={keyword1} onChange={e => setKeyword1(e.target.value)} type='text' placeholder='HTML' />
      <input required value={keyword2} onChange={e => setKeyword2(e.target.value)} type='text' placeholder='HTML' />
      <input required value={keyword3} onChange={e => setKeyword3(e.target.value)} type='text' placeholder='HTML' />
      <button className='primary-button' type='submit'>Add tag to video!</button>
    </form>
  )
}
