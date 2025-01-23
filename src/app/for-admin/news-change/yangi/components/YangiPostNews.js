'use client'

import { createPostsNews } from '@/app/_actions/postActions'
import Loading from '@/app/loading'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import './yangiPostNews.scss'

const YangiPostNews = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState([''])
	const [imgPath, setImgPath] = useState('')
	const [selectedFile, setSelectedFile] = useState(null)
	const [auto, setAuto] = useState(false)
	const { data: session, status } = useSession()
	const [error, setError] = useState('')
	const [confirm, setConfirm] = useState(false)

	const [loader, setLoader] = useState(false)

	const router = useRouter()

	useEffect(() => {
		if (selectedFile) {
			setSelectedFile(selectedFile)
		}
	}, [selectedFile])

	if (status === 'unauthenticated') {
		redirect('/for-admin/auth')
	}

	const adjustTextareaHeight = (textarea) => {
		textarea.style.height = 'auto'
		textarea.style.height = textarea.scrollHeight + 'px'
	}

	useEffect(() => {
		const textareas = document.querySelectorAll('textarea')
		textareas.forEach((textarea) => adjustTextareaHeight(textarea))
	}, [])

	const handleFileChange = (e) => {
		const file = e.target.files[0]
		setSelectedFile(file)

		if (file) {
			const url = URL.createObjectURL(file)
			setImgPath(url)
		}
	}

	const handleDescriptionChange = (index, newValue) => {
		setDescription((prevDescription) => {
			const newDescription = [...prevDescription]
			newDescription[index] = newValue
			return newDescription
		})
	}

	const removeDescriptionItem = (indexToRemove) => {
		setDescription((prevDescription) => prevDescription.filter((_, index) => index !== indexToRemove))
	}

	const handleSubmitTwo = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.set('file', selectedFile)
		formData.set('folder', 'news')

		try {
			setLoader(true)

			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})

			const result = selectedFile ? await response.json() : ''

			const path = !result ? imgPath : result.path.replace(/\\/g, '/')

			console.log(path)

			const object = { title, description, path, auto }

			const res = await createPostsNews(object)

			if (res.error) {
				setError(res.error)
				setLoader(false)

				return
			}

			setConfirm(true)
			setLoader(false)

			setError('Новость добавлена')
		} catch (error) {
			setError(error.message)
			setLoader(false)

			console.log(error)
		}
	}

	const refresh = () => {
		router.replace('/news')
		setConfirm(false)
	}
	const autoChange = () => {
		if (auto === false) {
			setAuto(true)
		} else {
			setAuto(false)
		}
	}

	if (loader) return <Loading />

	return (
		<form onSubmit={handleSubmitTwo} className='form'>
			<label className='img-label'>
				<input onChange={handleFileChange} className='visually-hidden' type='file' />
				<div className={`preview-box second ${auto && 'auto'}`}>
					{imgPath ? (
						<Image alt='' width={360} height={240} className={`preview ${auto && 'auto'}`} src={imgPath} />
					) : (
						<svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M67.3543 134.212C72.574 145.306 80.3748 155.911 90.5789 165.785C69.1893 162.573 51.4043 149.519 41.7457 131.463L67.3539 134.212H67.3543ZM90.1906 34.7508C69.3525 38.016 52.0002 50.6072 42.2936 68.0383L67.3604 65.5695C72.5156 54.6996 80.198 44.3539 90.1904 34.7506L90.1906 34.7508ZM98.05 65.8996L98.3977 34.0264H98.327C87.1156 43.8121 78.5842 54.4055 72.8984 65.6172L98.0496 65.9004L98.05 65.8996ZM43.9119 75.7971L39.2813 75.7559L34.7033 75.6965L34.344 108.801L15.8092 75.4961L5.47539 75.3838L4.96895 122.493L9.57617 122.557L14.1598 122.599L14.5252 88.6395L33.5965 122.811L43.4121 122.923L43.9129 75.7963L43.9119 75.7971ZM87.9635 84.6406L88.0047 80.4402L88.0576 76.2689L53.368 75.8978L52.8615 123.025L88.6295 123.402L88.6766 119.213L88.7178 115.036L62.8004 114.759L62.9299 102.463L85.9723 102.71L86.0135 98.6686L86.0547 94.6033L63.0123 94.3615L63.1246 84.3691L87.9635 84.64V84.6406ZM134.99 110.987L128.533 76.71L118.052 76.5859L110.953 111.011L103.447 76.4387L93.2129 76.3209L105.821 123.589L110.493 123.636L115.177 123.695L122.971 86.6609L130.141 123.849L134.843 123.913L139.509 123.96L153.13 76.9748L143.179 76.8685L134.99 110.987L134.99 110.987ZM103.459 34.0848H103.388L103.046 65.9523L128.216 66.2178C122.76 54.8822 114.465 44.1123 103.459 34.0848H103.459ZM157.213 66.524C146.738 49.0398 128.863 36.9143 108.028 34.4533C121.375 44.7896 128.828 55.2945 133.759 66.2762L157.213 66.5234L157.213 66.524ZM108.384 165.974C129.762 163.234 147.717 150.652 157.784 132.99L132.286 134.913C126.825 145.889 118.788 156.317 108.384 165.974L108.384 165.974ZM126.707 134.854L102.309 134.589L101.979 165.025C112.714 155.675 121.015 145.524 126.706 134.854L126.707 134.854ZM191.679 101.779C189.381 99.7465 184.833 97.9203 177.993 96.3352C173.279 95.2041 170.198 94.2789 168.761 93.4779C167.293 92.7059 166.557 91.6043 166.575 90.1848C166.587 88.2467 167.312 86.6732 168.743 85.5949C170.151 84.552 172.119 84.016 174.611 84.0512C177.498 84.0748 179.831 84.7703 181.616 86.0838C183.39 87.4096 184.35 89.1828 184.492 91.4336L194.077 91.5514C193.771 86.8088 191.974 83.0613 188.686 80.2453C185.417 77.4291 181.127 75.9977 175.849 75.9445C170.216 75.8799 165.721 77.1818 162.381 79.7977C159.046 82.4434 157.355 86.0957 157.308 90.6443C157.267 94.7273 158.48 97.7437 160.949 99.7055C163.453 101.655 168.437 103.517 175.884 105.255C179.938 106.198 182.571 107.123 183.808 107.948C185.057 108.797 185.682 110.092 185.664 111.884C185.647 113.68 184.745 115.059 182.972 116.061C181.193 117.051 178.747 117.533 175.596 117.498C172.549 117.463 170.163 116.773 168.479 115.401C166.77 114.051 165.898 112.137 165.816 109.609L156.336 109.509C156.507 114.6 158.269 118.535 161.592 121.328C164.921 124.144 169.569 125.564 175.513 125.623C181.469 125.682 186.177 124.462 189.689 121.882C193.212 119.313 194.979 115.831 195.026 111.4C195.097 107.005 193.966 103.788 191.68 101.779L191.679 101.779ZM96.9895 164.943L97.3195 134.542L72.9223 134.277C78.4014 145.058 86.4668 155.38 96.9893 164.943L96.9895 164.943Z'
								fill='#FCEDA9'
							/>
						</svg>
					)}
				</div>
				<p className='preview-change'>Изменить превью</p>
			</label>
			<p className='preview-change' onClick={() => setImgPath('')}>
				Удалить превью
			</p>

			<label>
				Заголовок
				<input required type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
			</label>
			{description.map((item, index) => (
				<div key={index} className='description-box'>
					<label>
						Абзац {index + 1}
						<textarea
							type='text'
							value={item}
							onChange={(e) => {
								handleDescriptionChange(index, e.target.value)
								adjustTextareaHeight(e.target) // Регулируем высоту textarea
							}}
						/>
					</label>
					{index + 1 === description.length && (
						<div className='btnPanel'>
							<button className='addDesc' type='button' onClick={() => handleDescriptionChange(index + 1, '')}>
								Добавить абзац
							</button>
							{description.length !== 1 && (
								<button className='addDesc' type='button' onClick={() => removeDescriptionItem(index)}>
									Удалить абзац
								</button>
							)}
						</div>
					)}
				</div>
			))}
			<label>
				Широкое фото
				<div onClick={autoChange} className={`check-box ${auto === false ? '' : 'auto'}`}>
					<div className='check-svg'>
						<svg version='1.1' viewBox='0 0 548.873 548.873' width='30' height='30'>
							<g>
								<g>
									<polygon
										points='449.34,47.966 195.46,301.845 99.533,205.917 0,305.449 95.928,401.378 195.46,500.907 294.99,401.378 548.873,147.496 '
										fill='#000'
									></polygon>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</label>
			{error && <div className='errorMessage'>{error}</div>}
			{!confirm && (
				<button className='submitButton' type='submit'>
					Добавить
				</button>
			)}
			{confirm && (
				<button onClick={refresh} className='submitButton' type='submit'>
					Перейти к новостям
				</button>
			)}
		</form>
	)
}

export default YangiPostNews
