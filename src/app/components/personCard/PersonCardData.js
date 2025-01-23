import PersonCard from './PersonCard'
import './personCardData.scss'

const  PersonCardData = async({props}) => {

	const data = props
	

	return (
		<section className='personCardData'>
				<PersonCard data={data} />
		</section>
	)
}

export default PersonCardData
