import { postApiExample } from '../../utils/api/postApiExample';

export const PostsContainer = () => {
  const [postPost, { isLoading }] = postApiExample.usePostPostMutation();

  const { isLoading: isLoadingGetPosts } = postApiExample.useGetPostsQuery(0);

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
