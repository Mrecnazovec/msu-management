const ButtonSchema = () => {
	
  const getPreferredColorScheme = () => {
		const darkQuery = '(prefers-color-scheme: dark)'
		const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {}
		if (darkMQL.media === darkQuery && darkMQL.matches) {
			return 'data-color-scheme="default"'
		}
		return 'data-color-scheme="dark"'
	};

	const swapButton = () => {
		const colorScheme = document.documentElement.getAttribute('data-color-scheme')
		document.documentElement.setAttribute('data-color-scheme', colorScheme === 'default' ? 'dark' : 'default')
	}
	return <button onClick={swapButton} id='button'>Toggle Dark Mode</button>
}

export default ButtonSchema
