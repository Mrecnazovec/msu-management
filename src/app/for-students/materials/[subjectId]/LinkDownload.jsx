'use client'

import { saveAs } from 'file-saver'

const LinkDownload = ({ path, title }) => {
	const handleDownload = (path, fileName, format) => {
		saveAs(`${path}`, `${fileName}.${format}`)
	}

	return (
		<>
			{path.map((item, index) => (
				<div key={index}>
					{item.folder.length === 1 && item.folder[0].path === '' && item.folder[0].fileName === '' ? (
						''
					) : (
						<>
							{' '}
							{item.folder.length === 0 ? (
								''
							) : (
								<>
									{' '}
									<p>Файлы {item.format}</p>
									<div className='downloadButton-box'>
										{item.folder.map((file, index) => (
											<>
												{!file.fileName || !file.path ? (
													''
												) : (
													<button type='button' key={index} onClick={() => handleDownload(file.path, file.fileName, item.format)}>
														{file.fileName}
													</button>
												)}
											</>
										))}
									</div>
								</>
							)}
						</>
					)}
				</div>
			))}
		</>
	)
}

export default LinkDownload
