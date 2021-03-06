import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
/**
 *
 */
const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;
const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <div key={tag} className="tag" to={`/?tag=${tag}`}>
          #{tag}
        </div>
      ))}
    </TagsBlock>
  );
};

export default Tags;
