import "../../App.css";
import "../../index.css";
import React from "react";
import UseMediaQuery from "../commonComponents/UseMediaQuery";
import experience from "./expdata";
import ExperienceDetails from "./ExperienceDetails";

function ExperienceNew() {
	const mobileView = UseMediaQuery("(max-width: 850px)");
	return (
		<div className='genericContainer' style={exp.container(mobileView)}>
			<div className='title'>
				<h1>Experience</h1>
				<div className='underline'></div>
			</div>
			{experience.map((exp, index) => {
				return (
					<ExperienceDetails
						key={index}
						mobileView={mobileView}
						experience={exp}
					/>
				);
			})}
		</div>
	);
}

export default ExperienceNew;

const exp = {
	container: (isMobile) => ({
		marginBottom: isMobile ? "10vh" : "20vh",
	}),
	expContainer: (isMobile) => ({}),
};
