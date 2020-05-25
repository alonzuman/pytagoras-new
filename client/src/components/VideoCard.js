import React, { useState } from 'react'
import TagsSection from './TagsSection';
import AddTag from './AddTag';
import axios from 'axios';
import KeywordsContainer from './KeywordsContainer';
import './VideoCard.css';

export default function VideoCard({ video }) {
  const [tagsOpen, setTagsOpen] = useState(false);
  const [isAddingTags, setIsAddingTags] = useState(false);
  const buttonsBar = {
    display: 'flex'
  }


  const addTag = async (tag) => {
    console.log(tag)
    const res = await axios.post(`/api/videos/${video._id}/tags`, tag, { headers: { 'Content-Type': 'application/json' } })
    console.log(res)
  }

  return (
    <div className="video-card-container">
      <div className='video-card-header'>
        <h2>{video.description}</h2>
        <KeywordsContainer keywords={video.keywords} />
      </div>
      <div style={buttonsBar}>
        <a id='link-button' className='secondary-button' href={video.videoUrl} target='_blank' alt={video.name}>Watch video <i className="fas fa-video"></i></a>
        {!isAddingTags && <button className='secondary-button' onClick={() => setIsAddingTags(!isAddingTags)}>Add a tag <i className="fas fa-tags"></i></button>}
        {isAddingTags && <button className='secondary-button' onClick={() => setIsAddingTags(!isAddingTags)}>Close</button>}
        {!tagsOpen && <button className='secondary-button' onClick={() => setTagsOpen(!tagsOpen)}>Open tags <i className="fas fa-chevron-down"></i></button>}
        {tagsOpen && <button className='secondary-button' onClick={() => setTagsOpen(!tagsOpen)}>Close tags <i className="fas fa-chevron-up"></i></button>}
      </div>
      {isAddingTags && <AddTag addTag={addTag} />}
      {(tagsOpen && (video.tags.length > 0)) && <TagsSection tags={video.tags} />}
    </div>
  )
}
