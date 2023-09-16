import { Button } from 'react-carbonui';
import { useEffect, useState } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';
import LoaderWrapped from '../components/common/LoaderWrapped';
import WebCamera from '../components/features/WebCamera';

const features = [
	// { name: 'Images', description: 'Choose Images from devices' },
	{
		name: 'Live Camera',
		description: 'Or access using live camera',
	},
];

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

	const processNow = () => {
		setLoading(true);
		setResultView(true);
		setImgSrc(null);
		// setSelectedImage(null);
	};

	return (
		<div className='bg-white mb-10'>
			<div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-10 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8  dark:bg-gray-900'>
				{loading && <LoaderWrapped />}
				{!resuleView ? (
					<div className='grid pt-10 min-w-7xl grid-rows-1 gap-4 sm:gap-4 lg:gap-8'>
						<div className='scan-container'>
							<div className='scanner'>
								<h2 className='text-base font-semibold leading-7 text-indigo-600'>Test your camera</h2>
								<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
									Access Camera{' '}
									{cameraMode ? (
										<span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
											Connected
										</span>
									) : (
										<span className='bg-green-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
											Not Conntected
										</span>
									)}
								</p>
								<h2 className='mt-2 text-centwr'>Use web camera</h2>
								<div className='flex gap-2 mt-2 items-center justify-center'>
									<div
										className={`flex px-2 items-center pl-4 mt- border border-gray-200 rounded dark:border-gray-700 ${
											cameraMode ? 'bg-green-600' : ''
										}`}
									>
										<input
											checked={cameraMode}
											id='bordered-radio-1'
											type='radio'
											value='camera'
											name='cameraMode'
											onChange={() => setCameraMode(true)}
											className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
										/>
										<label
											htmlFor='bordered-radio-1'
											className='w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
										>
											Camera On
										</label>
									</div>
									<div
										className={`flex px-2 items-center mt-1 pl-4 border border-gray-200 rounded dark:border-gray-700 ${
											!cameraMode ? 'bg-green-200' : ''
										}`}
									>
										<input
											checked={!cameraMode}
											id='bordered-radio-2'
											type='radio'
											value='image'
											name='bordered-radio'
											onChange={() => setCameraMode(false)}
											className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
										/>
										<label
											htmlFor='bordered-radio-2'
											className='w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
										>
											Camera Off
										</label>
									</div>
								</div>

								<WebCamera cameraMode={cameraMode} setImgSrc={setImgSrc} />
							</div>
						</div>
					</div>
				) : null}

				<AttentionSeeker effect='pulse' delay={3000}>
					<div>
						<h2 className='text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl'>
							{cameraMode ? 'Scanning from  camera' : 'Connect with Camera'}
						</h2>
						<p className='mt-4 text-gray-500'>
							{cameraMode
								? 'Currently scanning from your live camera, You can also choose an image. \n Capture photo and click on process now to check the availibility.'
								: 'The Browser Webcam Testing Tool is designed to assist users in testing the functionality and compatibility of their webcams with different web browsers.'}
						</p>

						<dl className='mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-2 lg:gap-x-8'>
							{features.map((feature) => (
								<div key={feature.name} className='border-gray-200 pt-1'>
									<dt className='font-medium text-gray-900'>{feature.name}</dt>
									<dd className='mt-1 text-sm text-gray-500'>{feature.description}</dd>
								</div>
							))}
						</dl>

						<br />

						{cameraMode && imgSrc && (
							<>
								<img src={imgSrc} /> <br />
								<small>
									<figcaption>Right click on picture and "Save Image as" to save image</figcaption>
								</small>
							</>
						)}

						<div className='scanner-controls mt-5'>
							{selectedImage !== null ? (
								<Button variant='primary' onClick={processNow}>
									Process Now
								</Button>
							) : null}
						</div>
					</div>
				</AttentionSeeker>
			</div>
		</div>
	);
}
