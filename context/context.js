"use client";
const type = {
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  EXPERIENCEMODAL: "EXPERIENCEMODAL",
  SERVICEMODAL: "SERVICEMODAL",
  PORTFOLIOMODAL: "PORTFOLIOMODAL",
  BLOGMODAL: "BLOGMODAL",
  TESTIMONIALiTEMS: "TESTIMONIALiTEMS",
  ABOUTDATA: "ABOUTDATA",
};
const {
  MODAL,
  SERVICEMODAL,
  PORTFOLIOMODAL,
  BLOGMODAL,
  TESTIMONIALiTEMS,
  ABOUTDATA,
} = type;

import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Service from "@/components/Service";
import { createContext, useCallback, useReducer } from "react";

import dynamic from "next/dynamic";
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});

const context = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case PORTFOLIOMODAL:
      return {
        ...state,
        portfolioModal: payload,
      };
    case BLOGMODAL:
      return {
        ...state,
        blogModal: payload,
      };
    case TESTIMONIALiTEMS:
      return {
        ...state,
        testimonialItems: payload,
      };
    case ABOUTDATA:
      return {
        ...state,
        aboutData: payload,
      };
    default:
      return state;
  }
};

const state = (props) => {
  const initialState = {
    modal: false,
    serviceModal: null,
    portfolioModal: null,
    blogModal: null,
    testimonialItems: 2,
    pageContent: [
      { id: 1, sectionId: "about", component: <AboutMe /> },
      // { id: 2, sectionId: "resume", component: <Resume /> },
      { id: 3, sectionId: "portfolio", component: <Portfolio /> },
      { id: 4, sectionId: "service", component: <Service /> },
      { id: 5, sectionId: "testimonials", component: <Testimonials /> },
      { id: 6, sectionId: "news", component: <Blog /> },
      { id: 7, sectionId: "contact", component: <Contact /> },
    ],
    menus: [
      { id: 0, href: "home", title: "Home", icon: "squares" },
      { id: 1, href: "about", title: "About Me", icon: "archive" },
      { id: 2, href: "news", title: "Portfolio", icon: "briefcase" },
      // { id: 2, href: "resume", title: "Resume", icon: "contacs" },
      // { id: 3, href: "portfolio", title: "Portfolio", icon: "briefcase" },
      { id: 4, href: "service", title: "Skills", icon: "gear" },
      { id: 5, href: "testimonials", title: "Testimonial", icon: "message" },
      { id: 7, href: "contact", title: "Contact", icon: "letter" },
    ],
    aboutData: {
      name: "Jashan Singh",
      img: "/img/about/1.jpg",
      birthday: "August 15, 2002",
      nationality: "American",
      email: "jashan17100@gmail.com",
      phone: "848-247-3445",
      bio: "Hi There! I’m Jashan Singh, a passionate software developer on a journey to create seamless and efficient digital experiences. With a keen eye for detail and a love for problem-solving, I’m on a mission to turn lines of code into innovative solutions. My Toolbox  includes JavaScript, Python, React, Redux, Flask, PostgreSQL, and much more. These are not just technologies for me; they are the building blocks of my digital world. JavaScript is my go-to for crafting dynamic, interactive web applications. Flask empowers me to build robust and scalable backend systems, and Redux is the secret to keep everything well-organized and smooth. I don't just write code: I solve real-world problems. I relish the challenge of identifying issues, dissecting them, and crafting elegant solutions. Beyond the lines of code, I’m fueled by a deep passion for what I do. Every Project I work on, I do so with dedication and commitment to excellence.",
      // address: "20, Bardeshi, Dhaka",
      title: "Software-Engineer",
      // subTitle:
      //   "A passionate UI/UX Designer and Web Developer based In NYC, USA",
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIOMODAL,
      payload: value,
    });
  }, []);
  const setBlogModal = useCallback((value) => {
    dispatch({
      type: BLOGMODAL,
      payload: value,
    });
  }, []);

  const setTestimonialItems = useCallback((value) => {
    dispatch({
      type: TESTIMONIALiTEMS,
      payload: value,
    });
  }, []);

  const setAboutData = useCallback((value) => {
    let aboutData = {
      name: value && value.name ? value.name : state.aboutData.name,
      img: value && value.img ? value.img : state.aboutData.img,
      address: value && value.address ? value.address : state.aboutData.address,
      bio: value && value.bio ? value.bio : state.aboutData.bio,
      birthday:
        value && value.birthday ? value.birthday : state.aboutData.birthday,
      email: value && value.email ? value.email : state.aboutData.email,
      nationality:
        value && value.nationality
          ? value.nationality
          : state.aboutData.nationality,
      phone: value && value.phone ? value.phone : state.aboutData.phone,
      title: value && value.title ? value.title : state.aboutData.title,
    };
    dispatch({
      type: ABOUTDATA,
      payload: value ? aboutData : state.aboutData,
    });
  }, []);

  const {
    modal,
    serviceModal,
    portfolioModal,
    blogModal,
    pageContent,
    testimonialItems,
    menus,
    aboutData,
  } = state;
  return (
    <context.Provider
      value={{
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        portfolioModal,
        setPortfolioModal,
        blogModal,
        setBlogModal,
        pageContent,
        setTestimonialItems,
        testimonialItems,
        menus,
        setAboutData,
        aboutData,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default state;

export { context };
