import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar"
import PhotoCard from "../../components/PhotoCard/PhotoCard"
import { useFetch } from "../../hooks/useFetch"
import { SearchImgsContext } from "../../App";




const Home = () => {
    const { searchImgs } = useContext(SearchImgsContext);

    const { data } = useFetch(searchImgs)

    return (
        <>
            <Navbar />
            <section className="flex justify-center mx-auto ">
                <main className="columns-3  w-4/5">
                    {data && data.map((photo) => (
                        <PhotoCard key={photo.id} url_photo={photo.src.large} id={photo.id} />
                    ))}
                </main>
            </section>
        </>
    )
}
export default Home