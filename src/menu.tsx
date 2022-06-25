import './menu.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useEffect } from 'react';
import MalanOne from './assets/menu/Malan Parsippany Menus.jpg';
import MalanTwo from './assets/menu/Malan Parsippany Menus2.jpg';
import MalanThree from './assets/menu/Malan Parsippany Menus3.jpg';
import MalanFour from './assets/menu/Malan Parsippany Menus4.jpg';
import MalanFive from './assets/menu/Malan Parsippany Menus5.jpg';
import MalanSix from './assets/menu/Malan Parsippany Menus6.jpg';
import MalanSeven from './assets/menu/Malan Parsippany Menus7.jpg';

const menus = [
    {
        src: MalanOne,
        alt: 'Menu1',
    },
    {
        src: MalanTwo,
        alt: 'Menu2',
    },
    {
        src: MalanThree,
        alt: 'Menu3',
    },
    {
        src: MalanFour,
        alt: 'Menu4',
    },
    {
        src: MalanFive,
        alt: 'Menu5',
    },
    {
        src: MalanSix,
        alt: 'Menu6',
    },
    {
        src: MalanSeven,
        alt: 'Menu6',
    }
];

function Menu() {
    useEffect(() => {
        const el = document.querySelector('.fade-in-on-load');
        el?.classList.add('fade-in');

        const el2 = document.querySelector('.fade-in-on-load-menu-1');
        el2?.classList.add('fade-in-menu-1');
    })

    return (
        <div className={'container'}>
            <main className={`main max-w-7xl mx-auto sm:px-6 lg:px-8`}>
                <div className={'flex flex-col items-center mt-4'}>
                    <h1 className={`menu-title fade-in-on-load`}>Menu</h1>
                </div>
                <div className={'flex flex-col gap-5'}>
                    {menus.map((m, i) => {
                        if (i === 0) {
                            return <img key={m.alt} src={m.src} alt={m.alt} className={'w-full fade-in-on-load-menu-1'}/>
                        } else {
                            return (
                                <AnimationOnScroll key={m.alt} animateIn={'animate__fadeIn'}>
                                    <img src={m.src} alt={m.alt} className={'w-full'}/>
                                </AnimationOnScroll>
                            );
                        }
                    })}
                </div>
            </main>
        </div>
    );
};

export default Menu;