import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs"
import './page.scss'
import YangiCouncilPosts from "./components/YangiCouncilPosts"
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
			title: 'Изменение студ. совета',
			href: '/for-admin/council-change'
		},
		{
			title: `Добавить участника студ. совета`,
		},
	]

	return (
		<main className='yangiNews'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<YangiCouncilPosts/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default YangiCouncil