import { getPostsSubjects } from '@/app/_actions/postActions'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NavigationItem from '@/app/components/navigationCards/NavigationItem'
import Link from 'next/link'
import './page.scss'
import ChangeButton from '@/app/ui/ChangeButton'

export const revalidate = 10

export const metadata = {
	title: 'Материалы',
	description: 'Страница "Материалы" сайта Менеджмента ТФ МГУ',
}

const Materials = async ({ searchParams }) => {
	// let page = parseInt(searchParams.page, 10)
	// page = !page || page < 1 ? 1 : page
	// const perPage = 18

	const { data, dataCount, error } = await getPostsSubjects()

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
			title: 'Студентам',
			href: '/for-students',
		},
		{
			title: 'Материалы',
		},
	]
	return (
		<main className='materials'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h1 className='visually-hidden'>Учебные материалы для студентов ТФ МГУ</h1>
			<section className='materials-section'>
				<div className='container'>
					<div className='container-section'>
						<div className='materialsButtonChange'>
							<ChangeButton text='Изменить' href='/for-admin/materials-change' />
						</div>

						<div className='materials-container'>
							{data.map((item) => (
								<NavigationItem
									key={item._id}
									width='595'
									link={item.imgPath}
									title={item.title}
									href={`/for-students/materials/${item.name}`}
									height='261'
								/>
							))}
						</div>
					</div>
				</div>
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

export default Materials
