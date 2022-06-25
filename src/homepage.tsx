import './homepage.css';
import GoogleReviews from "./components/google-reviews/google-reviews";
import AOS from "./components/aso/aos";
import OurServices from "./components/our-services/our-services";
import Gallery from "./components/gallery/gallery";
import Locations from "./components/locations/locations";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import MalanOne from './assets/Malan-1.jpg';

function Homepage() {
    return <main className={'main'}>
        <div className={`banner-image-container`}>
            <div className={`banner-overlay fade-in-on-load-overlay`}></div>
            <div className={`banner-text-container`}>
                <h1 className={`banner-text fade-in-on-load`}>The leader in hair care, skin care and med spa in northern New Jersey</h1>
            </div>
            <img className={`banner-image`} src={MalanOne} alt={'banner image'}/>
        </div>
        <div className={'promo-container'}>
            <AnimationOnScroll animateIn={'animate__fadeIn'}>
                <h2 className={'promo-h2'}>Hair • Skin Care • Medical Spa • Waxing and more</h2>
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn={'animate__fadeIn'}>
            <OurServices/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={'animate__fadeIn'}>
            <Locations/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={'animate__fadeIn'}>
            <GoogleReviews/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={'animate__fadeIn'}>
            <AOS/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={'animate__fadeIn'}>
            <Gallery/>
        </AnimationOnScroll>
    </main>
}

export default Homepage;