import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,spandTime}) => {
    return (
        <div className="md:w-1/3 ">
              <div>
            <h2 className="text-4xl">
            Spent time on read :{spandTime}
            </h2>
          </div>
            <h2 className="text-3xl">Bookmarked Blogs :{bookmarks.length}</h2>
          <div className="bg-slate-600 mx-5 m-5 p-5">
          {
              
              bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            
         }
          </div>
        
        </div>
    );
};

export default Bookmarks;