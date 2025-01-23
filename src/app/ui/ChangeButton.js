'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import './AllButton.scss'

const ChangeButton = ({ text, href }) => {
	const { data: session, status } = useSession()
	const info = session?.user?.name

	return (
		<Link className={`button ${status === 'authenticated' && info.roleLevel >= 2 ? '' : 'none'}`} href={href}>
			<span>{text}</span>
		</Link>
	)
}

export default ChangeButton
