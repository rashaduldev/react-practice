
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags,id}=blog;
    console.log(blog);
    return (
        <div>
            <img className='w-full' src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                <img className='w-14' src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl'>{author}</h3> 
                      <h2>{posted_date} <span className='font-bold'>(4 days ago)</span></h2>  
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