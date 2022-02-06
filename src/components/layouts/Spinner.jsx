import spinner from './assets/spinner1.gif';

const Spinner = () => {
	return (
		<div className='w-100 mt-20'>
			<img
				with={180}
				className='text-center mx-auto'
				src={spinner}
				alt='Loading...'
			/>
		</div>
	);
};

export default Spinner;
