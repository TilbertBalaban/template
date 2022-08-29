import { postApiExample } from '../../utils/api/postApiExample';

export const PostsContainer = () => {
  const [postPost, { isLoading, isSuccess }] =
    postApiExample.usePostPostMutation();

  const { isLoading: isLoadingGetPosts } = postApiExample.useGetPostsQuery(0);

  return (
    <div>
      {isLoadingGetPosts && 'isLoadingGetPosts'}
      {isSuccess && (
        <span data-testid="post-add-success-msg">post is added</span>
      )}
      <button
        onClick={() => {
          postPost({
            title: 'title',
            body: 'body',
            userId: 0,
          });
        }}
        data-testid="add-posts-btn"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? 'loading' : 'add post'}
      </button>
    </div>
  );
};
