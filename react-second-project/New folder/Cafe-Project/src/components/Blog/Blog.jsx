
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title}=blog;
    console.log(blog);
    return (
        <div>
            <h2 className='text-4xl'>{title}</h2>
        </div>
    );
};
Blog.prototype={
    blog:PropTypes.object.isRequired
}

export default Blog;