import Link from 'next/link'
import './AllButton.scss'
const AllButton = ({text, href}) => {
	return (
		<Link className='newsShow' href={href}>
			<span>{text}</span>
			{/* <svg width='17' height='14' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M18.3333 11L3.66668 11M18.3333 11L14.6667 7.33334M18.3333 11L14.6667 14.6667 Z'
					stroke='#7D0A35'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg> */}
		</Link>
	)
}

export default AllButton
