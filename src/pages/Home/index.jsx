import Images from '../../assets/image/Images';
import { Typewriter } from 'react-simple-typewriter';
import DefaultLayout from '../../layouts/Default Layout';
import '../styles/Home.scss';
import CardExperience from '../../components/CardExperience';
import Icon from '../../components/Icon';
import ProjectItems from '../../components/ProjectItems';
import Footer from '../../layouts/Default Layout/Footer';
const Home = () => {
  return (
    <DefaultLayout>
      <div className="home_page">
        <div className="container">
          <div className="sec_gap short_intro">
            <div
              className="icon_wrapper position-relative"
              data-aos="fade-left"
            >
              <div className="arrow_icon position-absolute">
                <img src={Images.arrow} alt="" />
              </div>
              <p className="hello">
                Hello! I am{' '}
                <span
                  className="name purple_text"
                  style={{ fontWeight: 'bold' }}
                >
                  Bùi Đức Việt
                </span>
              </p>
            </div>
            <div className="short_intro_content d-flex" data-aos="fade-right">
              <div className="avatar_left">
                <img style={{ borderRadius: '50%' }} src={Images.avt} alt="" />
              </div>
              <div className="content_right">
                <p>I used to be a Front-End Website Developer who</p>
                <h1>
                  Judges a book <br /> by its{' '}
                  <span className="slogan_decor purple_text">cover</span>
                  ...
                </h1>
                <p>Because if the cover does not impress you what else can?</p>
              </div>
            </div>
          </div>
          <div className="sec_gap intro_details" data-aos="fade-up">
            <div className="intro_details_title">
              <h1>
                <Typewriter
                  words={["I'm a Product Owner."]}
                  loop={1} // chỉ chạy 1 lần
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={0} // không xóa
                  delaySpeed={1000000} // delay dài để tránh xóa
                />
              </h1>
              <p>Currently, I'm working at MONA MEDIA Company </p>
            </div>
            <div className="intro_details_desc">
              <p>
                I am a Product Owner with a passion for creating innovative
                digital products. My journey began as a Front-End Developer,
                where I honed my skills in web development and user experience.
                Now, I lead cross-functional teams to deliver exceptional
                products that meet user needs and drive business success.
              </p>
            </div>
          </div>
          <div className="sec_gap work_experience" data-aos="fade-up">
            <h1>Work Experience</h1>
            <div className="work_experience_lists">
              <div className="container">
                <div className="row g-5">
                  <div className="col col-md-6">
                    <CardExperience
                      icon={Images.icon1}
                      title="Buymed Company Limited"
                      details="Optimize the user interface for the website and adjust and upgrade the shopping flow as well as utilities for buyers to buy as quickly as possible."
                    />
                  </div>
                  <div className="col col-md-6">
                    <CardExperience
                      icon={Images.icon2}
                      title="MONA MEDIA Company"
                      details="Manage website from the stage of receiving requirements until producing a complete website that meets customer needs and ensures not to exceed budget."
                    />
                  </div>
                  <div className="col col-md-6">
                    <CardExperience
                      icon={Images.icon3}
                      title="Mindx Technology School"
                      details="Optimize dashboard to analyze student activities, arrange classes for affiliated centers. Find out the causes of students and teachers to find solutions."
                    />
                  </div>
                  <div className="col col-md-6">
                    <CardExperience
                      icon={Images.icon4}
                      title="UEH University"
                      details="Join startup teams to sell F&B software, Elearning and sample websites to strengthen sales skills and workflow of those software and websites."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec_gap technology" data-aos="fade-up">
            <div
              className="technology_wrapper d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
            >
              <p>
                I'm currently looking to join a cross-functional team that
                values improving people's lives through accessible design{' '}
              </p>
              <div className="technology_content" data-aos="fade-up">
                <div className="technology_icons d-flex justify-content-center align-items-center gap-4">
                  <Icon image={Images.reacticon} />
                  <Icon image={Images.figma} />
                  <Icon image={Images.node} />
                  <Icon image={Images.js} />
                  <Icon image={Images.css} />
                </div>
                <div className="skills_circle" data-aos="fade-up">
                  <img src={Images.skills} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="sec_gap featured_projects" data-aos="fade-up">
            <ProjectItems
              dataAos="fade-in"
              className="project_item"
              title="Eccomerce website"
              desc=" A web app for visualizing personalized Spotify data. View your
top artists, top tracks, recently played tracks, and detailed audio
information about each track. Create and save new playlists of
recommended tracks based on your existing playlists and more."
              images={Images.ecom}
              reverse={true}
              link="https://buiducvietecomweb.netlify.app/"
            />
            <ProjectItems
              dataAos="fade-in"
              className="project_item"
              title="E-learning Website"
              desc=" A web app for visualizing personalized Spotify data. View your
top artists, top tracks, recently played tracks, and detailed audio
information about each track. Create and save new playlists of
recommended tracks based on your existing playlists and more."
              images={Images.elearn}
              reverse={false}
              link="https://elearnwebbyviet.netlify.app/"
            />
          </div>
          <footer className="sec_gap footer" data-aos="fade-up">
            <Footer />
          </footer>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
