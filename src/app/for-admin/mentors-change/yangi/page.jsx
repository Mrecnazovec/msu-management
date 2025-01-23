import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs"
import './page.scss'
import YangiMentorsPosts from "./components/YangiMentorsPosts"
const YangiCouncil = () => {

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
			title: 'Изменение менторов',
			href: '/for-admin/mentors-change'
		},
		{
			title: `Добавить ментора`,
		},
	]

	return (
		<main className='yangiNews'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<YangiMentorsPosts/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default YangiCouncil