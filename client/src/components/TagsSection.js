import React from 'react';
import TagCard from './TagCard';

export default function TagsSection({ tags, keyword }) {
  return (
    <div>
      {tags.map(tag => <TagCard keyword={keyword} key={tag.id} tag={tag} />)}
    </div>
  )
}
