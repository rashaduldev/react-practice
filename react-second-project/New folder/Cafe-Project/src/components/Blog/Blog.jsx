
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags,id}=blog;
    console.log(blog);
    return (
        <div>
            <img src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div>
                <img src={author_img} alt="" />
                <div>

                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
        </div>
    );
};
Blog.prototype={
    blog:PropTypes.object.isRequired
}

export default Blog;