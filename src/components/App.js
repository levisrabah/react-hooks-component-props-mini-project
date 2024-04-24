import React from "react";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

const App = () => {
  
  const blogName = 'Overreacted';
  const blogImage = ''; 
  const blogAbout = 'I explain with words and code.';
  const posts = [
    { title: 'The WET Codebase', date: 'July 13, 2020', readTime: '1 min read' },
    { title: 'Come waste your time with me.', date: 'January 11, 2020', readTime: '5 min read' },
    { title: 'Goodbye, Clean Code', date: 'January 1, 2020', readTime: '26 min read' },
    
  ];

  return (
    <div className="App">
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} />
      
    </div>
  );
};

export default App;





