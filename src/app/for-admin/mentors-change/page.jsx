import { getPostsMentors } from '@/app/_actions/postActions'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import ChangeButton from '@/app/ui/ChangeButton'
import DeleteButton from '@/app/ui/DeleteButton'
import Link from 'next/link'
import './page.scss'

const mentorsChange = async ({ searchParams }) => {
	let page = parseInt(searchParams.page, 10)
	page = !page || page < 1 ? 1 : page
	const perPage = 10

	const { data, dataCount, error } = await getPostsMentors(perPage, page)

	const totalPages = Math.ceil(dataCount / perPage)

	const prevPage = page - 1 > 0 ? page - 1 : 1
	const nextPage = page + 1
	const isPageOutOfRange = page > totalPages

	const pageNumbers = []
	const offsetNumbers = 3
	for (let i = page - offsetNumbers; i <= page + offsetNumbers; i++) {
		if (i >= 1 && i <= totalPages) {
			pageNumbers.push(i)
		}
	}

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
			title: 'Изменение менторов',
		},
	]

	return (
		<main className='newsChange'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<section className='newsChange-section'>
				<div className='container'>
					<div className='container-section'>
						<div className='changeTitle'>
							<h1>Изменение менторов</h1>
							<ChangeButton text='Добавить ментора' href={`/for-admin/mentors-change/yangi`} />
						</div>
						<div className='newsContent'>
							{data.map((item) => (
								<div key={item._id} className='news-item'>
									<Link href={`/for-students/mentors/#${item._id}`}>{item.name}</Link>
									<div className='btn-box'>
										<ChangeButton text='Изменить' href={`/for-admin/mentors-change/${item._id}`} />
										<DeleteButton id={item._id} action='deleteMentors'/>
									</div>
								</div>
							))}
						</div>
						{isPageOutOfRange ? (
							<div className='errorPage'>
								<p className='h3'>Несуществующая страница</p>
								<Link href='?page=1'>Перейти к первой</Link>
							</div>
						) : (
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
						)}
					</div>
				</div>
			</section>
		</main>
	)
}

export default mentorsChange
