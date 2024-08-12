import { useParams } from "react-router-dom"
import { useGetImage } from "../../hooks/useGetImage"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

import { MdOutlineModeComment } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";


import Navbar from "../../components/Navbar/Navbar"

function PhotoPage() {
    const { photo_id } = useParams()

    const { data, loading, error } = useGetImage(photo_id)
    console.log(data)

    if (loading) {
        return (
            <div className="bg-slate-100 w-2/3">
                Cargando...
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-500 w-2/3">
                Error: {error.message}
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <hr className="border border-neutral-100" />
            <main className="mt-6 w-11/12 mx-auto flex justify-between items-center gap-10">
                <div className=" w-2/3">
                    {data && data.src && data.src.landscape ? (
                        <img src={data.src.landscape
                        } alt={data.alt || "Imagen"} />
                    ) : (
                        <p>No se pudo cargar la imagen</p>
                    )}
                </div>

                <aside className="sticky top-6 rounded-lg py-5 shadow-2xl w-[300px] h-[530px]">

                    <div className="py-5 px-7 flex flex-col gap-5">
                        <div className="flex flex-col gap-4 ">
                            <p>
                                Free for use under the Pexels
                            </p>
                            <div className="flex gap-3">
                                <button className="py-2 px-5  rounded-3xl border border-neutral-200 hover:border-neutral-950">Edit image</button>
                                <button className="py-2 px-5 rounded-3xl border text-white bg-emerald-400 hover:bg-emerald-500">Download</button>
                            </div>
                        </div>
                        <hr className="border border-neutral-100" />
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <button className="border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl" title="like">
                                    <IoMdHeartEmpty className=" " />
                                </button>
                                <button className="border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl" title="Add to collection">
                                    <FaRegBookmark className="" />
                                </button>
                                <button className="border border-neutral-300 hover:border-neutral-600 py-2 p-2 rounded-xl" title="comment">
                                    <MdOutlineModeComment className="" />
                                </button>
                                <button className="border border-neutral-300 hover:border-neutral-600 py-2 p-2 rounded-xl" title="share">
                                    <IoShareSocialSharp className="" />
                                </button>
                            </div>


                            <div className="">
                                <div className="flex justify-between">
                                    <p>Views</p>
                                    <p>1,795</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Downloads</p>
                                    <p>1,643</p>
                                </div>

                            </div>
                        </div>
                        <hr className="border border-neutral-100" />
                        <article className="flex flex-col gap-4 w-full">
                            <div className="flex gap-3">
                                <div className="flex items-center justify-center">
                                    <img src="https://robohash.org/pepelian" alt="" className="w-[50px] h-[50px] rounded-full object-cover" />
                                    <div >
                                        <h4>{data.photographer}</h4>
                                        <p className="font-light text-sm">6 followers</p>
                                    </div>
                                </div>
                                <button className="hover:bg-neutral-50 p-0 px-5 text-sm rounded-xl">Follow</button>
                            </div>
                            <div className="w-full ">
                                <p>{data.alt}</p>
                                <div className="flex justify-between my-3">
                                    <a href={data.url} className="" target="_blank">Photo real</a>
                                    <a href={data.photographer_url} className="" target="_blank">Autor</a>
                                </div>
                            </div>

                        </article>
                    </div>
                </aside>

            </main>
        </>
    )
}
export default PhotoPage