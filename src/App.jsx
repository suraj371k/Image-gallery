import { useState , useEffect } from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";

function App() {
  const API_KEY = '46007173-faa6ff43b1a10d1bb86336b36';
  const [images , setImages] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const [term , setTerm] = useState("")

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo`
        );
        const data = await response.json();
        setImages(data.hits);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [term]);

  return (
<div className="container mx-auto">
  <ImageSearch searchText = {(text) => setTerm(text)}/>
  {!isLoading && images.length == 0 && <h1 className="text-6xl text-center mx-auto mt-32">No images found</h1>}

 {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading..</h1>:
 <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center
 gap-8">
 {
   images.map(image => (
     <ImageCard key={image.id} image={image}/>
   ))
 }
</div>
 }
</div>
  );
}

export default App;
