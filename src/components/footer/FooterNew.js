import "../../App.css";
import "../../index.css";
import React from "react";
import UseMediaQuery from "../commonComponents/UseMediaQuery";
import Github from "../../assets/images/github.svg";
import Facebook from "../../assets/images/facebook.svg";
import Linkedin from "../../assets/images/linkedin.svg";

const iconlist = [
	{ name: Github, href: "https://github.com/TanveerT" },
	{ name: Linkedin, href: "https://www.linkedin.com/in/taahamed/" },
];

function FooterNew() {
	const mobileView = UseMediaQuery("(max-width: 850px)");

	return (
		<div className='genericContainer' style={footer.container(mobileView)}>
			<h2 style={{ textTransform: "lowercase" }}>
				<span style={{ textTransform: "capitalize" }}>I'm</span> always
				up for a chat.
			</h2>
			<h4
				style={{
					marginTop: "5vh",
					fontSize: "1.2rem",
					lineHeight: 1.8,
					textTransform: "lowercase",
				}}>
				<a
					style={{ color: "var(--clr-grey-3)" }}
					href='mailto:tanveer1.mtm@gmail.com'>
					<span style={{ textTransform: "capitalize" }}>Pop</span> me
					an email
				</a>{" "}
				at tanveer1.mtm@gmail.com <br />
				or give me a shout on social media.
			</h4>
			<div style={{ ...footer.iconContainer(mobileView) }}>
				{iconlist.map((icon, index) => {
					return (
						<a
							href={icon.href}
							target='_blank'
							rel='noreferrer'
							style={{ padding: "10px" }}>
							<img src={icon.name} style={{ color: "#red" }} />
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default FooterNew;

const footer = {
	container: (isMobile) => ({
		backgroundColor: "var(--clr-primary-6)",
		color: "var(--clr-primary-9)",
		padding: "25px",
		textAlign: "center",
		borderRadius: "8px",
	}),
	iconContainer: (isMobile) => ({}),
};
