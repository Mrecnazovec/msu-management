import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs"
import './page.scss'
import YangiAdministration from "./components/YangiAdministration"
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
			title: 'Изменение руководства',
			href: '/for-admin/administration-change'
		},
		{
			title: `Добавить руководство`,
		},
	]

	return (
		<main className='yangiNews'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<YangiAdministration/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default YangiNews