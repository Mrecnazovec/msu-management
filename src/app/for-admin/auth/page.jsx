'use client'

import Loading from '@/app/loading'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import './page.scss'

export default function SignIn() {
	const { data: session, status } = useSession()

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loader, setLoader] = useState(false)

	const router = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			setLoader(true)
			const res = await signIn('credentials', {
				login,
				password,
				redirect: false,
			})

			if (res.error) {
				setError('Неверный логин или пароль')
				setLoader(false)
				return
			}

			router.replace('/for-admin')
			setLoader(false)
		} catch (error) {
			setError(error.message)
			setLoader(false)
		}
	}

	if (status === 'loading') {
		return <Loading />
	}

	if (status === 'authenticated') {
		router.replace('/for-admin')
		return null
	}

	if (loader) return <Loading />

	return (
		<main className='auth'>
			<div className='form'>
				<form onSubmit={handleSubmit}>
					<label>
						Логин
						<input type='text' value={login} onChange={(e) => setLogin(e.target.value)} />
					</label>
					<label>
						Пароль:
						<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
					</label>
					{error && <div className='errorMessage'>{error}</div>}
					<button type='submit'>Войти</button>
				</form>
			</div>
		</main>
	)
}
