import { getPostsSubjectsSolo } from '@/app/_actions/postActions'
import ChangeMaterialsPost from './components/ChangeMaterialsPost'
import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NotFound from '@/app/not-found'

const changeNew = async ({ params }) => {
	const id = params.newsChangeId
	
	const { data, error } = await getPostsSubjectsSolo(id)
	
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
			title: 'Изменение материалов',
			href: '/for-admin/materials-change'
		},
		{
			title: `${data[0].title}`,
		},
	]

	return (
		<main className='changeNew'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<ChangeMaterialsPost data={data} />
					</div>
				</div>
			</section>
		</main>
	)
}

export default changeNew
