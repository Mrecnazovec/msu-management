import { getPostsSovietSolo } from '@/app/_actions/postActions'
import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NotFound from '@/app/not-found'
import ChangeCouncilPosts from './components/ChangeCouncilPosts'

const changeCouncil = async ({ params }) => {
	const id = params.newsChangeId

	const { data, error } = await getPostsSovietSolo(id)

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
			title: 'Изменение студ. совета',
			href: '/for-admin/council-change'
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
						<ChangeCouncilPosts data={data}/>

					</div>
				</div>
			</section>
		</main>
	)
}

export default changeCouncil
