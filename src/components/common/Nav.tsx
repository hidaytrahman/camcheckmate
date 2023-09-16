// import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { navigation } from '../../utils';
import { Link } from 'react-router-dom';

const Nav = ({ setMobileMenuOpen }: { setMobileMenuOpen: (arg: boolean) => void }) => {
	return (
		<nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
			<div className='flex lg:flex-1'>
				<a href='#' className='-m-1.5 p-1.5'>
					<span className='sr-only'>CamCheckMate</span>

					<img className='h-20 w-auto' src='/public/cartSenseLogo.png' alt='' />
				</a>
			</div>
			<div className='flex lg:hidden'>
				<button
					type='button'
					className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
					onClick={() => setMobileMenuOpen(true)}
				>
					<span className='sr-only'>Open main menu</span>
					<Bars3Icon className='h-6 w-6' aria-hidden='true' />
				</button>
			</div>
			<div className='hidden lg:flex lg:gap-x-12'>
				{navigation.map((item) => (
					<Link key={item.name} to={item.href} className='text-sm font-semibold leading-6 text-gray-900'>
						{item.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Nav;
