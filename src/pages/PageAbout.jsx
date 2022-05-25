import { useContext } from 'react';
import { AppContext } from '../AppContext';
export const PageAbout = () => {
	const { subject } = useContext(AppContext);
	return (
		<div className="page_about">
			<h2>About</h2>
			<p>the currently subject is: {subject}</p>
		</div>
	);
};
