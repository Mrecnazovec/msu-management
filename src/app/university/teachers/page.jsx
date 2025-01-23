import { getPostsTeacher } from '@/app/_actions/postActions'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import PersonCard from '@/app/components/personCard/PersonCard'
import './page.scss'
import Link from 'next/link'
import ChangeButton from '@/app/ui/ChangeButton'

export const revalidate = 10

export const metadata = {
	title: 'Преподаватели',
	description: 'Страница "Преподаватели" сайта Менеджмента ТФ МГУ',
}

const Teachers = async ({ searchParams }) => {
	// let page = parseInt(searchParams.page, 10)
	// page = !page || page < 1 ? 1 : page
	// const perPage = 10

	const { data, dataCount, error } = await getPostsTeacher()

	// const totalPages = Math.ceil(dataCount / perPage)

	// const prevPage = page - 1 > 0 ? page - 1 : 1
	// const nextPage = page + 1
	// const isPageOutOfRange = page > totalPages

	// const pageNumbers = []
	// const offsetNumbers = 3
	// for (let i = page - offsetNumbers; i <= page + offsetNumbers; i++) {
	// 	if (i >= 1 && i <= totalPages) {
	// 		pageNumbers.push(i)
	// 	}
	// }

	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'Университет',
			href: '/university',
		},
		{
			title: 'Преподавательский состав',
		},
	]

	return (
		<main>
			<h1 className='visually-hidden'>Преподавательский состав университета МГУ</h1>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<section className='personCardData'>
				{data.map((item) => (
					<div className='personCardMain' key={item._id}>
						<PersonCard data={item} />
						<div className='container'>
							<div className='button-box'>
								<ChangeButton text='Изменить' href={`/for-admin/teachers-change/${item._id}`} />
							</div>
						</div>
					</div>
				))}
				{/* <div className='container'>
					<div className='container-section'>
						<div className={totalPages === 1 ? 'navigation-panel none' : 'navigation-panel'}>
							{page === 1 ? (
								<div aria-disabled='true' className='news-navigation prev disabled'>
									Назад
								</div>
							) : (
								<Link aria-label='Предыдущая страница' className='news-navigation prev active' href={`?page=${prevPage}`}>
									Назад
								</Link>
							)}

							<div className='numbers-panel'>
								{pageNumbers.map((pageNumber, index) => (
									<Link className={page === pageNumber ? 'active' : 'disabled'} key={index} href={`?page=${pageNumber}`}>
										{pageNumber}
									</Link>
								))}
							</div>

							{page === totalPages ? (
								<div aria-disabled='true' className='news-navigation next disabled'>
									Вперёд
								</div>
							) : (
								<Link aria-label='Следующая страница' className='news-navigation next active' href={`?page=${nextPage}`}>
									Вперёд
								</Link>
							)}
						</div>
					</div>
				</div> */}
			</section>
		</main>
	)
}

export default Teachers
