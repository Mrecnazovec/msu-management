import { getPostsAdministrationSolo } from '@/app/_actions/postActions'
import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NotFound from '@/app/not-found'
import ChangePeople from './components/ChangeAdministration'
import ChangeAdministration from './components/ChangeAdministration'

const changeNew = async ({ params }) => {
	const id = params.newsChangeId

	const { data, error } = await getPostsAdministrationSolo(id)

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
			title: 'Изменение руководства',
			href: '/for-admin/administration-change'
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
						<ChangeAdministration data={data}/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default changeNew
