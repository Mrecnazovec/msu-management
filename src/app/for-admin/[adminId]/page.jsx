import { getPostsForAdminSolo } from '@/app/_actions/postActions'
import Form from '../ui/Form'
import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'

const page = async ({ params }) => {
	const { data, error } = await getPostsForAdminSolo(params.adminId)

	const param = [
		{
			title: 'Имя',
			content: data[0].fullName,
		},
		{
			title: 'Логин',
			content: data[0].login,
		},
		{
			title: 'Пароль',
			content: data[0].password,
		},
		{
			id: data[0]._id,
			imgPath: data[0].imgPath,
			gender: data[0].gender,
			modificator: data[0].modificator,
		},
	]

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
			title: 'Изменение информации',
		},
	]

	return (
		<main className='change'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section className='formChange'>
				<Form param={param} />
			</section>
		</main>
	)
}

export default page
