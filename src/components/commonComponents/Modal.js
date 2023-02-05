import "../../App.css";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import { wrap } from "popmotion";
import React, { useState } from "react";
// import UseMediaQuery from "./UseMediaQuery";
// import JAVA from "../certification/images/JAVA.jpeg";
// import SQL from "../certification/images/SQL.jpeg";

// const images = ["/assets/images/JAVA.jpeg", "/assets/images/SQL.jpeg"];

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

const variants = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};

const Modal = ({ handleClose, mobileStatus, images }) => {
	// const mobileView = UseMediaQuery("(max-width: 850px)");
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, images.length, page);
	// const img = images[imageIndex];
	// const imgsRendered = images.map((link) => require(link));

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				drag
				onClick={(e) => e.stopPropagation()}
				className='modal orange-gradient'
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
				style={model.modelStyle(mobileStatus)}>
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						key={page}
						src={images[imageIndex]}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: {
								type: "spring",
								stiffness: 300,
								damping: 30,
							},
							opacity: { duration: 0.2 },
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
						}}
						style={{ ...model.img(mobileStatus) }}
					/>
				</AnimatePresence>
				<div className='next' onClick={() => paginate(1)}>
					{"‣"}
				</div>
				<div className='prev' onClick={() => paginate(-1)}>
					{"‣"}
				</div>

				<motion.div
					className='button'
					style={{ ...model.button }}
					onClick={handleClose}>
					Close
				</motion.div>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;

const model = {
	modelStyle: (isMobile) => ({
		width: "clamp(50%,700px,98%)",
		height: isMobile ? "40%" : "75%",
		margin: "auto",
		padding: "0 2rem",
		borderRadius: "12px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "white",
	}),
	img: (isMobile) => ({
		position: "absolute",
		maxWidth: "100%",
		maxHeight: isMobile ? "80%" : "85%",
		borderRadius: "10px",
	}),
	button: {
		position: "absolute",
		bottom: "2%",
	},
};
