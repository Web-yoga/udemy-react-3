import React from 'react';
import '../ErrorMessage.css'

const ErrorMessage = () => {
	return (
		<>
			<img scr={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"></img>
			<span>Something goes wrong</span>
		</>
	)
}

export default ErrorMessage;