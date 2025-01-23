import './page.scss'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import YangiMaterialsPost from './components/YangiMaterialsPost'

const changeNew = async () => {

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
			title: 'Новый материал',
		},
	]

	return (
		<main className='changeNew'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<section>
				<div className='container'>
					<div className='container-section'>
						<YangiMaterialsPost/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default changeNew
