import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function AddVideo() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [keyword1, setKeyword1] = useState('');
  const [keyword2, setKeyword2] = useState('');
  const [keyword3, setKeyword3] = useState('');

  const [tagDescription, setTagDescription] = useState('');
  const [timeStamp, setTimeStamp] = useState('');
  const [tagKeyword1, setTagKeyword1] = useState('')
  const [tagKeyword2, setTagKeyword2] = useState('')
  const [tagKeyword3, setTagKeyword3] = useState('')

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const tag = {
      description: tagDescription,
      timeStamp,
      keywords: [tagKeyword1, tagKeyword2, tagKeyword3]
    }

    const video = {
      videoUrl,
      description,
      keywords: [keyword1, keyword2, keyword3],
      tags: [tag]
    }

    setIsLoading(true)
    const res = await axios.post('/api/videos', video, { headers: { 'Content-Type': 'application/json' } })
    if (res.data.message = 'Tag successfully added!') {
      setIsSubmitted(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }

  if (isSubmitted) {
    return (<Redirect to='/' />)
  } else if (step === 1) {
    return (
      <div className='container'>
        <h1>Add a new video</h1>
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
        <button className='primary-button' onClick={() => setStep(2)}>Next</button>
      </div >
    )
  } else if (step === 2) {
    return (
      <div className='container'>
        <h1>Add your first tag to it!</h1>
        <input onChange={e => setTagDescription(e.target.value)} value={tagDescription} type='text' placeholder='How to position an HTML button' />
        <input onChange={e => setTimeStamp(e.target.value)} value={timeStamp} type='text' placeholder='00:34' />
        <input onChange={e => setTagKeyword1(e.target.value)} value={tagKeyword1} type='text' placeholder='HTML' />
        <input onChange={e => setTagKeyword2(e.target.value)} value={tagKeyword2} type='text' placeholder='CSS' />
        <input onChange={e => setTagKeyword3(e.target.value)} value={tagKeyword3} type='text' placeholder='Javascript' />
        <button className='primary-button' onClick={handleSubmit}>Submit Video</button>
        {isLoading && <Spinner />}
      </div>
    )
  }

}
