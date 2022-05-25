import { useContext } from 'react';
import { AppContext } from '../AppContext';
export const PageWelcome = () => {
	const { subject, setSubject } = useContext(AppContext);
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			<div>{subject}</div>
			<div>
				<button
					onClick={() =>
						setSubject(
							subject === 'technology' ? 'history' : 'technology'
						)
					}
				>
					Subject
				</button>
			</div>
		</div>
	);
};
