'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import './yangiPostNews.scss'
import { createPostsTeachers } from '@/app/_actions/postActions'
import Loading from '@/app/loading'

const YangiAdministration = () => {
	const [name, setName] = useState('')
	const [about, setAbout] = useState('')
	const [imgPath, setImgPath] = useState('')
	const [modificator, setModificator] = useState('')
	const [href, setHref] = useState('')
	const [link, setLink] = useState('')
	const [span, setSpan] = useState('')
	const [personId, setPersonId] = useState('')

	const [selectedFile, setSelectedFile] = useState(null)
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

	const handleSubmitTwo = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.set('file', selectedFile)
		formData.set('folder', 'teachers')

		try {
			setLoader(true)

			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})

			const result = selectedFile ? await response.json() : ''

			const path = !result ? imgPath : result.path.replace(/\\/g, '/')

			const object = { name, about, modificator, href, link, span, path, personId }

			const res = await createPostsTeachers(object)

			if (res.error) {
				setError(res.error)
				setLoader(false)

				return
			}

			setConfirm(true)
			setLoader(false)

			setError('Человек добавлен')
		} catch (error) {
			setError(error.message)
			setLoader(false)

			console.log(error)
		}
	}

	const refresh = () => {
		router.replace('/university/teachers')
		setConfirm(false)
	}
	const toNew = () => {
		router.replace(`/university/teachers`)
	}
	const modificatorChange = () => {
		if (modificator === '') {
			setModificator('card--big')
		} else {
			setModificator('')
		}
	}

	if (loader) return <Loading />

	return (
		<form onSubmit={handleSubmitTwo} className='form'>
			<button onClick={toNew} className='submitButton start' type='submit'>
				Перейти к преподавателям
			</button>
			<label className='img-label'>
				<input onChange={handleFileChange} className='visually-hidden' type='file' />
				<div className={`preview-box ${modificator === '' ? 'not-mode' : ''}`}>
					{imgPath ? (
						<Image alt='' width={360} height={240} className='preview' src={imgPath} />
					) : (
						<svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M116.909 99.8047H83.091C49.8305 99.8047 22.7715 126.864 22.7715 160.124V200H177.229V160.124C177.229 126.864 150.17 99.8047 116.909 99.8047Z'
								fill='#7D0A35'
							/>
							<path
								d='M100 0C74.2802 0 53.356 20.9246 53.356 46.6445C53.356 72.3641 74.2802 93.2887 100 93.2887C125.72 93.2887 146.644 72.3641 146.644 46.6441C146.644 20.9246 125.72 0 100 0Z'
								fill='#7D0A35'
							/>
						</svg>
					)}
				</div>
				<p className='preview-change'>Изменить Фото</p>
			</label>
			<p className='preview-change' onClick={() => setImgPath('')}>
				Удалить фото
			</p>

			<label>
				Имя
				<input type='text' required value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<label>
				О человеке
				<textarea type='text' required value={about} onChange={(e) => setAbout(e.target.value)} />
			</label>
			<label>
				Название вкладки
				<input type='text' placeholder='Пример: "Предмет"' value={span} onChange={(e) => setSpan(e.target.value)} />
			</label>
			<label>
				Название ссылки
				<input type='text' placeholder='Пример: "Математика для менеджеров"' value={link} onChange={(e) => setLink(e.target.value)} />
			</label>
			<label>
				Ссылка
				<input type='text' placeholder='Пример: "/for-students/materials/math-for-manage"' value={href} onChange={(e) => setHref(e.target.value)} />
			</label>
			<label>
				ID учителя / предмета
				<input type='text' placeholder='Пример: "math-for-manage"' value={personId} onChange={(e) => setPersonId(e.target.value)} />
			</label>
			<label>
				Широкое фото
				<div onClick={modificatorChange} className={`check-box ${modificator === '' ? '' : 'checked'}`}>
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
					Перейти к преподавателям
				</button>
			)}
		</form>
	)
}

export default YangiAdministration
