

const Bookmark = ({bookmark}) => {
    const{title}=bookmark;
    console.log(bookmark);
    return (
        <div>
            <h3 className="bg-slate-400 p-4 my-5 rounded-xl" >{title}</h3>
        </div>
    );
};

export default Bookmark;