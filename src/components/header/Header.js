import React from "react";
import "../../App.css";
import UseMediaQuery from "../commonComponents/UseMediaQuery";
import Resume from "../../assets/images/resume.svg";
import TanveerAhamed from "../../assets/files/TANVEER_AHAMED.pdf";

const Header = () => {
	const mobileView = UseMediaQuery("(max-width: 850px)");

	return (
		<div className='genericContainer' style={header.container}>
			<div style={{ ...header.logoContiner }}></div>

			<a
				href={TanveerAhamed}
				style={{
					...header.hireMeContainer(mobileView),
					fontSize: mobileView ? "1rem" : "1.2rem",
				}}
				download>
				<div
					style={{
						display: "inline-block",
						height: "100%",
						marginTop: "5px",
					}}>
					<img
						src={Resume}
						style={{
							width: mobileView ? "20px" : "30px",
						}}
						alt='resume icon'
					/>
				</div>
				<div
					style={{
						alignItems: "start",
						height: "100%",
					}}>
					<p style={{ margin: "5px", color: "#00838f" }}>Resume</p>
				</div>
			</a>
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
		padding: "5px",
		marginTop: "5px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}),
};
