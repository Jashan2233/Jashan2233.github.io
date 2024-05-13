import { context } from "@/context/context";
import { useContext } from "react";

const AboutMe = () => {
  const { aboutData } = useContext(context);
  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <img src="/img/hero/1.png" alt="image" />
            <div className="main" data-img-url={aboutData.img} />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Full Name</h3>
                <span>{aboutData.name}</span>
              </li>
              <li>
                <h3>Birthday</h3>
                <span>{aboutData.birthday}</span>
              </li>
              <li>
                <h3>Email</h3>
                <span>{aboutData.email}</span>
              </li>
              <li>
                <h3>Cell</h3>
                <span>{aboutData.phone}</span>
              </li>
              {/* <li>
                <h3>Address</h3>
                <span>{aboutData.address}</span>
              </li> */}
              <li>
                <h3>Nationality</h3>
                <span>{aboutData.nationality}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="iknow_tm_main_title">
          <span>About Me</span>
          <h3>{aboutData.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{aboutData.subTitle}</p>
        </div>
        <div className="text">
          <p>{aboutData.bio}</p>
        </div>
        <div className="iknow_tm_button">
          <a href="https://docs.google.com/document/d/13jG--kSf8RacsVGGXzFOLq_Fn1Vgj4rI1QciUEZY7bM/edit?usp=sharing">
            SEE MY RESUME
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
