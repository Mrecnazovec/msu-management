import Image from 'next/image'
import styles from './banner.module.scss'

const Banner = ({src, title}) => {
	return (
		<section className={styles.banner}>
			<h1 className='visually-hidden'>{title}</h1>
			<Image priority={true} src={`/images/pictures/${src}.jpg`} width={1440} height={505} alt={src}></Image>
		</section>
	)
}

export default Banner
