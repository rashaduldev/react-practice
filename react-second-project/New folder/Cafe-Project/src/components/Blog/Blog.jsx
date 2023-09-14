
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags,id}=blog;
    console.log(blog);
    return (
        <div className='my-10'>
            <img className='w-full' src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between my-5'>
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
            <hr />
        </div>
        
    );
};
Blog.prototype={
    blog:PropTypes.object.isRequired
}

export default Blog;