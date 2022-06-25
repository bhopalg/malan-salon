import './footer.css';

function Footer() {
    return (
        <footer className={`footer-container fixed w-full`}>
            <div className={`desktop-footer mx-auto px-4 sm:px-6`}>
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="src/components/footer/footer#">
                            <span className="sr-only">Malan</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/logo-white.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className={`footer-address items-center justify-center md:flex-1 lg:w-0 md:flex space-x-10`}>
                        <span className={`footer-address-span text-white`}>281 Littleton Road, Parsippany New Jersey 07054</span>
                    </div>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <span className={`social-links facebook`}>
                            <a href={'#'} target={'_blank'} rel={'noreferrer'}>
                                <img className={`facebook-image`} src={'/socials/facebook.svg'} alt={'Facebook'}/>
                            </a>
                        </span>
                        <span className={`social-links twitter`}>
                            <a href={'#'} target={'_blank'} rel={'noreferrer'}>
                                <img className={`twitter-image`} src={'/socials/twitter.svg'} alt={'Twitter'}/>
                            </a>
                        </span>
                        <span className={`social-links instagram`}>
                            <a href={'#'} target={'_blank'} rel={'noreferrer'}>
                              <img className={`instagram-image`} src={'/socials/instagram.svg'} alt={'Instagram'}/>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className={`mobile-footer mx-auto px-4 sm:px-6 flex flex-col items-center`}>
                <div className={'flex flex-row w-full justify-between'}>
                    <div className={'xl:pb-3'}>
                        <a href="src/components/footer/footer#" className={'footer-logo'}>
                            <span className="sr-only">Malan</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/logo-white.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex flex-row items-center justify-end md:flex-1 lg:w-0 pt-4">
                      <span className={`social-links facebook`}>
                          <a href={'#'} target={'_blank'} rel={'noreferrer'}>
                             <img className={`facebook-image`} src={'/socials/facebook.svg'} alt={'Facebook'}/>
                          </a>
                      </span>
                        <span className={`social-links twitter`}>
                            <a href={'#'} target={'_blank'} rel={'noreferrer'}>
                                <img className={`twitter-image`} src={'/socials/twitter.svg'} alt={'Twitter'}/>
                            </a>
                      </span>
                        <span className={`'social-links instagram`}>
                            <a href={'#'} target={'_blank'} rel={'noreferrer'}>
                              <img className={`instagram-image`} src={'/socials/instagram.svg'} alt={'Instagram'}/>
                            </a>
                      </span>
                    </div>
                </div>
                <div className={`'ooter-address items-center justify-center md:flex-1 lg:w-0 md:flex space-x-10`}>
                    <span className={`footer-address-span text-white`}>281 Littleton Road, Parsippany New Jersey 07054</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;