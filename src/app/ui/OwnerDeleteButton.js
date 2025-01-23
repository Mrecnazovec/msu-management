'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import './AllButton.scss'
import ButtonLoader from './ButtonLoader'

const DeleteButton = ({ id, action }) => {
	const { data: session, status } = useSession()
	const info = session?.user?.name

	const [confirm, setConfirm] = useState(false)
	const [isConfirmed, setIsConfirmed] = useState(false)

	const [loading, setLoading] = useState(false)

	const router = useRouter()

	const confirmed = () => {
		router.refresh()
	}

	const deleteNews = async () => {
		const props = new FormData()
		props.set('id', id)
		props.set('action', action)

		try {
			setLoading(true)

			const response = await fetch('/api/delete', {
				method: 'DELETE',
				body: props,
			})

			if (!response.success) setIsConfirmed(true)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}
	if (loading) return <ButtonLoader />
	return (
		<>
			<button
				onClick={() => setConfirm(true)}
				className={`newsShow ${status === 'authenticated' && info.roleLevel >= 3 ? '' : 'none'} ${confirm ? 'none' : 'active'}`}
			>
				Удалить
			</button>

			<button
				onClick={deleteNews}
				className={`newsShow ${status === 'authenticated' && info.roleLevel >= 3 ? '' : 'none'} ${confirm ? 'active' : 'none'} ${
					isConfirmed ? 'none' : ''
				}`}
			>
				Вы уверены?
			</button>

			<button
				onClick={confirmed}
				className={`newsShow ${status === 'authenticated' && info.roleLevel >= 3 ? '' : 'none'} ${confirm ? 'active' : 'none'} ${
					isConfirmed ? '' : 'none'
				}`}
			>
				Перезагрузить
			</button>
		</>
	)
}

export default DeleteButton
