'use client'

import { updatePostsSubjects } from '@/app/_actions/postActions'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import './changePostNews.scss'
import Loading from '@/app/loading'

const ChangeMaterialsPost = ({ data }) => {
	const id = data[0]._id
	const [title, setTitle] = useState(data[0].title)
	const [name, setName] = useState(data[0].name)
	const [imgPath, setImgPath] = useState(data[0].imgPath)
	const [teacherInfo, setTeacherInfo] = useState(data[0].teacherInfo)
	const [description, setDescription] = useState(data[0].description)
	const [downloadPath, setDownloadPath] = useState(data[0].downloadPath)
	const [fileExtension, setFileExtension] = useState('')

	const [selectedFile, setSelectedFile] = useState(null)
	const [downloadFile, setDownloadFile] = useState(null)
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
	const handleFileDownload = (e) => {
		const file = e.target.files[0]
		setDownloadFile(file)
		const fileExtensionLocal = file.name.split('.').pop().toLowerCase()
		setFileExtension(fileExtensionLocal)
	}

	// console.log(teacherInfo);

	const handleTeacherChange = (index, newValue) => {
		setTeacherInfo((prevTeacherInfo) => {
			const updatedTeacherInfo = prevTeacherInfo.map((teacher, i) => {
				if (i === index) {
					return { ...teacher, teacherName: newValue }
				}
				return teacher
			})
			return updatedTeacherInfo
		})
	}

	const handleLinkChange = (index, newValue) => {
		setTeacherInfo((prevTeacherInfo) => {
			const updatedTeacherInfo = prevTeacherInfo.map((teacher, i) => {
				if (i === index) {
					return { ...teacher, isLink: newValue }
				}
				return teacher
			})
			return updatedTeacherInfo
		})
	}

	const setIsLink = (index, isLink) => {
		handleLinkChange(index, !isLink)
	}

	const removeTeacherItem = (indexToRemove) => {
		setTeacherInfo((prevTeacher) => prevTeacher.filter((_, index) => index !== indexToRemove))
	}

	const handleAddTeacher = () => {
		setTeacherInfo((prevTeacherInfo) => [
			...prevTeacherInfo,
			{ teacherName: '', isLink: false }, // Добавляем новый объект
		])
	}

	const handleDownload = (path, fileName, format) => {
		saveAs(`${path}`, `${fileName}.${format}`)
	}
	const handleDeleteFile = (formatIndex, fileIndex) => {
		setDownloadPath((prevDownloadPath) => {
			const updatedDownloadPath = [...prevDownloadPath]

			const updatedFolder = [...updatedDownloadPath[formatIndex].folder]

			updatedFolder.splice(fileIndex, 1)

			updatedDownloadPath[formatIndex].folder = updatedFolder

			return updatedDownloadPath
		})
	}

	const handleSubmitTwo = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.set('file', selectedFile)
		formData.set('folder', 'subjects')

		const fileData = new FormData()
		fileData.set('file', downloadFile)
		fileData.set('folder', name)

		try {
			setLoader(true)

			if (
				title == data[0].title &&
				imgPath == data[0].imgPath &&
				!selectedFile &&
				!downloadFile &&
				description == data[0].description &&
				downloadPath == data[0].downloadPath &&
				name == data[0].name &&
				teacherInfo == data[0].teacherInfo
			) {
				setError('Данные не изменились')
				setLoader(false)

				return
			}

			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})
			const upFile = await fetch('/api/uploadFile', {
				method: 'POST',
				body: fileData,
			})

			if (downloadFile) {
				const upResult = downloadFile ? await upFile.json() : ''

				const upPath = !upResult ? '' : upResult.path.replace(/\\/g, '/')

				const updatedDownloadPath = [...downloadPath]

				switch (fileExtension) {
					case 'zip':
					case 'rar':
					case 'pdf':
					case 'doc':
					case 'docx':
					case 'xlsx':
					case 'pptx':
						const formatIndex = updatedDownloadPath.findIndex((item) => item.format === fileExtension)
						if (formatIndex !== -1) {
							updatedDownloadPath[formatIndex].folder.push({
								path: upPath,
								fileName: downloadFile?.name.slice(0, downloadFile?.name.lastIndexOf('.')),
							})
						} else {
							updatedDownloadPath.push({
								format: fileExtension,
								folder: { path: upPath, fileName: downloadFile?.name.slice(0, downloadFile?.name.lastIndexOf('.')) },
							})
						}
						break

					default:
						setError('Неподдерживаемый формат файла')
						setLoader(false)

						return
				}

				setDownloadPath(updatedDownloadPath)
			}

			const result = selectedFile ? await response.json() : ''

			const path = !result ? imgPath : result.path.replace(/\\/g, '/')

			const object = { id, title, path, description, name, teacherInfo, downloadPath }

			if (!imgPath) {
				setError('Требуется добавить картинку')
				setLoader(false)

				return
			}

			const res = await updatePostsSubjects(object)

			if (res.error) {
				setError(res.error)
				setLoader(false)

				return
			}

			setConfirm(true)
			setLoader(false)
			setError('Успешно!')
		} catch (error) {
			setError(error.message)
			setLoader(false)

			console.log(error)
		}
	}

	const refresh = () => {
		router.refresh()
		setConfirm(false)
	}
	const toNew = () => {
		router.replace(`/for-students/materials/${name}`)
	}

	if (loader) return <Loading />

	return (
		<form onSubmit={handleSubmitTwo} className='form'>
			<button onClick={toNew} className='submitButton start' type='submit'>
				Перейти к предмету
			</button>
			<label className='img-label'>
				<input onChange={handleFileChange} className='visually-hidden' type='file' />
				<div className='preview-box second'>
					{imgPath ? (
						<Image alt='' width={360} height={240} className='preview' src={imgPath} />
					) : (
						<svg width='200' height='200' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12'
								stroke='#1C274D'
								strokeWidth='1.5'
								strokeLinecap='round'
							/>
							<path
								d='M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235'
								stroke='#1C274D'
								strokeWidth='1.5'
							/>
							<path d='M7 16V9M7 2.5V5' stroke='#1C274D' strokeWidth='1.5' strokeLinecap='round' />
							<path
								d='M13 16V19.5309C13 19.8065 13 19.9443 12.9051 20C12.8103 20.0557 12.6806 19.9941 12.4211 19.8708L11.1789 19.2808C11.0911 19.2391 11.0472 19.2182 11 19.2182C10.9528 19.2182 10.9089 19.2391 10.8211 19.2808L9.57889 19.8708C9.31943 19.9941 9.18971 20.0557 9.09485 20C9 19.9443 9 19.8065 9 19.5309V16.45'
								stroke='#1C274D'
								strokeWidth='1.5'
								strokeLinecap='round'
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
				<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
			</label>
			<label>
				ID предмета / учителя
				<input placeholder='Пример: math-for-manage' type='text' value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<label>
				Описание
				<textarea type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
			</label>
			{teacherInfo.map((item, index) => (
				<div key={index} className='description-box'>
					<label>
						Учитель {index + 1}
						<textarea
							type='text'
							value={item.teacherName}
							onChange={(e) => {
								handleTeacherChange(index, e.target.value)
								adjustTextareaHeight(e.target) // Регулируем высоту textarea
							}}
						/>
					</label>
					<label>
						<div className='flex-checkBox'>
							Учитель есть в базе?
							<div onClick={() => setIsLink(index, item.isLink)} className={`check-box ${item.isLink && 'checked'}`}>
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
						</div>
						{item.isLink && (
							<p className='errorMessage not-clickable'>{`Проверьте чтобы у учителя был указан ID "${name}${index !== 1 ? '' : `-${index + 1}`}"`}</p>
						)}
					</label>
					{index + 1 === teacherInfo.length && (
						<div className='btnPanel'>
							<button className='addDesc' type='button' onClick={handleAddTeacher}>
								Добавить учителя
							</button>
							{teacherInfo.length !== 1 && (
								<button className='addDesc' type='button' onClick={() => removeTeacherItem(index)}>
									Удалить учителя
								</button>
							)}
						</div>
					)}
				</div>
			))}
			<div className='filesBlock'>
				{downloadPath.map((item, index) => (
					<div key={index}>
						{item.folder.length === 1 && !item.folder[0].path && !item.folder[0].fileName ? (
							''
						) : (
							<>
								{''}
								{item.folder.length === 0 ? (
									''
								) : (
									<>
										<p>Файлы {item.format}</p>
										<div className='downloadButton-box'>
											{item.folder.map((file, fileIndex) => (
												<div key={fileIndex} className='downloadButtonFlex'>
													{!file.fileName || !file.path ? (
														''
													) : (
														<>
															<button type='button' onClick={() => handleDownload(file.path, file.fileName, item.format)}>
																{file.fileName}
															</button>
															<button className='deleteButton' onClick={() => handleDeleteFile(index, fileIndex)} type='button'>
																Удалить
															</button>
														</>
													)}
												</div>
											))}
										</div>
									</>
								)}
							</>
						)}
					</div>
				))}
			</div>
			<label>
				Добавить файл
				<input className='fileLoader' onChange={handleFileDownload} type='file' />
				Доступные форматы файлов: zip, rar, docx, pdf, xlsx, pptx
			</label>

			{error && <div className='errorMessage'>{error}</div>}
			{!confirm && (
				<button className='submitButton' type='submit'>
					Принять изменения
				</button>
			)}
			{confirm && (
				<button onClick={refresh} className='submitButton' type='submit'>
					Обновить
				</button>
			)}
		</form>
	)
}

export default ChangeMaterialsPost
