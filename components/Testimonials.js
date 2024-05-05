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
                  The design is elegant. The customer support on this product is
                  also amazing. I would highly recommend you to purchase
                  templates from the Marketify team!
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
                  Not only was customer support very fast, but the design is
                  very professional. Will definitely be looking for new products
                  in the future from this author.
                </p>
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
        </Swiper>
        <div className="owl-dots" />
      </div>
    </div>
  );
};
export default Testimonials;
