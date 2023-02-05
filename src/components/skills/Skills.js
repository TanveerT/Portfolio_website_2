import "../../App.css";
import "../../index.css";
import React from "react";
import UseMediaQuery from "../commonComponents/UseMediaQuery";
import SkillComponent from "./SkillComponent";
import SkillsData from "./skillsdata";

function Skills() {
	const mobileView = UseMediaQuery("(max-width: 850px)");

	return (
		<div className='genericContainer' style={skills.container(mobileView)}>
			<div className='title'>
				<h1>Skills</h1>
				<div className='underline'></div>
			</div>
			{mobileView ? (
				<div>
					<p style={{ color: "red" }}>
						{" "}
						Click on the skill to view Certifications *
					</p>
				</div>
			) : null}

			<div style={skills.skillsContainer(mobileView)}>
				{SkillsData.map((skill, index) => {
					console.log(skill);
					return (
						<SkillComponent
							key={index}
							mobileStatus={mobileView}
							skillData={skill}
						/>
					);
				})}
				{/* <SkillComponent mobileStatus={mobileView} />
				<SkillComponent mobileStatus={mobileView} />
				<SkillComponent mobileStatus={mobileView} />
				<SkillComponent mobileStatus={mobileView} />
				<SkillComponent mobileStatus={mobileView} />
				<SkillComponent mobileStatus={mobileView} />
				<SkillComponent mobileStatus={mobileView} />
				<SkillComponent mobileStatus={mobileView} /> */}
			</div>
		</div>
	);
}

export default Skills;

const skills = {
	container: (isMobile) => ({
		// height: "50vh",
		marginBottom: isMobile ? "10vh" : "20vh",
	}),
	skillsContainer: (isMobile) => ({
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		width: "100%",
		// border: "1px solid red",
	}),
};
