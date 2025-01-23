'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const New = (props) => {
	const item = props.props
	const className = props.className

	const [imgSrc, setImgSrc] = useState(item.imgPath || '/images/news/error-news.svg')

	const handleImageError = () => {
		setImgSrc('/images/news/error-news.svg')
	}

	return (
		<div key={item._id} className={className}>
			<Link href={`/news/${item._id}`}>
				<div className={`${className}-box`}>
					<Image className={`${item.auto && 'auto'}`} onError={handleImageError} src={imgSrc} width={1920} height={1920} alt={item.title}></Image>
				</div>
				<p className={`${className}-title`}>{item.title}</p>

				<p className={`${className}-description`}>
					{item.description.map((desc, index) => (
						<span key={index}>{desc}</span>
					))}
				</p>
			</Link>
		</div>
	)
}

export default New
