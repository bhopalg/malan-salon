import './header.css';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline';
import logo from '../../assets/logo.png';

const links = [
    {
        name: 'About Us',
        href: '#',
    },
    {
        name: 'Menu',
        href: '/menu',
    },
    {
        name: 'Services',
        href: '/#services',
    },
    {
        name: 'Locations',
        href: '/#locations',
    },
    {
        name: 'Offers',
        href: '#',
    }
];

function Header() {
    return (
        <Popover className={`header-container fixed w-full`}>
            <div className="mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/">
                            <span className="sr-only">Malan</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src={logo}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className={`mobile-menu-button bg-white rounded-md p-2 inline-flex items-center justify-center`}>
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className={`mobile-menu-icon h-6 w-6`} aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="items-center justify-center md:flex-1 lg:w-0 hidden md:flex space-x-10">
                        {links.map((l: {name: string, href: string}) => (
                            <a key={l.name} href={l.href} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                {l.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <button
                            className={`booking-buttons ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white`}
                        >
                            Book Hair Care
                        </button>
                        <button
                            className={`booking-buttons ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white`}
                        >
                            Book Med Spa
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="/logo.png"
                                        alt="Melan Salon"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className={`mobile-close-button rounded-md p-2 inline-flex items-center justify-center`}>
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className={`mobile-close-icon h-6 w-6`} aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {links.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className={'pt-5'}>
                                <button
                                    className={`booking-button w-full mb-5 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white`}
                                >
                                    Book Hair Care
                                </button>
                                <button
                                    className={`booking-buttons w-full mb-5 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white`}
                                >
                                    Book Med Spa
                                </button>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Header;