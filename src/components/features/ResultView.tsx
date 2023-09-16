import { AttentionSeeker } from 'react-awesome-reveal';

const features = [
	// { name: 'Images', description: 'Choose Images from devices' },
	{
		name: 'Live Camera',
		description: 'Check live camera',
	},
	{
		name: 'Save Photo',
		description: 'Download photo after capturing',
	},
];

type ResultViewPropsTypes = {
	cameraMode: boolean;
	imgSrc: any;
};

function ResultView({ cameraMode, imgSrc }: ResultViewPropsTypes) {
	return (
		<AttentionSeeker effect='pulse' delay={3000}>
			<div>
				<h2 className='text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl'>
					{cameraMode ? 'Scanning from  camera' : 'Connect with Camera'}
				</h2>
				<p className='mt-4 text-gray-500'>
					{cameraMode
						? 'Your camera is connected, \n Capture photo and click to save.'
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
			</div>
		</AttentionSeeker>
	);
}

export default ResultView;
