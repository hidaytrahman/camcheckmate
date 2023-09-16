import { useEffect, useState } from 'react';
import LoaderWrapped from '../components/common/LoaderWrapped';
import LiveView from '../components/features/LiveView';
import ResultView from '../components/features/ResultView';

export default function Camera() {
	// @ts-ignore
	const [selectedImage, setSelectedImage] = useState(null);

	const [imgSrc, setImgSrc] = useState(null);
	const [cameraMode, setCameraMode] = useState(false);
	const [loading, setLoading] = useState(true);
	const [resuleView, setResultView] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 4000);

		return () => {
			clearTimeout(timer);
		};
	}, [resuleView]);

	return (
		<div className='bg-white mb-10'>
			<div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-10 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8  dark:bg-gray-900'>
				{loading && <LoaderWrapped />}

				<LiveView cameraMode={cameraMode} setCameraMode={setCameraMode} setImgSrc={setImgSrc} />
				<ResultView cameraMode={cameraMode} imgSrc={imgSrc} />
			</div>
		</div>
	);
}
