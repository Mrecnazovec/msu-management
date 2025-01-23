import Link from 'next/link'
import Banner from '../components/banner/Banner'
import Navigation from '../components/navigationCards/Navigation'
import Quote from '../components/quote/Quote'
import './page.scss'

export const metadata = {
	title: 'Университет',
	description: 'Страница "Университет" сайта Менеджмента ТФ МГУ',
}

const University = () => {
	const params = [
		{
			width: '1060',
			link: '/images/pictures/administration.jpg',
			title: 'Руководство',
			href: '/university/administration',
		},
		{
			width: '645',
			link: '/images/pictures/teachers.jpg',
			title: 'Преподавательский состав',
			href: '/university/teachers',
		},
		{
			width: '400',
			link: '/images/pictures/council.jpg',
			title: 'Студ. совет',
			href: '/university/student-council',
		},
	]

	return (
		<main className='main'>
			<Banner src='mainBuilding' title='Университет ТФ МГУ' />
			<section className='aboutUniversity'>
				<div className='container'>
					<div className='container-section'>
						<div className='content'>
							<h2 className='h2'>О нашем университете:</h2>
							<p>
								Ташкентский филиал МГУ создан в 2006 году, это учебное заведение сегодня является ведущим центром подготовки специалистов в области
								менеджмента, психологии, математики, информатики, психологии и филологии для нужд Узбекистана.{' '}
							</p>
							<p>
								Образовательный процесс организован в соответствии с принятыми в Московском государственном университете стандартами, а это, в свою
								очередь, обеспечивает подготовку высококвалифицированных специалистов.
							</p>
							<Link href='https://msu.uz'>Источник: ТФ МГУ</Link>
						</div>
					</div>
				</div>
			</section>
			<Quote />
			<section className='addictive-info'>
				<div className='container'>
					<div className='container-section'>
						<h2 className='h2'>Дополнительные разделы с информацией:</h2>
						<p>В разделах предоставлена актуальная информация про наш университет</p>

						
					</div>
				</div>
				<Navigation params={params} />
			</section>
		</main>
	)
}

export default University
