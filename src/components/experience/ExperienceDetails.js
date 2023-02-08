import React from "react";

function ExperienceDetails({ mobileView, experience }) {
	let teckStack = experience.teckStack.reduce((t, stack) => {
		return t + " " + stack + ",";
	}, "");
	teckStack = teckStack.substring(0, teckStack.length - 1) + ".";
	return (
		<div style={exp.container(mobileView)}>
			<div style={exp.logoContainer(mobileView)}>
				<img
					style={exp.logo(mobileView)}
					src={experience.logo}
					alt={experience.name}
				/>
			</div>
			<div style={exp.detailsContainer(mobileView)}>
				<h2 style={{ ...exp.title(mobileView) }}>{experience.title}</h2>
				<h4 style={{ lineHeight: "1.5" }}>
					{experience.CompanyDetails}
					{" | "}
					{experience.duration}
				</h4>
				<h4 style={{ lineHeight: "1.5" }}>Tech Stack : {teckStack}</h4>
				<ul style={{ marginLeft: "10%" }}>
					{experience.aboutlist.map((about, index) => {
						return (
							<li
								key={index}
								style={{ color: "var(--clr-grey-5)" }}>
								<p>{about}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ExperienceDetails;

const exp = {
	container: (isMobile) => ({
		display: "flex",
		flexDirection: isMobile ? "column" : "row",
		justifyContent: "space-between",
		borderBottom: "1px solid var(--clr-primary-0)",
		marginBottom: "10%",
		paddingBottom: "10%",
	}),
	logoContainer: (isMobile) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flex: 0.8,
	}),
	logo: (isMobile) => ({
		maxWidth: isMobile ? "75%" : "70%",
	}),
	detailsContainer: (isMobile) => ({
		marginTop: isMobile ? "20px" : "0px",
		flex: 1,
	}),
	title: (isMobile) => ({
		// textAlign: isMobile ? "center" : "left",
	}),
};
