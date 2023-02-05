import ReactLogo from "../../assets/images/reactjs-icon.svg";
import PythonLogo from "../../assets/images/python-icon.svg";
import NodeLogo from "../../assets/images/nodejs-icon.svg";
import ExpressLogo from "../../assets/images/expressjs-icon.svg";
import AzureLogo from "../../assets/images/microsoft_azure-icon.svg";
import GitLogo from "../../assets/images/git-scm-icon.svg";
import Java from "../../assets/images/JAVA.jpeg";
import SQL from "../../assets/images/SQL.jpeg";

const SkillsData = [
	{
		name: "Python",
		description:
			"Python is a programming language that lets you work quickly and integrate systems more effectively.",
		logo: PythonLogo,
		images: [Java, SQL],
	},

	{
		name: "React",
		description: "A JavaScript library for building user interfaces",
		logo: ReactLogo,
		images: [Java, SQL],
	},
	{
		name: "React Native",
		description:
			"A JavaScript library for building native apps for Android, iOS, and more using React",
		logo: ReactLogo,
		images: [Java, SQL],
	},
	{
		name: "Node",
		description: "As an asynchronous event-driven JavaScript runtime",
		logo: NodeLogo,
		images: [Java, SQL],
	},
	{
		name: "Express",
		description:
			"Fast, unopinionated, minimalist web framework for Node.js",
		logo: ExpressLogo,
		images: [Java, SQL],
	},
	{
		name: "Azure",
		description:
			"The Azure cloud platform is cloud services designed to help Build, run and manage applications across multiple clouds, on-premises and at the edge",
		logo: AzureLogo,
		images: [Java, SQL],
	},
	{
		name: "Git",
		description:
			"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency",
		logo: GitLogo,
		images: [Java, SQL],
	},
];

export default SkillsData;
