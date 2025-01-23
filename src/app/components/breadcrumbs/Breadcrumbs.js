import Link from 'next/link'
import './breadcrumbs.scss'
const Breadcrumbs = ({ breadcrumbs }) => {
	return (
		<div className='breadcrumbs'>
			<div className='container'>
				<div className='breadcrumbs-container'>
					{breadcrumbs.map((item) =>
						item.href ? (
							<div key={item.title} className='breadcrumbs-item'>
								<Link href={item.href}>{item.title}</Link>
								<span>{'>'}</span>
							</div>
						) : (
							<div key={item.title} className='breadcrumbs-item'>
								<span>{item.title}</span>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	)
}

export default Breadcrumbs
