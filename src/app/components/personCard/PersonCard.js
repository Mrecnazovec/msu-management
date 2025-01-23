'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import './personCard.scss'

const PersonCard = (props) => {
	const item = props.data
	// useState для хранения состояния пути изображения и его класса
	const [imgClass, setImgClass] = useState(item.modificator || 'default-modificator')
	const [imgSrc, setImgSrc] = useState(item.imgPath || '/svg/user.svg')

	const handleImageError = () => {
		setImgClass('empty-img')
		setImgSrc('/svg/user.svg')
	}

	return (
		<div className='personCardMain'>
			<div id={item.personId ? item.personId : item._id} key={item._id} className='personCard'>
				<div className='container'>
					<div className='personCard-box'>
						<h2 className='title'>{item.name}</h2>
						<p className='text'>{item.about}</p>
						{item.link && item.span ? (
							<div className='link-box'>
								<span>
									{item.span}: {item.href ? <Link href={item.href}>{item.link}</Link> : item.link}
								</span>
							</div>
						) : (
							<span></span>
						)}
					</div>
					<div className='img-box'>
						<Image alt={item.name} width={300} height={383} onError={handleImageError} className={imgClass} src={imgSrc} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PersonCard
