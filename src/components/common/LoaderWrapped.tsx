import ReactLoading from 'react-loading';
const styles = {
    position: 'fixed',
    zIndex: 99,
    background: '#ffffffed',
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    // filter: 'blur(7px)',
};

const LoaderWrapped = ({ type = 'bubbles', color = '#A1CCD1' }) => (
    // @ts-ignore
    <div style={styles}>
        <div className="flex flex-col items-center justify-center mt-20">
            {/* @ts-ignore */}
            <ReactLoading type={type} color={color} height={250} width={275} />
            <p className="text-2xl text-bold">Please wait</p>
        </div>
    </div>
);
export default LoaderWrapped;
