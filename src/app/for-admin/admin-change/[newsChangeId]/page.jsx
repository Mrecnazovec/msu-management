import { getPostsForAdminSolo } from '@/app/_actions/postActions'
import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NotFound from '@/app/not-found'
import ChangeAdminPosts from './components/ChangeAdminPosts'

const changeAdmin = async ({ params }) => {
	const id = params.newsChangeId

	const { data, error } = await getPostsForAdminSolo(id)

	if (!data) return <NotFound />

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
			title: `${data[0].fullName}`,
		},
	]

	return (
		<main className='changeNew'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<ChangeAdminPosts data={data}/>

					</div>
				</div>
			</section>
		</main>
	)
}

export default changeAdmin
