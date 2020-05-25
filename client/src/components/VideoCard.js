import React, { useState } from 'react'
import TagsSection from './TagsSection';
import AddTag from './AddTag';
import axios from 'axios';
// import KeywordsContainer from './KeywordsContainer';
import './VideoCard.css';
import Spinner from './Spinner';

export default function VideoCard({ video, keyword }) {
  const [vid, setVid] = useState(video);
  const [tagsOpen, setTagsOpen] = useState(false);
  const [isAddingTags, setIsAddingTags] = useState(false);
  const [tagAdded, setTagAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const buttonsBar = {
    display: 'flex'
  }

  const addTag = async (tag) => {
    setIsLoading(true);
    const res = await axios.post(`/api/videos/${video._id}/tags`, tag, { headers: { 'Content-Type': 'application/json' } })
    setIsLoading(false);
    setTagAdded(true);
    setIsAddingTags(false);
    setVid({
      ...vid,
      tags: [...vid.tags, res.data.tag]
    })
  }

  return (
    <div className="video-card-container">
      <div className='video-card-header'>
        <h2>{vid.description}</h2>
        {/* <KeywordsContainer keywords={vid.keywords} /> */}
      </div>
      <div style={buttonsBar}>
        <a id='link-button' className='secondary-button' href={vid.videoUrl} target='_blank' alt={vid.name}>Watch video <i className="fas fa-video"></i></a>
        {!isAddingTags && <button className='secondary-button' onClick={() => setIsAddingTags(!isAddingTags)}>Add a tag <i className="fas fa-tags"></i></button>}
        {isAddingTags && <button className='secondary-button' onClick={() => setIsAddingTags(!isAddingTags)}>Close</button>}
        {!tagsOpen && <button className='secondary-button' onClick={() => setTagsOpen(!tagsOpen)}>Open tags <i className="fas fa-chevron-down"></i></button>}
        {tagsOpen && <button className='secondary-button' onClick={() => setTagsOpen(!tagsOpen)}>Close tags <i className="fas fa-chevron-up"></i></button>}
      </div>
      {isLoading && <Spinner />}
      {tagAdded && <h1>Added successfuly</h1>}
      {isAddingTags && <AddTag addTag={addTag} />}
      {(tagsOpen && (vid.tags.length > 0)) && <TagsSection keyword={keyword} tags={vid.tags} />}
    </div>
  )
}
