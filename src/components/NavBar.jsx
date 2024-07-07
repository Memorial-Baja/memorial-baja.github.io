import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../content/baja.png'

export const Navbar = () => {
	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	};
	return (
		<>
			<nav className='w-full max-w-screen lg:h-16 flex items-center justify-between top-0 z-50 flex-wrap bg-zinc-600 bg-opacity-75 px-3 fixed'>
				<a href="/" className="inline-flex items-center p-2 mr-4">
					<span className='flex items-center text-2xl text-white font-roboto tracking-wide'>
						<img className="" width='100px' src={logo.src} />
					</span>
				</a>
				<button className='inline-flex p-3 rounded lg:hidden text-white hover:text-gray-300 outline-none' onClick={handleClick}>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<NavbarHamburger isOpen={active}/>
					</svg>
				</button>
				<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
					<li><a className="text-sm text-gray-300 hover:text-gray-500" href="/#">Home</a></li>
					<li className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					<li><a className="text-sm text-gray-300 hover:text-gray-500" href="/#overview">About Us</a></li>
					<li className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					<li><a className="text-sm text-gray-300 hover:text-gray-500" href="/#sponsors">Sponsorship</a></li>
					<li className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					<li><a className="text-sm text-gray-300 hover:text-gray-500" href="mailto:DETechnologies@mun.ca">Contact</a></li>
				</ul>
				<div className="flex space-x-2 left-0">
							<motion.div className=""whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
								<a href="https://www.instagram.com/memorialbaja/?hl=en">
									<button class="bg-pink-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
										<svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" aria-hidden="true">
                							<path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
            							</svg>
        							</button>
								</a>
							</motion.div>
							<motion.div className=""whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
								<a href="https://www.linkedin.com/company/memorialbaja/posts/?feedView=all">
									<button class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        							  	<svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        							    	<g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
        							  	</svg>
        							</button>
								</a>
							</motion.div>
						</div>
				<div className={`relative ${active ? 'flex items-center' : 'hidden'} flex-col pb-2 w-full lg:hidden lg:flex-grow lg:w-auto`}>
					<a href="/#" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Home
					</a>
					<a href="/#overview" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						About Us
					</a>
					<a href="/#sponsors" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Sponsorship
					</a>
					<a href="/documentation" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Documentation
					</a>
					<a href="mailto:DETechnologies@mun.ca" className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-Quicksand items-center justify-center hover:text-gray-400 `}>
						Contact
					</a>
				</div>
			</nav>
		</>
	);
};

export const NavbarHamburger = (props) => {
	if(props.isOpen) {
		return(
			<>
				<path
					strokeLinecap="round" 
					stroke-linejoin="round"
					strokeWidth={2} 
					d="M6 18L18 6M6 6l12 12" 
				/>
			</>
		);
	}
	return(
		<>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M4 6h16M4 12h16M4 18h16'
			/>
		</>
	);
}
