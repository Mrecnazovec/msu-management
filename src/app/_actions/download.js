const downloadFile = async ({href}) => {
	const response = await fetch('/files/plan.pdf')
	const blob = await response.blob()
	const url = window.URL.createObjectURL(blob)
	const a = document.createElement('a')
	a.href = url
	a.download = 'plan.pdf'
	document.body.appendChild(a)
	a.click()
	a.remove()

}

const DownloadButton = () => {
	return <button onClick={downloadFile}>Скачать файл</button>
}
export default DownloadButton