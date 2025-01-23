'use client'

import Flickity from 'react-flickity-component'
import './swiper.scss'
import New from '../news/New'
import Link from 'next/link'

const flickityOptions = {
	initialIndex: 0,
	cellAlign: 'left',
	pageDots: false,
	arrowShape: 'M18.3333 11L3.66668 11M18.3333 11L14.6667 7.33334M18.3333 11L14.6667 14.6667 Z',
}

const SwiperItem = (assets) => {
	const data = assets.assets
	const dataCount = assets.count

	return (
		<Flickity className='Slider' elementType='div' disableImagesLoaded={false} options={flickityOptions} reloadOnUpdate static>
			{data.map((item) => (
			<New key={item._id} props={item} className='news-slider'/>
		))}
			{dataCount >= 10 ? (<div className='showAll'><Link href='/news'>Показать все новости</Link></div>):''}
		</Flickity>
	)
}

export default SwiperItem
