import Infosys from "../../assets/images/infosys.svg";
import Isro from "../../assets/images/isro.svg";
import Limendo from "../../assets/images/limendo.svg";

const experience = [
	{
		name: "Limendo",
		CompanyDetails: "Limendo, Bangalore, India",
		title: "Software Engineer",
		duration: "June,2022 - Present",
		teckStack: ["React", "React Native", "Node"],
		aboutlist: [
			"Designed, Developed, built point of sales mobile app for both iOS and Android devices using React Native",
			"Created Scalable code, performed quality assurance testing and deliver technical solutions for bugs",
			"Experience in working with React Redux and RTK queries and setting up from scratch",
			"Let a team of 3 engineers to build voucher widget. A JavaScript base tool which can be integrated in any hotel website to buy voucher ",
		],
		logo: Limendo,
	},
	{
		name: "Infosys",
		CompanyDetails: "Infosys, Hyderabad, India",
		title: "System Engineer",
		duration: "Nov,2020 - June,2022",
		teckStack: ["React", "Azure", "ADF", "DBT", "Node"],
		aboutlist: [
			"Developed a data analysis dashboard using React, Node where client can perform CRED operation on the warehouse data",
			"Responsible for gathering requirements from the client Kraft Heinz and Analyzing the huge amount of data for sales domain.",
			"Designed SQL model for the given requirement. ",
			"Automated the process of ETL over Azure Data Factory",
			"Transformation logic is build using DBT",
		],
		logo: Infosys,
	},
	{
		name: "ISRO",
		CompanyDetails: "Space Application Center, Ahmedabad, Gujarat",
		title: "Full Stack Intern",
		duration: "Dec,2019 - Mar,2020",
		teckStack: ["React", "Django"],
		aboutlist: [
			"Contributed to underline project Geo processing workbench",
			"Developed web-based console using React Js to allow user to visualize and perform analytical operation on geo special data. ",
			"Build tiles generating server in Django to server geo special data which has improve the map loading time by 30%.",
			"Implemented few frequently used functionality with high performance",
		],
		logo: Isro,
	},
];

export default experience;
