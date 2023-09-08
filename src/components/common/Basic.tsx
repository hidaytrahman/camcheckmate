import { TypeAnimation } from 'react-type-animation';

const AnimateBasicText = ({ text }: { text: string }) => {
    return (
        <TypeAnimation
            sequence={[
                text,
                () => {
                    console.log('Sequence completed');
                },
            ]}
            wrapper="span"
            cursor={true}
            speed={90}
            repeat={1}
        />
    );
};

export default AnimateBasicText;
