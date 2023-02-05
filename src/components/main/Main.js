import React, { useRef } from "react";
import AboutNew from "../about/AboutNew";
import Header from "../header/Header";
import DescriptionNew from "../description/DescriptionNew";
import Skills from "../skills/Skills";
import { motion, useScroll } from "framer-motion";
import "../../App.css";

const Main = () => {
	const carouselRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: carouselRef,
	});
	return (
		<div style={{ ...mainStyles.outerContainer }}>
			<motion.div
				className='progress-bar'
				style={{ scaleX: scrollYProgress }}
			/>
			<div
				ref={carouselRef}
				className='hideScrollbar'
				style={{ ...mainStyles.container }}>
				<Header />
				<AboutNew />
				<DescriptionNew />
				<Skills />
			</div>
		</div>
	);
};

export default Main;
const mainStyles = {
	outerContainer: {
		width: "100%",
		height: "100vh",
		padding: "10px",
		overflow: "fixed",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		backgroundColor: "#cceeff",
		width: "100%",
		height: "100%",
		borderRadius: "5px",
		overflow: "scroll",
	},
};
