'use client'

import { saveAs } from 'file-saver'

const LinkDownloadPlan = () => {
	const handleDownloadRar = () => {
		saveAs(`/files/plan.pdf`, `План.pdf`)
	}

	return (
		<>
			<button className='' onClick={handleDownloadRar}>
				Скачать учебный план
			</button>
		</>
	)
}

export default LinkDownloadPlan
