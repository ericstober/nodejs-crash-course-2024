const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

const getPosts = () => posts;

// Regular export
export const getPostsLength = () => posts.length;

// Default export
export default getPosts;
