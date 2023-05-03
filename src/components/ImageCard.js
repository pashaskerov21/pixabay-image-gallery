import React from 'react'
import { AiFillEye, AiOutlineDownload, AiFillHeart, AiOutlineSearch } from 'react-icons/ai'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

function ImageCard({ image }) {
    const tags = image.tags.split(', ');
    return (
        <div className="card">
            <div className='image'>
                <img src={image.webformatURL} alt="card-img" className="card-img-top" />
                <div className="hover">
                    <a href={image.largeImageURL} data-fancybox=''>
                        <AiOutlineSearch/>
                    </a>
                </div>
            </div>
            <div className="card-body">
                <h4 className="card-title">Photo by {image.user}</h4>
                <ul className="card-info">
                    <li>
                        <span className="icon"><AiFillEye /></span>
                        <span className="label">{image.views}</span>
                    </li>
                    <li>
                        <span className="icon"><AiOutlineDownload /></span>
                        <span className="label">{image.downloads}</span>
                    </li>
                    <li>
                        <span className="icon"><AiFillHeart /></span>
                        <span className="label">{image.likes}</span>
                    </li>
                </ul>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index}>#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageCard
