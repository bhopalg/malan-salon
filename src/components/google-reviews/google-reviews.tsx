import './google-reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const googleReviews = [
    {
        name: 'Chelsea Earley',
        text: 'Very warm and welcoming! Sheila spent extra time making sure my blowout with beachy waves looked great. Will definitely come back for my next haircut!',
    },
    {
        name: 'Alexander Wdowiak',
        text: 'My girlfriend & her mom have been going to this hair salon for years. They’re always very happy with how amazing their hair comes out! 5/5',
    },
    {
        name: 'Theresa Collins',
        text: 'Best spot in Morris county! Ashley and staff are lovely and so talented. Always leave feeling like a million bucks.',
    },
    {
        name: 'Carolyn Walsh',
        text: 'Always a great experience when I get my hair done at Malan Salon!  Thank you for making my hair look beautiful, Ashley!',
    }
];

function GoogleReviews() {
    return (
        <div className={`google-reviews-container`}>
            <h2 className={'google-reviews-title'}>Google Reviews</h2>
            <ul role="list" className={`google-reviews-ul grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                {googleReviews.map((service) => (
                    <li key={service.name} className={`google-reviews-li col-span-1 divide-y`}>
                        <div className={`google-reviews-li-name-container`}>
                            <h5 className={`google-reviews-li-name`}>{service.name}</h5>
                        </div>
                        <div className={`review-stars-container flex flex-row justify-center`}>
                          <FontAwesomeIcon className={'review-star'} icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon className={'review-star'} icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon className={'review-star'} icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon className={'review-star'} icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon className={'review-star'} icon={faStar}></FontAwesomeIcon>
                        </div>
                        <div>
                            <p className={'text-center'}>{service.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GoogleReviews;