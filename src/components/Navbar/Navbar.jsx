import { useContext, useState } from "react";
import { IoMdSearch, IoIosArrowDown, IoIosArrowUp, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { PhotoFavoriteContext } from "../../App";


const Navbar = () => {
    const photosFavorites = useContext(PhotoFavoriteContext)
    const [buttonForm, setButtonForm] = useState(true)

    const handleButtonFrom = () => {
        setButtonForm(!buttonForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return <>
        <nav className="w-screen flex justify-between py-3 px-7 items-center gap-5 ">
            <div className=" flex w-3/5  gap-10">
                <a href="/" className="text-3xl">pixly</a>
                <form className="flex items-center justify-between gap-2 rounded-xl flex-1 bg-gray-200" onSubmit={handleSubmit}>
                    <div className=" mx-3 flex gap-1 w-4/5">
                        <button>
                            <IoMdSearch />
                        </button>
                        <input type="text" className="w-full outline-none border-none bg-gray-200 p-1.5" placeholder="Search free photos" />
                    </div>


                    <div className="relative">
                        <button className="flex gap-1 items-center hover:bg-gray-300 p-1.5 rounded-xl" onClick={handleButtonFrom}>
                            All images
                            <span className="">
                                {buttonForm ? <IoIosArrowDown /> : <IoIosArrowUp />}
                            </span>
                        </button>
                        <ul className={`${buttonForm ? "hidden" : " flex flex-col items-center justify-center text-center absolute bg-white shadow-xl w-32 py-2 -left-5 gap-2 rounded-xl top-10"}`}>
                            <li className="hover:bg-neutral-100 w-full p-2">
                                <Link to="/photos">
                                    Photos
                                </Link>
                            </li>
                            <li className="hover:bg-neutral-100 w-full p-1.5">Nature</li>
                            <li className="hover:bg-neutral-100 w-full p-1.5">People</li>
                            <li className="hover:bg-neutral-100 w-full p-1.5">Animal</li>
                        </ul>
                    </div>
                </form>
            </div>
            <ul className="flex gap-5 w-1/5 items-center justify-end ">
                <li>
                    <a href="https://github.com/dilanespinoza/Pixly" target="_blank">Repositorie</a>
                </li>
                <li>
                    <div className="relative">
                        <Link to="/favorites">
                            <IoMdHeartEmpty className="text-2xl " />
                        </Link>
                        <span className={`${photosFavorites === 0 ? "hidden" : "absolute -right-1 top-3.5 h-3 w-3 bg-red-500 p-2 rounded-full flex justify-center items-center text-white"}`}>

                            {photosFavorites}
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
    </>
}
export default Navbar