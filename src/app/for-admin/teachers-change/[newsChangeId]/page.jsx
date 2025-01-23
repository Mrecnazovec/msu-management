import { getPostsTeachersSolo } from '@/app/_actions/postActions'
import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NotFound from '@/app/not-found'
import ChangeTeachers from './components/ChangeTeachers'

const changeNew = async ({ params }) => {
	const id = params.newsChangeId

	const { data, error } = await getPostsTeachersSolo(id)

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
			title: 'Изменение преподавателей',
			href: '/for-admin/teachers-change'
		},
		{
			title: `${data[0].name}`,
		},
	]

	return (
		<main className='changeNew'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<ChangeTeachers data={data}/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default changeNew
