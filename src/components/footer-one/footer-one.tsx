import './footer-one.css';

const footerLinks = [
    {
        text: 'About Us',
        href: '#',
    },
    {
        text: 'Buy Products',
        href: '#',
    },
    {
        text: 'Locations',
        href: '#locations',
    },
    {
        text: 'Contact Us',
        href: '#',
    },
];

const openingTimes = [
    {
        name: 'Sunday',
        time: 'CLOSED',
    },
    {
        name: 'Monday',
        time: 'CLOSED',
    },
    {
        name: 'Tuesday',
        time: '10am-7pm',
    },
    {
        name: 'Wednesday',
        time: '10am-7pm',
    },
    {
        name: 'Thursday',
        time: '10am-7pm',
    },
    {
        name: 'Friday',
        time: '10am-7pm',
    },
    {
        name: 'Saturday',
        time: '10am-5pm',
    }
];

function FooterOne() {
    return (
        <div className={`footer-one max-w-full mx-auto px-4 sm:px-6 lg:px-8`}>
            <ul role="list" className={`footer-one-ul grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3`}>
                <li className={`footer-one-li col-span-1 divide-y`}>
                    <div className={'flex flex-col'}>
                        <span className={`footer-accounts`}>ACCOUNTS</span>
                        <ul className={`footer-accounts-links`}>
                            {footerLinks.map((f) => (
                                <li key={f.text} className={`footer-accounts-link`}>
                                    <a href={f.href}>{f.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
                <li className={`footer-two-li col-span-1 divide-y`}>
                    <div className={'flex flex-col text-center'}>
                        <span className={`footer-call`}>CALL TO BOOK</span>
                        <a href={'973-585-4074'} className={`footer-no`}>973-585-4074</a>
                        <div className={`newsletter-container`}>
                            <span className={`newsletter-container-title`}>SIGN UP TO NEWSLETTER</span>
                            <div className={'flex flex-col xl:flex-row relative'}>
                                <div className={`newsletter-container-input mt-1 w-full`}>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`newsletter-input shadow-sm block w-full sm:text-sm rounded-md`}
                                        placeholder="your email address"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className={`subscribe-button inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded shadow-sm text-white`}
                                >
                                    subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`footer-three-li col-span-1 divide-y`}>
                    <div className={'flex flex-col'}>
                        <span className={`footer-opening-times`}>OPENING TIMES</span>
                        <ul className={`footer-opening-times-ul`}>
                            {openingTimes.map((f) => (
                                <li key={f.name} className={`footer-opening-times-li`}>
                                    <span className={`footer-opening-time`}>{f.name}: {f.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default FooterOne;