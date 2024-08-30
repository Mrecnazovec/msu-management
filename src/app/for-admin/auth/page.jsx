'use client'

import { useState } from 'react'
import './page.scss'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function SignIn() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const res = await signIn('credentials', {
				login,
				password,
				redirect: false,
			})

			if (res.error){
				setError('Неверный логин или пароль')
				return;
			}

			router.replace('/for-admin')

		} catch (error) {}
	}

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