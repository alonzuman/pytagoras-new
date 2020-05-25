import React from 'react';
import TagCard from './TagCard';

export default function TagsSection({ tags }) {
  return (
    <div>
      {tags.map(tag => <TagCard key={tag._id} tag={tag} />)}
    </div>
  )
}
