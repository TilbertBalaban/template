import { postsApi } from '../../utils/postsApi';

export const PostsContainer = () => {
  const [
    postPost,
    {
      isLoading,
    },
  ] = postsApi.usePostPostMutation();

  const {
    isLoading: isLoadingGetPosts,
  } = postsApi.useGetPostsQuery(0);

  return (
    <div>
      {isLoadingGetPosts && 'isLoadingGetPosts'}
      <button
        onClick={() => {
          postPost({
            title: 'title',
            body: 'body',
            userId: 0,
          });
        }}
        type="button"
        disabled={isLoading}
      >
        {isLoading ? 'loading' : 'add post'}
      </button>
    </div>
  );
};
