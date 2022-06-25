import './our-services.css';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import {useState} from "react";

const services = [
    {
        imageSrc: '/AdobeStock_319199656.jpg',
        text: 'Skincare',
    },
    {
        imageSrc: '/AdobeStock_144248813.jpg',
        text: 'Waxing',
    },
    {
        imageSrc: '/AdobeStock_256102884.jpg',
        text: 'Facials',
    },
    {
        imageSrc: '/AdobeStock_289273119.jpg',
        text: 'Med Spa',
    },
    {
        imageSrc: '/AdobeStock_288949931.jpg',
        text: 'Hair Care',
    },
    {
        imageSrc: '/1968468.jpg',
        text: 'PRP Hair Shots',
    }
];

function OurServices() {
    const [onHover, setOnHover] = useState(false);
    const [onHoverIndex, setOnHoverIndex] = useState<number | null>(null);

    return (
        <div className={`our-service-container`} id={'services'}>
            <h2 className={'our-service-title'}>Our Services</h2>
            <ul role="list" className={`our-service-ul grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                {services.map((service, index) => (
                    <li key={service.text} className={`our-service-li col-span-1 bg-white rounded-lg shadow divide-y`}
                    onMouseLeave={() => setOnHover(false)}
                    onMouseEnter={() => {
                        setOnHover(true);
                        setOnHoverIndex(index);
                    }}>
                        <div className={`our-service-li-overlay`}></div>
                        <div className={`our-service-li-text-container`}>
                            <h2 className={`our-service-li-text  ${onHover && onHoverIndex === index ? 'our-service-li-text-hover' : ''}`}>{service.text}</h2>
                        </div>
                        <img  className={`our-service-li-image ${onHover && onHoverIndex === index ? 'our-service-li-image-hover' : ''}`} src={service.imageSrc} alt={service.text}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OurServices;