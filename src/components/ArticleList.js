import Article from './Article.js';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.title} {...post} /> 
      ))}
    </main>
  );
};

export default ArticleList;
