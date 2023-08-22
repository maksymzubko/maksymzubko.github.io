import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    react,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    aestar, nestjs, postgres, mui, php, quickly, toxic, shinchacku, telegram, github, upwork, threadhub,
} from "@assets/index.ts";

export const navLinks: INavlinks[] = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services: IServices[] = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies: ITechnologies[] = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "Nest.js",
        icon: nestjs,
    },
    {
        name: "PostgreSQL",
        icon: postgres,
    },
    {
        name: "MUI",
        icon: mui,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: react,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences: IExperiences[] = [
    {
        title: "Javascript Junior",
        company_name: "Freelance UA",
        icon: null,
        iconBg: "#383E56",
        date: "Sep 2021 - Feb 2022",
        points: [
            "Learning the basics of Javascript in practice.",
            "Implementation of the first commercial products with further support.",
            "Development of AR applications.",
            "Landing page layout.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "AEstAR",
        icon: aestar,
        iconBg: "#383E56",
        date: "Feb 2022 - Jun 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Development of AR applications, using 8thwall (Three.js, Babylon.js, ARframe)."
        ],
    },
    {
        title: "Fullstack JS developer",
        company_name: "AEstAR",
        icon: aestar,
        iconBg: "#383E56",
        date: "Jun 2022 - Present",
        points: [
            "Developing and maintaining fullstack applications using React.js, Nest.js, Websockets and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing REST API applications their implementation in projects and further maintenance",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const socials = [
    {
        icon: telegram,
        link: "https://t.me/maksimzubko",
        name: "telegram"
    },
    {
        icon: github,
        link: "https://github.com/s1maxx",
        name: "github"
    },
    {
        icon: upwork,
        link: "https://www.upwork.com/freelancers/~019fcdc12751f48814",
        name: "upwork"
    }
]

const projects: IProjects[] = [
    {
        name: "Toxic Thought Experiment",
        description:
            "Gametoxic - a game that is designed for 18+ audience, to play with friends. the essence of the game is to guess the answers of the host, who did not guess - drinks alcohol. The game is supported on the computer, as well as on the phone. Implemented with PWA.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
            {
                name: "react-router",
                color: "pink-text-gradient",
            },
            {
                name: "socket.io",
                color: "green-text-gradient",
            },
            {
                name: "nest.js",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        link: "https://stable.aestar.com.ua/game-toxic/lobby",
        image: toxic,
        source_code_link: "https://github.com/s1maxx/game-toxic-thought-experiment",
    },
    {
        name: "QuicklySummary",
        description:
            "QuicklySummary - a project that allows the user to upload a txt, mp3, mp4 file, further converting it to the desired type, which allows you to interact with chatgpt and ask him questions about the content from the file.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
            {
                name: "nest.js",
                color: "pink-text-gradient",
            },
            {
                name: "api",
                color: "orange-text-gradient",
            },
            {
                name: "chatgpt",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: quickly,
        link: "https://stable.aestar.com.ua/quicklysummary",
        source_code_link: "https://github.com/s1maxx/quicklysummary-react",
    },
    {
        name: "Shinchacku",
        description:
            "My first e-commerce project related to the sale of comics and things.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "orange-text-gradient",
            },
            {
                name: "jquery",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
        ],
        image: shinchacku,
        link: null,
        source_code_link: null,
    },
    {
        name: "ThreadHub",
        description:
            "ThreadHub is a fullstack web application that serves as both a tech demo and a digital analog to traditional threads. It empowers users to create posts, engage through likes, views, and foster communities, showcasing the synergy of frontend and backend technologies in an environment that mirrors traditional threaded discussions.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongobb",
                color: "green-text-gradient",
            },
            {
                name: "next-router",
                color: "pink-text-gradient",
            },
            {
                name: "webhooks",
                color: "green-text-gradient",
            },
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "clerk",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        link: "https://threads-analog.vercel.app/",
        image: threadhub,
        source_code_link: null,
    },
];

export interface IServices {
    title: string;
    icon: any;
}

export interface ITechnologies {
    name: string;
    icon: any;
}

export interface INavlinks {
    id: string;
    title: string;
}

export interface IExperiences {
    title: string,
    company_name: string,
    icon: any,
    iconBg: string,
    date: string,
    points: string[]
}

export interface IProjects {
    name: string;
    description: string;
    tags: { name: string; color: string }[]
    image: any,
    link: string,
    source_code_link: string;
}

export {
    services,
    technologies,
    experiences,
    projects,
    socials
};
