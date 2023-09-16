import React, { useCallback, useEffect, useRef, useState } from 'react';
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

	const videoConstraints = {
		facingMode: 'user',
		deviceId: deviceId,
	};

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
						/>
					</div>

					<button onClick={capture}>Capture photo</button>
				</>
			) : (
				<p>Switch on the camera</p>
			)}
		</div>
	);
}

export default WebCamera;
