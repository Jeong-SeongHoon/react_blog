import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WriteActionButton from '../../components/write/WriteActionButton';
import { updatePost, writePost } from '../../modules/write';

const WriteActionButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  const onCancel = () => {
    history.goBack();
  };

  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ title, body, tags, id: originalPostId }));
      return;
    }
    dispatch(writePost({ title, body, tags }));
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
    return () => {};
  }, [post, postError, history]);
  return (
    <WriteActionButton
      onCancel={onCancel}
      onPublish={onPublish}
      isEdit={!!originalPostId}
    ></WriteActionButton>
  );
};

export default withRouter(WriteActionButtonContainer);
