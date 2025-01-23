'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import './AllButton.scss'

const OwnerButton = ({ text, href }) => {
	const { data: session, status } = useSession()
	const info = session?.user?.name

	return (
		<Link className={`button ${status === 'authenticated' && info.roleLevel >= 3 ? '' : 'none'}`} href={href}>
			<span>{text}</span>
		</Link>
	)
}

export default OwnerButton
