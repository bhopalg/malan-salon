import './aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import cosmo from '../../assets/as-seen-on/cosmo.png';
import harparBzaar from '../../assets/as-seen-on/harpar-bazaar.png';
import whatson from '../../assets/as-seen-on/whatson.png';

const googleReviews = [
    {
        imageSrc: cosmo,
        alt: 'Cosmo',
    },
    {
        imageSrc: harparBzaar,
        alt: 'Harpar Bazaar',
    },
    {
        imageSrc: whatson,
        alt: 'Whatson'
    },
];

function AOS() {
    return (
        <div className={`aos-container`}>
            <h2 className={'aos-title'}>As Seen On</h2>
            <div className={`aos-ul-container`}>
                <ul role="list" className={`aos-image-container grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                    {googleReviews.map((service) => (
                        <li key={service.alt} className={`aos-li col-span-1 divide-y flex justify-center`}>
                            <img src={service.imageSrc} alt={service.alt} className={'aos-image'}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AOS;