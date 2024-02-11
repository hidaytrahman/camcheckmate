import { useCallback, useEffect, useRef, useState } from 'react';
import Dropdown from '../common/Dropdown';
import Webcam from 'react-webcam';

type WebCameraPropsTypes = {
	cameraMode: boolean;
	setImgSrc: any;
};
function WebCamera({ cameraMode, setImgSrc }: WebCameraPropsTypes) {
	const webcamRef = useRef(null);
	const [deviceId, setDeviceId] = useState({});
	const [devices, setDevices] = useState<[]>([]);
	const [activeDevice, setActiveDevice] = useState(null);

	const [mirrored, setMirrored] = useState<boolean>(false);

	const videoConstraints = {
		facingMode: 'user',
		deviceId: deviceId,
	};

	// Prefer camera resolution nearest to 1280x720.
	// const constraints = {
	// 	audio: true,
	// 	video: { width: 1280, height: 720 },
	// };

	async function getMedia(constraints: any) {
		let stream = null;

		try {
			stream = await navigator.mediaDevices.getUserMedia(constraints);
			/* use the stream */
		} catch (err) {
			/* handle the error */
		}
	}

	// navigator.mediaDevices
	// 	.getUserMedia(constraints)
	// 	.then((mediaStream) => {
	// 		const video: any = document.querySelector("video");
	// 		video.srcObject = mediaStream;
	// 		video.onloadedmetadata = () => {
	// 			video.play();
	// 		};

			
	// 	})
	// 	.catch((err) => {
	// 		// always check for errors at the end.
	// 		console.error(`${err.name}: ${err.message}`);
	// 	});


	const onChangeAction = (device: any) => {
		setDeviceId(device.deviceId);
		setActiveDevice(device);
	};

	const capture = useCallback(() => {
		// @ts-ignore
		const imageSrc = webcamRef.current.getScreenshot();
		setImgSrc(imageSrc);
	}, [webcamRef, setImgSrc]);

	const handleDevices = useCallback(
		// @ts-ignore
		(mediaDevices) =>
			setDevices(
				// @ts-ignore
				mediaDevices.filter(({ kind }) => kind === 'videoinput')
			),
		[setDevices]
	);

	useEffect(() => {
		navigator.mediaDevices.enumerateDevices().then(handleDevices);

	}, [handleDevices]);


	return (
		<div>
			{cameraMode ? (
				<>
					<br />
					<Dropdown
						title='Choose Camera'
						items={devices}
						activeDevice={activeDevice}
						onChangeAction={onChangeAction}
					/>
					<br />
					<div className='live-camera m-2'>
						<Webcam
							// @ts-ignore
							screenshotFormat='image/jpeg'
							audio={false}
							ref={webcamRef}
							videoConstraints={videoConstraints}
							// style={{
							// 	transform: mirrored ? "scaleX(-1)" : "none"
							// }}
							mirrored={mirrored}
						/>
					</div>

					<button onClick={() => setMirrored(!mirrored)} className='bg-slate-300 text-black mr-2'>Mirror View [{mirrored ? "ON" : "OFF"}]</button>
					<button onClick={capture}>Capture photo</button> {" "}
				</>
			) : (
				<p>Switch on the camera</p>
			)}
		</div>
	);
}

export default WebCamera;
