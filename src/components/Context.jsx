import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isRightClose, setIsRightClose] = useState(false);
	const [isLeftClose, setIsLeftClose] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<AuthContext.Provider
			value={{
				isRightClose,
				setIsRightClose,
				isLeftClose,
				setIsLeftClose,
				isDarkMode,
				setIsDarkMode,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useAuth = () => {
	const authContextValue = useContext(AuthContext);
	if (!authContextValue) {
		throw new Error("useAuth used outside of the Provider");
	}
	return authContextValue;
};
