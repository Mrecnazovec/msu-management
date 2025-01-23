import Link from 'next/link'
import './navigationItem-module.scss'

const NavigationItem = ({ width, link, title, href, height }) => {
	const aspect = height ? width / height : width / 400

	const styles = {
		maxWidth: '100%',
		width: `${width}px`,
		aspectRatio: aspect,
		backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8)), url(${link})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}

	return (
		<div className='tiles-wrapper' style={{ overflow: 'hidden', position: 'relative' }}>
			<Link href={href}>
				<p className='h3 tiles-text'>
					{title}{' '}
					<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M5 15H8.125M25 15L17.5 7.5M25 15L17.5 22.5M25 15H11.875'
							stroke='white'
							strokeWidth='3'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</p>
				<div style={styles} className='tiles-block'></div>
			</Link>
		</div>
	)
}

export default NavigationItem
