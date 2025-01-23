import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs"
import './page.scss'
import YangiTeachers from "./components/YangiTeachers"
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
			title: 'Изменение преподавателей',
			href: '/for-admin/teachers-change'
		},
		{
			title: `Добавить преподавателя`,
		},
	]

	return (
		<main className='yangiNews'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<YangiTeachers/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default YangiNews