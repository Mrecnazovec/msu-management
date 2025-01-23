import Banner from '../components/banner/Banner'
import NavigationItem from '../components/navigationCards/NavigationItem'
import './page.scss'

export const metadata = {
	title: 'Студентам',
	description:'Страница "Студентам" сайта Менеджмента ТФ МГУ',	
}

const forStudents = () => {
	return (
		<main className='for-students'>
			<Banner src='for-student' title='Для студентов ТФ МГУ'/>
			<section className='for-students-about'>
				<div className='container'>
					<div className='container-section'>
						<h2>Студентам</h2>
						<p className='paragraph'>
							Специально для студентов, Научным сектором Менеджмента были подготовлены учебные материалы по пройденым предметам. Благодаря им, у вас
							появляется воможность заранее ознакомиться с предстоящим курсом, найти ответы на вопросы и подготовиться к предстоящим заданиям.
							

						</p>
						<NavigationItem width='1060' link='/images/pictures/materials.jpg' title='Учебные материалы' href='/for-students/materials'/>
					</div>
				</div>
			</section>
			<section className='for-students-plan'>
				<div className='container'>
					<div className='container-section'>
						<h2>Учебный план</h2>
						<p className='paragraph'>
						Ниже предоставлен учебный план направления Менеджмента.
						</p>
						<NavigationItem width='1060' link='/images/pictures/subject-plan.jpg' title='Учебный план' href='/for-students/plan'/>
					</div>
				</div>
			</section>
			<section className='for-students-mentors'>
				<div className='container'>
					<div className='container-section'>
						<h2>Менторы</h2>
						<p className='paragraph'>
						Менторы это люди которые помогут вам в адаптации к университету, а также при возникновении проблем помогут их решить. Не стесняйтесь обращаться!
						</p>
						<NavigationItem width='1060' link='/images/pictures/mentors.jpg' title='Менторы' href='/for-students/mentors'/>
					</div>
				</div>
			</section>
			<section className='for-students-help'>
				<div className='container'>
					<div className='container-section'>
						<h2>Нужна помощь?</h2>
						<p className='paragraph'>
						Поможем чем сможем!
						</p>
						<NavigationItem width='1060' link='/images/pictures/help.png' title='Помощь' href='/for-students/help'/>
					</div>
				</div>
			</section>

		</main>
	)
}

export default forStudents
