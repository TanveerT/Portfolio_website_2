import React, { useState } from "react";
import "../../App.css";
import facelogo from "./facelogo.svg";
import UseMediaQuery from "../commonComponents/UseMediaQuery";
import "../../index.css";
import { motion, LayoutGroup } from "framer-motion";

const AboutNew = () => {
	const mobileView = UseMediaQuery("(max-width: 850px)");
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='genericContainer' style={about.container(mobileView)}>
			<div style={about.textDiv(mobileView)}>
				<div>
					<h1
						style={{
							...about.mainText(mobileView),
							color: "var(--clr-grey-1)",
						}}>
						Hi, I'm
					</h1>
					<h1
						style={{
							...about.mainText(mobileView),
							color: "var(--clr-primary-0)",
						}}>
						{" "}
						Tanveer Ahamed
					</h1>
					<p
						style={{
							fontSize: "1.2rem",
							color: "var(--clr-grey-2)",
						}}>
						I'm Software Developer from Bangalore, India.
					</p>
				</div>
			</div>
			<div style={about.imgdiv(mobileView)}>
				<img
					src={facelogo}
					style={about.facelogo(mobileView)}
					alt='Portfolio Logo'
				/>
			</div>
		</div>
	);
};

export default AboutNew;

const about = {
	container: (isMobile) => ({
		height: "calc( 100vh  )",
		// backgroundColor: "grey",
		display: "flex",
		flexDirection: isMobile ? "column-reverse" : "row",
		// marginBottom: isMobile ? "0px" : "30vh",
	}),
	imgdiv: (isMobile) => ({
		flex: 1,
		// border: "1px solid red",
		display: "flex",
		justifyContent: isMobile ? "center" : "start",
		alignItems: isMobile ? "end" : "center",
	}),
	facelogo: (isMobile) => ({
		width: "70%",
	}),
	textDiv: (isMobile) => ({
		flex: 1,
		// border: "1px solid grey",
		textAlign: isMobile ? "center" : "start",
		display: "flex",
		justifyContent: "center",
		alignItems: isMobile ? "start" : "center",
		// marginTop: isMobile ? "5%" : "0%",
	}),
	mainText: (isMobile) => ({
		fontSize: isMobile ? "2rem" : "4rem",
	}),
};
