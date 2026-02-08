import profileImage from "../src/assets/images/profile.jpg";
import cbtadminDash from "../src/assets/images/cbtadmin-dashboard.PNG";
import cbtexamPhoto from "../src/assets/images/cbtexam-photo.PNG";
import wellnessApp from "../src/assets/images/wellnessApp.PNG";
import moverseAgent from "../src/assets/images/moverseAgent.jpeg";
import FortPhoto from "../src/assets/images/Fort.PNG";
import moverseApp from "../src/assets/images/moverseApp.PNG";
import sasesApp from "../src/assets/images/sasesApp.PNG";
import trxApp from "../src/assets/images/trx-image.PNG"
import QPlus from "../src/assets/images/Q+.png"
import Qpay from "../src/assets/images/Qpay.png"


const logotext = "/profile-logo.png";
const meta = {
  title: "Uke Cosmas",
  description:
    "I’m Uke Cosmas, a full-stack developer who builds reliable web platforms with React, Next.js, Node.js, and modern databases like PostgreSQL and MongoDB. I focus on creating clear APIs, well-structured systems, and practical user experiences across real-world products. I turn complex problems into elegant solutions.",
};

const introdata = {
  title: "I’m Uke Cosmas",
  animated: {
    first: "Turning ideas into working products",
    second: "Building systems that solve real problems",
    third: "Writing code with purpose and clarity",
  },
  description:
    "Passionate about full-stack development, I build reliable web platforms with React, Next.js, Node.js, and modern databases like PostgreSQL and MongoDB. I focus on creating clear APIs, well-structured systems, and practical user experiences across real-world products. I turn complex problems into elegant solutions.",
  your_img_url: profileImage,
};

const dataabout = {
  title: "A Bit About Myself",
  aboutme:
    "I’m a full-stack developer focused on building reliable web platforms with React, Next.js, Node.js, and modern databases like PostgreSQL and MongoDB. I work on creating clear APIs and well-structured systems that support real product workflows. I enjoy solving complex problems and turning them into simple, effective solutions.",
};


const worktimeline = [
    {
        jobtitle: "Software Developer",
        where: "Techvibes Ltd, Abuja - Nigeria",
        date: "Mar 2024 – Nov 2025", 
    },
    {
        jobtitle: "Software Developer – AI-Driven Systems",
        where: "National Centre for Artificial Intelligence and Robotics, Abuja - Nigeria",
        date: "Feb 2023 – Feb 2024",
    },
    {
        jobtitle: "Frontend Developer (Internship)",
        where: "Sohclick Technology Limited, Jos, Plateau State - Nigeria",
        date: "Aug 2022 – Jan 2023",
    },
];


const skills = [
    {
        name: "JavaScript",
        value: 95,  
    },
    {
        name: "TypeScript",
        value: 90,  
    },
    {
        name: "React.js",
        value: 90, 
    },
    {
        name: "Next.js",
        value: 90, 
    },
        {
        name: "Tailwind CSS",
        value: 95, 
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
        name: "MongoDB",
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
];


const services = [
  {
    title: "Frontend Development",
    description:
      "Building user interfaces that are clear, responsive, and aligned with real product workflows. I focus on structuring frontend systems that are easy to maintain, extend, and integrate with backend services.",
  },
  {
    title: "Backend Development",
    description:
      "Developing APIs and backend systems that support real business logic and data flows. I design database structures, API contracts, and service layers that ensure reliability, consistency, and smooth communication between system components.",
  },
];



const dataportfolio = [
    {
        img: trxApp,
        description: "TRX is a multi-role fintech platform designed to support buyer, seller, financier, and administrative workflows, with modules spanning onboarding, wallets, invoicing, dashboards, and transaction management.",
        link: "https://trx-platform-two.vercel.app/login",
    },

    {
        img: QPlus,
        description: "QampusPlus is a School Management Solution that automates all school administrative processes. Qampusplus is a user friendly and highly efficient application!",
        link: "https://qampusplusapp.com",
    },

    {
        img: Qpay,
        description: "QampusPay is a secure and reliable payment solution built specifically for schools and parents. Whether you're collecting tuition, hostel fees, or any other school payments.",
        link: "https://qampuspay.com/",
    },

    {
        img: moverseApp,
        description: "Moverse Portfolio is a modern tech agency platform built with Next.js and Sanity CMS — showcasing digital services, client projects, and team expertise in branding, web, and mobile development.",
        link: "https://moverse-portfolio.vercel.app/",
    },

    {
        img: moverseAgent,
        description: "A WhatsApp-first agent console for Moverse Technologies, enabling internal agents to manage real-time customer conversations via Supabase-powered messaging and a WhatsApp Business API integration.",
        link: "https://moverse-agent.vercel.app/",
    },

    {
        img: wellnessApp,
        description: "Wellness & Spiritual Healing platform offering empowering videos, holistic services, and handcrafted spiritual products — all managed via a custom-built admin panel.",
        link: "https://wellness-application.vercel.app/",
    },

    {
        img: FortPhoto,
        description: "Explore job opportunities with ease—connect with top employers and take the next step in your career with our seamless hiring platform.",
        link: "https://shimmering-salmiakki-a12844.netlify.app/",
    },

    {
        img: sasesApp,
        description: "A responsive real estate landing page designed to highlight houses for rent and lease in a clean, user-focused layout.",
        link: "https://sases-app.vercel.app/",
    },

    {
        img: cbtadminDash,
        description: "A powerful CBT admin panel designed for tertiary institutions to manage exams, monitor student performance, and automate assessment workflows seamlessly.",
        link: "https://cbt-admin-frontend.vercel.app/",
    },

    {
        img: cbtexamPhoto,
        description: "An intuitive and secure CBT platform for students to take exams effortlessly, with a smooth user experience and real-time result processing.",
        link: "https://cbt-student-frontend.vercel.app/",
    },

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