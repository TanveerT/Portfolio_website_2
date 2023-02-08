import ReactLogo from "../../assets/images/reactjs-icon.svg";
import PythonLogo from "../../assets/images/python-icon.svg";
import NodeLogo from "../../assets/images/nodejs-icon.svg";
import ExpressLogo from "../../assets/images/expressjs-icon.svg";
import AzureLogo from "../../assets/images/microsoft_azure-icon.svg";
import GitLogo from "../../assets/images/git-scm-icon.svg";
import SQL from "../../assets/images/SQL.jpeg";
import Infy from "../../assets/images/INFYCERT.jpeg";
import Python from "../../assets/images/HACK-RANK.png";
import React from "../../assets/images/reactMeta_1.jpg";
import Networking from "../../assets/images/NETWORKING.jpeg";
import ReactNative1 from "../../assets/images/ReactNative_1.jpg";
import ReactNative2 from "../../assets/images/ReactNative_2.jpg";
import Node from "../../assets/images/NODE.jpeg";
import Express from "../../assets/images/EXPRESS.jpeg";
import AZ from "../../assets/images/AZ-900.jpeg";
import DP from "../../assets/images/DP-900.jpeg";
import AI from "../../assets/images/AI-900.jpeg";
import GIT from "../../assets/images/GIT_01.jpg";
import Django from "../../assets/images/Django.jpg";

const SkillsData = [
	{
		name: "Python",
		description:
			"Python is a programming language that lets you work quickly and integrate systems more effectively.",
		logo: PythonLogo,
		images: [Infy, Python, SQL],
	},

	{
		name: "React",
		description: "A JavaScript library for building user interfaces",
		logo: ReactLogo,
		images: [React, Networking],
	},
	{
		name: "React Native",
		description:
			"A JavaScript library for building native apps for Android, iOS, and more using React",
		logo: ReactLogo,
		images: [ReactNative1, ReactNative2],
	},
	{
		name: "Node",
		description: "As an asynchronous event-driven JavaScript runtime",
		logo: NodeLogo,
		images: [Node, Django],
	},
	{
		name: "Express",
		description:
			"Fast, unopinionated, minimalist web framework for Node.js",
		logo: ExpressLogo,
		images: [Express, Node],
	},
	{
		name: "Azure",
		description:
			"The Azure cloud platform is cloud services designed to help Build, run and manage applications across multiple clouds, on-premises and at the edge",
		logo: AzureLogo,
		images: [AZ, DP, AI],
	},
	{
		name: "Git",
		description:
			"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency",
		logo: GitLogo,
		images: [GIT],
	},
];

export default SkillsData;
