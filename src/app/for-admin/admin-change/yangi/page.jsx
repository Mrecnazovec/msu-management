import { getPostsForAdminSolo } from '@/app/_actions/postActions'
import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NotFound from '@/app/not-found'
import YangiAdminPosts from './components/YangiAdminPosts'

const yangiAdmin = async ({ params }) => {
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
			title: 'Изменение админов',
			href: '/for-admin/admin-change'
		},
		{
			title: 'Добавить админа',
		},
	]

	return (
		<main className='changeNew'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<YangiAdminPosts/>

					</div>
				</div>
			</section>
		</main>
	)
}

export default yangiAdmin
