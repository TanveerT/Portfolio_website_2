import Infosys from "../../assets/images/infosys.svg";
import Isro from "../../assets/images/isro.svg";
import Limendo from "../../assets/images/limendo.svg";

const experience = [
	{
		name: "Limendo",
		CompanyDetails: "Limendo, Bangalore, India",
		title: "Software Developer",
		duration: "June,2022 - Present",
		teckStack: ["React", "React Native", "Node", "Gen AI", "Python"],
		aboutlist: [
			"Designed and developed the frontend of the Kassa (POS) application. Implemented key features including cart management, combo flow and complete order process flow.",
			"Focused on creating an intuitive and efficient UI to streamline retail operations and enhance end-user satisfaction.",
			"Designed and developed a module in Yodalytics enabling AI-powered ad generation, allowing users to quickly create customized ad pop-ups.",
			"Enhanced user experience by integrating AI automation and reducing ad creation time by 50%",
			"Developed and integrated a payment module using Stripe to facilitate seamless transactions within the Mytoni platform.",
		],
		logo: Limendo,
	},
	{
		name: "Infosys",
		CompanyDetails: "Infosys, Hyderabad, India",
		title: "System Engineer",
		duration: "Nov,2020 - June,2022",
		teckStack: ["React", "Azure", "ADF", "Node"],
		aboutlist: [
			"Developed a React-based data analysis dashboard for Kraft Heinz, enabling CRUD operations on warehouse data",
			"Responsible for gathering requirements from the client Kraft Heinz and Analyzing the huge amount of data for sales domain.",
			"Collaborated with cross-functional teams to analyse large datasets in the sales domain using Snowflake and Azure ADF, driving data-driven decision-making",
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
			"Contributed to under developing project Geo Processing work bench",
			"Developed a React-based console for geo-spatial data visualization, enabling users to perform analytical operations efficiently.",
			"Optimized map loading time by 30% by building a tile-generating server in Django",
			"Implemented few frequently used functionality with high performance",
		],
		logo: Isro,
	},
];

export default experience;
