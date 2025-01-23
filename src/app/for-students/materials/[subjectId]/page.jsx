import { getPostsSubjectsSolo } from '@/app/_actions/postActions'
import './page.scss'
import NotFound from '@/app/not-found'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LinkDownload from './LinkDownload'
import ChangeButton from '@/app/ui/ChangeButton'

export async function generateMetadata({ params }) {
	const { data, error } = await getPostsSubjectsSolo(params.subjectId)

	if (!data || data.length === 0) {
		return {
			title: 'Не найдено',
		}
	}

	return {
		title: data[0].title, // Динамический title
		description: `Страница предмета ${data[0].title} сайта Менеджмента ТФ МГУ`,
	}
}

const subjectId = async ({ params }) => {
	const { data, error } = await getPostsSubjectsSolo(params.subjectId)

	if (data.length == 0) return <NotFound />

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
			href: '/for-students/materials',
		},
		{
			title: `${data[0].title}`,
		},
	]

	return (
		<main className='subject'>
			<h1 className='visually-hidden'>Предмет {data[0].title} в ТФ МГУ</h1>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section className='subject-section'>
				<div className='container'>
					<div className='container-section'>
						<div className='materialsButtonChange'>
							<ChangeButton text='Изменить' href={`/for-admin/materials-change/${data[0].name}`} />
						</div>
						<Image priority alt='' src={data[0].imgPath} width={1060} height={440} />
						<h2>{data[0].title}</h2>
						<h3>
							{data[0].teacherInfo.length == 1 ? 'Преподаватель:' : 'Преподаватели:'}
							{data[0].teacherInfo.map((item, index) => (
								<div key={index}>
									{item.isLink ? (
										<Link href={`/university/teachers#${data[0].name}${index === 0 ? '' : `-${index + 1}`}`}>{item.teacherName}</Link>
									) : (
										<span>{item.teacherName}</span>
									)}
								</div>
							))}
						</h3>
						<p>{data[0].description}</p>
						<div className='link-group'>
							<LinkDownload path={data[0].downloadPath} title={data[0].title} />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default subjectId
