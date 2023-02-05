import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			onClick={onClick}
			className='backdrop'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				height: "100%",
				width: "100%",
				backgroundColor: "#000000e1",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			{children}
		</motion.div>
	);
};

export default Backdrop;
