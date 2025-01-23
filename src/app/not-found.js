import AllButton from './ui/AllButton'
import './notFound.scss'
const NotFound = () => {
	return (
		<main className='notFound'>
			<div>
				<h1>404</h1>
				<p>Страница не найдена</p>
				<AllButton text='На главную' href='/'/>

				
			</div>
		</main>
	)
}

export default NotFound
