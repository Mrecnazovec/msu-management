import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs"
import YangiPostNews from "./components/YangiPostNews"
import './page.scss'
const YangiNews = () => {

	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'Личный кабинет администратора',
			href: '/for-admin',
		},
		{
			title: 'Изменение новостей',
			href: '/for-admin/news-change'
		},
		{
			title: `Добавить новость`,
		},
	]

	return (
		<main className='yangiNews'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<YangiPostNews/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default YangiNews