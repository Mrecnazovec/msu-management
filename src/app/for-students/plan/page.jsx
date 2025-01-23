import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import './page.scss'
import { getPostsPlans } from '@/app/_actions/postActions'
import PlanItem from './components/PlanItem'
import LinkDownloadPlan from './components/LinkDownloadPlan'

export const revalidate = 10

export const metadata = {
	title: 'Уч. план',
	description:'Страница "Учебный план" сайта Менеджмента ТФ МГУ',	
}

const Plan = async () => {
	const { data, error } = await getPostsPlans()

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
			title: 'Учебный план',
		},
	]

	return (
		<main className='plan'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h1 className='visually-hidden'>Учебный план Менеджмента ТФ МГУ</h1>
			<section className='plan-section'>
				<div className='container'>
					<div className='container-section'>
						{/* {data.map((item) => (
							<div key={item._id}>
								<h2>{item.course}</h2>
								<table>
									<thead>
										<tr>
											<th>Предмет</th>
											<th>{item.thead.thOne}</th>
											<th>{item.thead.thTwo}</th>
											<th>Итог</th>
										</tr>
									</thead>
									<tbody>
										{item.tbody.map((prop) => (
											<tr key={prop.title}>
												<td>{prop.titlePath ? <Link href={prop.titlePath}>{prop.title}</Link> : prop.title}</td>
												<td>{prop.tdOne ? prop.tdOne : '-'}</td>
												<td>{prop.tdTwo ? prop.tdTwo : '-'}</td>
												<td>{prop.result}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						))} */}
						<PlanItem data={data}/>
						
					</div>
					<div className='container-section'>
						{/* <Link download href='/files/plan.pdf'>
							Скачать учебный план
						</Link> */}
						<LinkDownloadPlan/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Plan
