import "../../App.css";
import "../../index.css";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../commonComponents/Modal";

function SkillComponent({ mobileStatus, skillData }) {
	// const mobileView = UseMediaQuery("(max-width: 850px)");
	const [hover, setHover] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const close = () => {
		setModalOpen(false);
		setHover(false);
	};
	const open = () => setModalOpen(true);

	useEffect(() => {
		if (hover) {
			console.log("check in");
		} else {
			console.log("check out");
		}

		return () => {};
	}, [hover]);
	return (
		<div
			style={{
				...skill.container(mobileStatus),
				...(hover ? skill.onHover(mobileStatus) : null),
			}}
			onClick={() => (modalOpen ? close() : open())}
			onMouseEnter={() => {
				setHover(true);
				if (mobileStatus) {
					setHover(false);
				}
			}}
			onMouseLeave={() => {
				setHover(false);
			}}>
			<AnimatePresence
				// Disable any initial animations on children that
				// are present when the component is first rendered
				initial={false}
				// Only render one component at a time.
				// The exiting component will finish its exit
				// animation before entering component is rendered
				exitBeforeEnter={true}
				// Fires when all exiting nodes have completed animating out
				onExitComplete={() => null}>
				{modalOpen && (
					<Modal
						mobileStatus={mobileStatus}
						modalOpen={modalOpen}
						handleClose={close}
						images={skillData.images}
						setHover={setHover}
					/>
				)}
			</AnimatePresence>

			{hover ? (
				<div style={{ ...skill.afterHover(mobileStatus) }}>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className='save-button '
						style={{ ...skill.button(mobileStatus) }}>
						View Certifications
					</motion.div>
				</div>
			) : (
				<>
					<div
						style={{
							width: "50%",
							marginLeft: "auto",
							marginRight: "auto",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<img
							src={skillData.logo}
							style={{ marginTop: "20px" }}
							alt='React Icon'
						/>
					</div>

					<div>
						<h3
							style={{
								...skill.title(mobileStatus),
								textAlign: "center",
								marginTop: "10px",
							}}>
							{skillData.name}
						</h3>
					</div>

					<div style={{ padding: "5px", overflow: "hidden" }}>
						<p style={{ textAlign: "center" }}>
							{" "}
							{mobileStatus
								? skillData.description.substring(0, 40) + "..."
								: skillData.description}
						</p>
					</div>
				</>
			)}
		</div>
	);
}

export default SkillComponent;

const skill = {
	container: (isMobile) => ({
		display: "flex",
		flexDirection: "column",
		border: "5px solid #cceeff",
		width: isMobile ? "48%" : "30%",
		height: isMobile ? "220px" : "250px",
		backgroundColor: "rgba(255,208,204,0.3)",
		borderRadius: "20px",
		marginTop: "20px",
	}),

	onHover: (isMobile) => ({}),
	afterHover: (isMobile) => ({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		border: "5px solid #cceeff",
		borderRadius: "20px",
		backgroundColor: "rgba(255,255,255,0.5)",
	}),
	title: (isMobile) => ({
		fontSize: isMobile ? "1rem" : "1.5rem",
	}),
	description: (isMobile) => ({
		fontSize: isMobile ? "0.8rem" : "1rem",
	}),
	button: (isMobile) => ({
		borderWidth: "0px",
		color: "var(--clr-primary-0)",
	}),
};
