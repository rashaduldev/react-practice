import profile from '../../dist/assets/images/profile.png'
// import Blogs from "./Blogs/Blogs";


const Header = () => {
    return (
        <div>
                  <header className='flex justify-between items-center py-4  max-w-7xl mx-auto border-b-2'>
                  <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                  <img src={profile} alt="" />
                  </header>

                  
        </div>
    );
};

export default Header;