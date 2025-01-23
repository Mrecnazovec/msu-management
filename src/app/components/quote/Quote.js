import Image from 'next/image'
import './quote.scss'

const Quote = () => {
	return (
		<section className='quote'>
			<div className='container'>
				<h1 className='visually-hidden'>Цитата ректора МГУ Виктора Антоновича Садовничего</h1>
				<div className='content'>
					<div className='content-text'>
						<h2 className='p'>Ректор МГУ академик Виктор Антонович Садовничий:</h2>
						<p className='h3'>
							МГУ — первый российский университет и по времени образования, и по своему значению. Это феномен национальной науки и культуры, которым
							мы все гордимся. Добро пожаловать в Московский университет!
						</p>
					</div>
					<Image alt='Фотография Ректора МГУ' className='content-img' src='/images/pictures/admin.jpg' width={300} height={270}></Image>
				</div>
			</div>
		</section>
	)
}

export default Quote
