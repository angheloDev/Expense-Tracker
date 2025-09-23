const Header = ({ total }) => {
	return (
		<header className='w-full text-white shadow-md'>
			<div className={`${total >= 5000 ? 'bg-red-600' : 'bg-[#1E293B]'} `}>
				<div className='flex justify-center items-center bg-gradient-to-t from-[#3E6097] to-[#1E293B] rounded-b-4xl'>
					<div className='w-40 h-40 overflow-hidden'>
						<img
							src='/NET.png'
							alt='example'
							className='w-full h-full object-cover scale-90'
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
