import { getPostsNews } from '@/app/_actions/postActions'
import SwiperItem from './SwiperItem'



const Swiper = async () => {
	const { data, dataCount, error } = await getPostsNews(10)
	const count = dataCount
	
	if (error) return <h1>{error}</h1>
	return (<SwiperItem assets={data} count={count} />)
	
}

export default Swiper
