
import { FaBeer } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog ,bookMarkHandle}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags,id}=blog;
    console.log(blog);
    return (
        <div className='my-10'>
            <img className='w-full rounded' src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                <img className='w-14' src={author_img} alt="" />
                <div className='my-5'>
                    <h3 className='text-2xl'>{author}</h3> 
                      <h2>{posted_date} <span className='font-bold'>(4 days ago)</span></h2>  
                </div>
                </div>
                <div className='my-5 flex items-center gap-4'>
                    <span>{reading_time} min read</span>
                    <button onClick={bookMarkHandle} className='text-2xl'><FaBeer /></button>
                </div>
            </div>
            <h2 className='text-4xl my-5'>{title}</h2>
            <div>
                <p>
                    {
                        hashtags.map((hash,idx)=><span key={hash}><a href="">{hash}</a></span>)
                    }
                </p>
            </div>
            <hr />
        </div>
    );
};
Blog.prototype={
    blog:PropTypes.object.isRequired
}

export default Blog;