import React from "react";
import "../../App.css";
import UseMediaQuery from "../commonComponents/UseMediaQuery";
import "../../index.css";
import photo from "./tanveerwater.jpg";

function DescriptionNew() {
	const mobileView = UseMediaQuery("(max-width: 850px)");

	return (
		<div
			className='genericContainer'
			style={description.container(mobileView)}>
			<div className='title'>
				<h1>About</h1>
				<div className='underline'></div>
			</div>

			<div style={description.aboutContainer(mobileView)}>
				<div style={description.textDiv(mobileView)}>
					<h2 style={{ color: "var(--clr-grey-3)" }}>Hello!</h2>
					<p
						style={{
							fontSize: "1.2rem",
							color: "var(--clr-grey-2)",
							textAlign: "justify",
						}}>
						I'm Tanveer Ahamed, a Software Engineer with a passion
						for Technology. I have 2.5+ years of experience in the
						industry and I enjoy nothing more than learning the
						trends that technology is taking in order to work more
						efficiently and see progress and success. I love
						building products which are picture perfect and I have a
						passion
					</p>
					<p
						style={{
							fontSize: "1.2rem",
							color: "var(--clr-grey-2)",
							marginTop: "10%",
							textAlign: "justify",
						}}>
						After Graduating from VR Siddhartha University with a
						degree in Computer Science and Engineering in 2020. I
						spend time working in Space Application Center (ISRO),
						After I joind Infosys and Currenlty I'm working with
						Limendo, Bangalore as Full Stack Developer where I work
						on wide variety of interesting and meaningful projects
						on daily basis
					</p>
					<p
						style={{
							fontSize: "1.2rem",
							color: "var(--clr-grey-2)",
							marginTop: "10%",
							textAlign: "justify",
						}}>
						When I'm not working, I enjoy Travelling, and believe in
						maintaining a healthy work-life balance.
					</p>
				</div>
				<div style={description.imgDiv(mobileView)}>
					<img
						src={photo}
						alt='Tanveer Ahamed'
						width='75%'
						// height='100%'
						style={{
							borderRadius: "8px",
							// display: "inline-block",
							// maginLeft: "auto",
							// marginRight: "auto",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default DescriptionNew;

const description = {
	container: (isMobile) => ({
		// display: "flex",
		marginBottom: isMobile ? "10vh" : "20vh",
	}),
	aboutContainer: (isMobile) => ({
		display: "flex",
		flexDirection: isMobile ? "column-reverse" : "row",
	}),
	textDiv: (isMobile) => ({
		flex: 0.8,
		marginTop: isMobile ? "10%" : "5%",
	}),
	imgDiv: (isMobile) => ({
		flex: 1.2,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}),
};
