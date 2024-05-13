"use client";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { useContext, useEffect } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const Testimonials = () => {
  const { testimonialItems } = useContext(context);

  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: testimonialItems, spaceBetween: 25 },
    },
  };
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
  }, []);

  return (
    <div className="iknow_tm_testimonials">
      <div className="iknow_tm_main_title">
        <span>Testimonials</span>
        <h3>What people say about me</h3>
      </div>
      <div
        className={`testimonials_list owl-theme ${
          testimonialItems == 1 ? "no-sadow" : ""
        }`}
      >
        <Swiper {...props}>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                  These people really know what they are doing! Great customer
                  support availability and supperb kindness. I am very happy
                  that I've purchased this liscense!!!
                </p>
              </div>
              <div className="details">
                <div className="left">
                  <div className="avatar">
                    <div
                      className="main"
                      data-img-url="/img/testimonials/1.jpg"
                    />
                  </div>
                  <div className="info">
                    <h3>Xavier Guzman</h3>
                    <span>'Biscord Project Team Member'</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    className="svg"
                    src="/img/svg/left-quote.svg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                  Chris Stucke goes here
                </p>
              </div>
              <div className="details">
                <div className="left">
                  <div className="avatar">
                    <div
                      className="main"
                      data-img-url="/img/testimonials/2.jpg"
                    />
                  </div>
                  <div className="info">
                    <h3>Chris Stucke</h3>
                    <span>Backend Developer</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    className="svg"
                    src="/img/svg/left-quote.svg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                Working with Jashan Singh on our Discord clone project was an absolute pleasure. Jashan's exceptional software engineering skills were evident throughout the entire collaboration, as he consistently demonstrated a deep understanding of the project requirements and implemented innovative solutions with precision. His dedication, collaborative spirit, and ability to troubleshoot challenges efficiently made our development process seamless, resulting in a high-quality Discord clone that exceeded our expectations.
                </p>
                <div className="contact-discord">
                <p>To contact, please use Discord: MyNamesOriginal#0564</p>
                </div>
              </div>
              <div className="details">
                <div className="left">
                  <div className="avatar">
                    <div
                      className="main"
                      data-img-url="/img/testimonials/3.jpg"
                    />
                  </div>
                  <div className="info">
                    <h3>Jimmy Juarez</h3>
                    <span>'Biscord (Discord Clone) Project Team Member'</span>

                  </div>
                </div>
                <div className="right">
                  <img
                    className="svg"
                    src="/img/svg/left-quote.svg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="owl-dots" />
      </div>
    </div>
  );
};
export default Testimonials;
