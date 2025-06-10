import Banner from './components/banner/Banner'
import Navigation from './components/navigationCards/Navigation'
import News from './components/news/News'
import styles from './page.scss'

export const revalidate = 10

export const metadata = {
	title: 'Факультет Менеджмент ТФ МГУ имени М.В.Ломоносова',
	description:
		'Факультет Менеджмент в Ташкентском филиале Московского государственного университета имени М.В.Ломоносова был открыт в 2023 году. На данный момент факультет активно развивается и обучает будущих специалистов в сфере экономики и менеджмента.',
	authors: [{ name: 'Aleksandr A. Salnikov', url: 'https://t.me/AlexITdrom' }],
	keywords: [
		'МГУ',
		'ТФ МГУ',
		'Менеджмент МГУ',
		'Менеджмент ТФ МГУ',
		'Филиал МГУ в Ташкенте',
		'Ташкентский филиал МГУ',
		'Московский Государственный Университет в Ташкенте',
		'МГУ экономический факультет',
		'Экономический факультета в Ташкенте',
		'Экономический факультет',
		'бакалавриат',
		'абитуриенту',
		'высшее образование',
		'международные конференции',
	],
}

export default function Home() {
	const params = [
		{
			width: '1060',
			link: '/images/pictures/mainBuilding.jpg',
			title: 'Университет',
			href: '/university',
		},
		{
			width: '645',
			link: '/images/pictures/for-student.jpg',
			title: 'Студентам',
			href: '/for-students',
		},
		{
			width: '400',
			link: '/images/pictures/entrance.jpg',
			title: 'Абитуриентам',
			href: '/entrance',
		},
	]

	return (
		<main className={styles.main}>
			<Banner src='mainBuilding' title='МГУ в Ташкенте, факультет Менеджмент' />
			<News />
			<Navigation params={params} />
		</main>
	)
}
