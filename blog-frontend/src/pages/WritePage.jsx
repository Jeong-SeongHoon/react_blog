import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';

const WritePage = () => {
  const originalPostId = useSelector(({ write }) => write.originalPostId);
  console.log('WritePage');
  return (
    <Responsive>
      <Helmet>
        <title>REACTERS - {originalPostId ? `EDIT` : `WRITE`}</title>
      </Helmet>
      <EditorContainer></EditorContainer>
      <TagBoxContainer></TagBoxContainer>
      <WriteActionButtonContainer></WriteActionButtonContainer>
    </Responsive>
  );
};

export default WritePage;
