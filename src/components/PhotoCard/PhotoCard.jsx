import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";


const PhotoCard = ({ url_photo, id }) => {

    return (
        <>
            <article className=" ">
                <div className="relative ">

                    <button
                        className="absolute p-2 border border-neutral-400 hover:border-white rounded-md top-5 right-5" title="like">
                        <MdFavorite className="text-white" />
                    </button>
                    <Link to={`/photos/${id}`}>
                        <img src={url_photo} className="bg-slate-600 w-full h-full object-cover max-w-full mb- block" alt="" />
                    </Link>
                </div>
            </article>
        </>
    )
}
export default PhotoCard