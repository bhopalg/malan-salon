import './gallery.css';
import {useState} from "react";

const gallery = [
    {
        imageSrc: '/gallery/gallery1.jpg',
        alt: 'Gallery1',
    },
    {
        imageSrc: '/gallery/gallery2.jpg',
        alt: 'Gallery2',
    },
    {
        imageSrc: '/gallery/gallery3.jpg',
        alt: 'Gallery3',
    },
    {
        imageSrc: '/gallery/gallery4.jpg',
        alt: 'Gallery4',
    },
];

function Gallery() {
    const [onHover, setOnHover] = useState(false);
    const [onHoverIndex, setOnHoverIndex] = useState<number | null>(null);

    return (
        <div className={`gallery-container`}>
            <h2 className={'gallery-title'}>Gallery</h2>
            <ul role="list" className={`gallery-ul grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                {gallery.map((service, index) => (
                    <li key={service.alt} className={`gallery-li col-span-1 divide-y`}
                        onMouseLeave={() => setOnHover(false)}
                        onMouseEnter={() => {
                            setOnHover(true);
                            setOnHoverIndex(index);
                        }}>
                        <img  className={`gallery-li-image ${onHover && onHoverIndex === index ? 'gallery-li-image-hover' : ''}`} src={service.imageSrc} alt={service.alt}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gallery;