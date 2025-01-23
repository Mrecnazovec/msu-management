import NavigationItem from './NavigationItem'
import './navigation.scss'

const Navigation = ({ params }) => {
	return (
		<section className='tiles'>
			<h1 className="visually-hidden">
				Навигация по сайту Менеджмента ТФ МГУ
			</h1>
			<div className='container'>
				<div className='container-section'>
					<div className='tiles-container '>
						{params.map((item) => (
							<NavigationItem key={item.title} width={item.width} link={item.link} title={item.title} href={item.href} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navigation
