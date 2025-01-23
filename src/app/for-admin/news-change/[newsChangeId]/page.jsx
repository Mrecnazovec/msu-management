import { getPostsNewsSolo } from '@/app/_actions/postActions'
import ChangePostNews from './components/ChangePostNews'
import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NotFound from '@/app/not-found'

const changeNew = async ({ params }) => {
	const id = params.newsChangeId

	const { data, error } = await getPostsNewsSolo(id)

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
			title: 'Изменение новостей',
			href: '/for-admin/news-change'
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
						<ChangePostNews data={data} />
					</div>
				</div>
			</section>
		</main>
	)
}

export default changeNew
