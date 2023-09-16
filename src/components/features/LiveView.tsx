import WebCamera from './WebCamera';

type LiveViewPropsTypes = {
	cameraMode: boolean;
	setCameraMode: (arg: boolean) => void;
	setImgSrc: (arg: any) => void;
};
function LiveView({ cameraMode, setCameraMode, setImgSrc }: LiveViewPropsTypes) {
	return (
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
	);
}

export default LiveView;
