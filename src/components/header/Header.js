import React from "react";
import "../../App.css";
import UseMediaQuery from "../commonComponents/UseMediaQuery";

const Header = () => {
	const mobileView = UseMediaQuery("(max-width: 850px)");

	return (
		<div className='genericContainer' style={header.container}>
			<div style={{ ...header.logoContiner }}></div>

			<div
				style={{
					...header.hireMeContainer(mobileView),
					fontSize: mobileView ? "1rem" : "1.2rem",
				}}>
				Resume
			</div>
		</div>
	);
};

export default Header;

const header = {
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		// backgroundColor: "grey",
	},
	logoContiner: {},
	hireMeContainer: (isMobile) => ({
		position: "fixed",
		color: "var(--clr-primary-0)",
		right: isMobile ? "15px" : "15px",
		border: "2px solid var(--clr-primary-0)",
		borderRadius: "24px",
		padding: "5px",
		marginTop: "5px",
	}),
};
