// import images
// import Hero_person from "./assets/images/Hero/person.png";
import Hero_person from "./assets/images/Hero/person2.png";

import figma from "./assets/images/Skills/figma.png";

import services_logo8 from "./assets/images/Services/aftereffects.png";
import services_logo1 from "./assets/images/Services/maya.png";
import services_logo6 from "./assets/images/Services/Photoshop.png";
import services_logo7 from "./assets/images/Services/premierpro.png";
import services_logo5 from "./assets/images/Services/pt_appicon_noshadow_512.png";
import services_logo4 from "./assets/images/Services/Quixel_Suite.png";
import services_logo3 from "./assets/images/Services/Unreal-symbol.png";
import services_logo2 from "./assets/images/Services/v-ray-product-22.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { BiUser } from "react-icons/bi";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from 'react-icons/fa'
import { GrMail } from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "3D Animator",
    firstName: "Sadhan ",
    LastName: "Kirtonia",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in 3D Animator",
      },
      {
        count: "2+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "MY TOP SKILLS",
    // subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "3D Animation",
        // para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "3D Character Animation",
        // para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "3D Enverionment Desing",
        // para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      // {
      //   name: "Animation",
      //   para: "Lorem ipsum text  dummy",
      //   logo: figma,
      // },
      // {
      //   name: "3D Modeling",
      //   para: "Lorem ipsum text  dummy",
      //   logo: figma,
      // },
      // {
      //   name: "Texturing",
      //   para: "Lorem ipsum text  dummy",
      //   logo: figma,
      // },
      {
        name: "3D Lighting",
        // para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "3D Rendering ",
        // para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "3D Visualization",
        // para: "Lorem ipsum text  dummy",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: " SOFTWARE PROFICIENCY ",
    // subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Autodesk Maya",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "V-Ray",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Unreal Engine",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "Quixel Suite",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo4,
      },
      {
        title: "Substance 3D Painter ",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo5,
      },
      {
        title: "Adobe Photoshop",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo6,
      },
      {
        title: "Adobe Premiere Pro",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo7,
      },
      {
        title: "Adobe After Effects",
        // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo8,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: Hero_person,
    project_content: [
      {
        title: "Gym Animation",
        image: project1,
      },
      {
        title: "Social Animation",
        image: project2,
      },
      {
        title: "Creative Animation",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hero_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sadhankirtonia98@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "01799739432",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/sadhan_kirtonia98/",
      },
      {
        text: "Facebook",
        icon: FaFacebookSquare,
        link: "https://www.facebook.com/sadhankirtonia98",
      },
      {
        text: "Linkedin",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/sadhan-kirtonia/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
