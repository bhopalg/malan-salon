import './locations.css';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import {useState} from "react";
import AdobeStock_257755130 from '../../assets/AdobeStock_257755130.jpg';
import AdobeStock_58607448 from '../../assets/AdobeStock_58607448.jpg';
import AdobeStock_244624372 from '../../assets/AdobeStock_244624372.jpg';

const locations = [
    {
        imageSrc: AdobeStock_257755130,
        text: 'London',
    },
    {
        imageSrc: AdobeStock_58607448,
        text: 'Dubai',
    },
    {
        imageSrc: AdobeStock_244624372,
        text: 'New Jersey',
    }
];

function Locations() {
    const [onHover, setOnHover] = useState(false);
    const [onHoverIndex, setOnHoverIndex] = useState<number | null>(null);

    return (
        <div className={`locations-container`} id={'locations'}>
            <h2 className={'locations-title'}>Locations</h2>
            <ul role="list" className={`locations-ul grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                {locations.map((service, index) => (
                    <li key={service.text} className={`locations-li col-span-1 divide-y`}
                        onMouseLeave={() => setOnHover(false)}
                        onMouseEnter={() => {
                            setOnHover(true);
                            setOnHoverIndex(index);
                        }}>
                        <img  className={`locations-li-image ${onHover && onHoverIndex === index ? 'locations-li-image-hover' : ''}`} src={service.imageSrc} alt={service.text}/>
                        <div className={`locations-li-text-container`}>
                            <h2 className={`locations-li-text`}>{service.text}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Locations;