import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function AddTag() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [keyword1, setKeyword1] = useState('');
  const [keyword2, setKeyword2] = useState('');
  const [keyword3, setKeyword3] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const video = {
      videoUrl,
      description,
      keywords: [keyword1, keyword2, keyword3]
    }
    setIsLoading(true)
    const res = await axios.post('/api/videos', video, { headers: { 'Content-Type': 'application/json' } })
    if (res.data.message = 'Tag successfully added!') {
      setIsSubmitted(true);
    }
    setIsLoading(false);
  }

  if (isSubmitted) {
    return (<Redirect to='/' />)
  } else {
    return (
      <div className='container'>
        <h1>Add a new video</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Add video URL</label><br></br>
            <input
              placeholder='https://youtube.com/SIOJDDjdjdaio'
              onChange={e => setVideoUrl(e.target.value)}
              type='text'
              required
              value={videoUrl}
            />
          </div>
          <div className='form-group'>
            <label>Add video description</label><br></br>
            <input
              placeholder='A short video explaining about how to build a static html page'
              onChange={e => setDescription(e.target.value)}
              type='text'
              required
              value={description} />
          </div>
          <div className='form-group'>
            <label>Keywords</label><br></br>
            <input
              placeholder='HTML'
              onChange={e => setKeyword1(e.target.value)}
              type='text'
              required
              value={keyword1}
            />
            {(keyword1.length > 0) &&
              <input
                placeholder='HTML'
                onChange={e => setKeyword2(e.target.value)}
                type='text'
                value={keyword2}
              />
            }
            {(keyword2.length > 0) &&
              <input
                placeholder='HTML'
                onChange={e => setKeyword3(e.target.value)}
                type='text'
                value={keyword3}
              />
            }
          </div>
          <button type='submit'>Add Video</button>
        </form>
        {isLoading && <Spinner />}
      </div >
    )

  }

}
