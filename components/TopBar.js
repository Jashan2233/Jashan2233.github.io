import SocialIcons from "./SocialIcons";

const TopBar = ({ topbarIcon = true, darkLogo = true }) => {
  return (
    <div className="iknow_tm_topbar" data-position="absolute">
      <div className="container">
        <div className="topbar_inner">
          <div className="logo">
            <a href="#">
              {darkLogo ? (
                <img src="/img/logo/dark.png" alt="logo" />
              ) : (
                <img src="/img/logo/light.png" alt="logo" />
              )}
            </a>
          </div>
          <div className="right">
            {topbarIcon && <SocialIcons />}
            <div className="iknow_tm_button">
              <a
                href="https://docs.google.com/document/d/13jG--kSf8RacsVGGXzFOLq_Fn1Vgj4rI1QciUEZY7bM/edit?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
