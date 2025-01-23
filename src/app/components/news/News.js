import Swiper from '../swiper/Swiper'
import './news.scss'
import AllButton from '@/app/ui/AllButton'

const News = () => {
	return (
		<section className='news'>
			<div className='container'>
				<h1 className='visually-hidden'>Новости</h1>
				<h2>Последние новости</h2>
				<Swiper />
				<AllButton text='Все' href='/news'/>
			</div>
		</section>
	)
}

export default News
