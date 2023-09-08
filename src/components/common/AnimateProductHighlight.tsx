import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimateProductHighlight = () => {
	const [bgColor, setBgColor] = useState('#A1CCD1');
	return (
		<div
			style={{
				fontSize: '0.5em',
				display: 'inline-block',
				backgroundColor: bgColor,
				padding: ' 0.8rem',
				borderRadius: '20px',
				/* when working without ref and classNames, the manipulated style needs to be
           applied to the parent element, because the TypeAnimation component is perma-memoized */
			}}
		>
			<TypeAnimation
				sequence={[
					'Video Testing',
					500,
					() => setBgColor('#F4F2DE'),
					'Device Selection',
					500,
					() => setBgColor('#E9B384'),
					'Cross-Platform Testing',
					5000,
					() => setBgColor('7C9D96'),
					'Privacy and Security:',
					5000,

					() => {
						console.log('Sequence completed');
					},
				]}
				wrapper='span'
				cursor={false}
				repeat={Infinity}
				deletionSpeed={60}
				omitDeletionAnimation={true}
				// style={{
				//     fontSize: '0.5em',
				//     display: 'inline-block',
				//     // backgroundColor: bgColor,
				//     padding: '0.8rem',
				//     borderRadius: '20px',
				// }}
			/>
		</div>
	);
};

export default AnimateProductHighlight;
