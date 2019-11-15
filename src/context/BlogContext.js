import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    const blogPost = [{ title: 'Blog post #1' }, {title: 'blog post #2'}];
    return (
        <BlogContext.Provider value={blogPost}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;