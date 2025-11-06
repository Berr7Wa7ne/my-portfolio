import profileImage from "../src/assets/images/profile.jpg";
import cbtadminDash from "../src/assets/images/cbtadmin-dashboard.PNG";
import cbtexamPhoto from "../src/assets/images/cbtexam-photo.PNG";
import onlineLibraryDash from "../src/assets/images/onlineLibrary-librarian.PNG";
import onlineLibraryReader from "../src/assets/images/onlineLibrary-reader.PNG";
import FortPhoto from "../src/assets/images/Fort.PNG";
import moverseApp from "../src/assets/images/moverseApp.PNG";

const logotext = "AHAKIRI";
const meta = {
    title: "Ahakiri Cosmas Uke",
    description: "I’m Ahakiri Cosmas Uke Full-stack developer & data scientist specializing in AI-driven solutions and seamless digital experiences.",
};

const introdata = {
    title: "I’m Ahakiri Cosmas Uke",
    animated: {
        first: "Turning ideas into reality",
        second: "Building intelligent solutions",
        third: "Coding with creativity & precision",
    },
    description: "Passionate about full-stack development and data science, I design and build intelligent, scalable, and user-friendly applications. From AI-powered insights to seamless web experiences, I turn complex problems into elegant solutions.",
    your_img_url: profileImage,
};

const dataabout = {
    title: "A Bit About Myself",
    aboutme: "I am a passionate Full-Stack Developer and Data Scientist with expertise in building scalable and intelligent applications. My skills range from frontend development using React.js to backend solutions with Node.js and Prisma ORM. With a strong foundation in PostgreSQL and Python-based AI models, I love solving complex problems and optimizing user experiences.",
};

const worktimeline = [
    {
        jobtitle: "Software Engineering Intern",
        where: "Techvibes Ltd, Abuja",
        date: "August 2024 – February 2025",
    },
    {
        jobtitle: "Frontend Software Developer",
        where: "Sohclick Technology Limited, Jos, Plateau State",
        date: "January 2022 – June 2023",
    },
    {
        jobtitle: "AI/ML Engineer",
        where: "National Centre for Artificial Intelligence and Robotics (NYSC)",
        date: "September 2023 – August 2024",
    },
];


const skills = [
    {
        name: "JavaScript",
        value: 95,  
    },
    {
        name: "TypeScript",
        value: 75,  
    },
    {
        name: "React.js",
        value: 90, 
    },
    {
        name: "Next.js",
        value: 80, 
    },
    {
        name: "Node.js",
        value: 90, 
    },
    {
        name: "PostgreSQL",
        value: 92,
    },
    {
        name: "Prisma ORM",
        value: 88, 
    },
    {
        name: "Postman API Testing",
        value: 95, 
    },

    {
        name: "Python",
        value: 70, 
    },
    {
        name: "Django",
        value: 67,  
    },
    {
        name: "Flask",
        value: 65,  
    },
];


const services = [
    {
        title: "Frontend Development",
        description: "Building responsive and scalable web applications using React.js, JavaScript, HTML, and CSS. Expertise in state management with Redux and Context API.",
    },
    {
        title: "Backend Development",
        description: "Developing robust backend systems with Node.js, Express.js, Prisma ORM, and PostgreSQL. Experience in API development and authentication systems.",
    },
];


const dataportfolio = [{
        img: cbtadminDash,
        description: "A powerful CBT admin panel designed for tertiary institutions to manage exams, monitor student performance, and automate assessment workflows seamlessly.",
        link: "https://cbt-admin-frontend.vercel.app/",
    },
    {
        img: cbtexamPhoto,
        description: "An intuitive and secure CBT platform for students to take exams effortlessly, with a smooth user experience and real-time result processing.",
        link: "https://cbt-student-frontend.vercel.app/",
    },
    {
        img: onlineLibraryDash,
        description: "Manage your digital library with ease—add books, track checkouts, monitor overdue returns, and keep everything organized in one place.",
        link: "https://newonlinelibreria.netlify.app/",
    },
    {
        img: onlineLibraryReader,
        description: "Discover, borrow, and return books seamlessly. Your personal digital library experience, anytime, anywhere",
        link: "https://newonlinelibreria.netlify.app/",
    },
    {
        img: FortPhoto,
        description: "Explore job opportunities with ease—connect with top employers and take the next step in your career with our seamless hiring platform.",
        link: "https://shimmering-salmiakki-a12844.netlify.app/",
    },
    {
        img: moverseApp,
        description: "Moverse Portfolio is a modern tech agency platform built with Next.js and Sanity CMS — showcasing digital services, client projects, and team expertise in branding, web, and mobile development.",
        link: "https://moverse-portfolio.vercel.app/",
    },

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "ahakiricosmas@gmail.com",
    YOUR_PHONE: "+2348108962585",
    description: "Feel free to reach out for collaborations, software development projects, or any inquiries. I'm always open to new opportunities and discussions!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Berr7Wa7ne",
    linkedin: "https://www.linkedin.com/in/ahakiri-uke-444619351/",
    twitter: "https://x.com/CosyBerry18490",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};