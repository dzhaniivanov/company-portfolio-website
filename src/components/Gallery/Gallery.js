import { useState } from "react";
import "./Gallery.scss";


const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            img:
                "/img/1.jpg",
        },
        {
            id: "2",
            img:
                "/img/2.jpg",
        },
        {
            id: "3",
            img:
                "/img/3.jpg",
        },
        {
            id: "4",
            img:
                "/img/4.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };


    return (
        <div className="gallery" id="gallery">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((item) => (
                    <div className="container">
                        <div className="item">
                            <div className="imgContainer">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />

        </div>
    )
}

export default Gallery;
