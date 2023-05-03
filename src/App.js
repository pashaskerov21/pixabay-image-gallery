import React, { useEffect, useState } from "react";

import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])


  return (
    <div className="container">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!loading && images.length === 0 && <h1 className="w-100 text-center py-5">No images found</h1>}
      {loading ? (
        <h1 className="w-100 text-center py-5">Loading</h1>
      ) : (
        <div className="row image-row">
          {images.map(image => (
            <div key={image.id} className="col-12 col-md-6 col-xl-4">
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
