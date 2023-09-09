import { Outlet } from 'react-router-dom';
// import Footer from './components/layout/Footer';
import './App.css';
import NavTop from './components/common/NavTop';
import FooterNav from './components/layout/FooterNav';

function App() {
	return (
		<>
			<NavTop />
			<main className='mt-4 content-holder'>
				<Outlet />
			</main>

			{/* {pathname !== '/camera' && <Footer />} */}
			<FooterNav />
		</>
	);
}

export default App;
