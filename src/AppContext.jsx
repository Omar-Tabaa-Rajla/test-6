import { useState } from 'react';
import { createContext } from 'react';
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
	//data
	const [subject, setSubject] = useState('technology');
	return (
		<AppContext.Provider
			value={{
				subject,
				setSubject,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
