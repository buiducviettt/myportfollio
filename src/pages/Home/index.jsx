import Images from '../../assets/image/Images';
import { Typewriter } from 'react-simple-typewriter';
import DefaultLayout from '../../layouts/Default Layout';
import '../styles/Home.scss';
import CardExperience from '../../components/CardExperience';
import Icon from '../../components/Icon';
import ProjectItems from '../../components/ProjectItems';
import Footer from '../../layouts/Default Layout/Footer';
import useScrollToSection from '../../hooks/useScrollToSection';
const Home = () => {
  const [aboutRef, scrollToAbout] = useScrollToSection();
  const [contactRef, scrollToContact] = useScrollToSection();
  return (
    <DefaultLayout
      onAboutClick={scrollToAbout}
      onContactClick={scrollToContact}
    >
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
          <div
            className="sec_gap intro_details"
            data-aos="fade-up"
            ref={aboutRef}
          >
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
                      exptitle="FrontEnd Web Developer"
                      expyear="7/2022-5/2023"
                      expdesc="We aim to optimize the user interface by simplifying the layout, improving responsiveness across all devices, and enhancing loading speed and image quality to deliver a smooth and modern browsing experience. The shopping flow will be upgraded to reduce friction by minimizing the number of steps required to complete a purchase, allowing one-click checkout for returning customers, and supporting guest checkout without account creation. Real-time stock updates, clear display of shipping costs, delivery times, and promotions will help customers make faster purchasing decisions. Additionally, we will implement smart utilities such as personalized product recommendations, live chat support, wishlist functionality, and user-generated reviews and ratings to boost trust and engagement. Notifications for price drops or low-stock alerts will encourage timely purchases. Overall, the goal is to create a fast, intuitive, and seamless shopping experience that helps users buy efficiently with minimal effort."
                      icon={Images.icon1}
                      title="Buymed Company Limited"
                      details="Optimize the user interface for the website and adjust and upgrade the shopping flow as well as utilities for buyers to buy as quickly as possible."
                    />
                  </div>
                  <div className="col col-md-6">
                    <CardExperience
                      exptitle="Product Owner"
                      expyear="5/2023-Present"
                      expdesc="Website Project Management


Collect customer requirements to kick-off the project.



Draw wireframes, flow of functions to ensure the team understands and does it correctly.



Manage the project timeline to ensure timely website delivery.



Collect customer feedback and clarify, discuss with internal team."
                      icon={Images.icon2}
                      title="MONA MEDIA Company"
                      details="Manage website from the stage of receiving requirements until producing a complete website that meets customer needs and ensures not to exceed budget."
                    />
                  </div>
                  <div className="col col-md-6">
                    <CardExperience
                      exptitle="Operation Head Office"
                      expyear="5/2023-9/2023"
                      expdesc="We aim to optimize the dashboard to provide a comprehensive and intuitive interface for administrators and center managers to monitor, analyze, and manage all student-related activities across affiliated learning centers. The improved dashboard will offer detailed insights into key performance indicators (KPIs) such as student attendance, engagement levels, assignment completion, class participation, and learning outcomes. By visualizing data through charts, tables, and heatmaps, it will enable stakeholders to quickly identify trends, patterns, and anomalies in student behavior.

In addition, the dashboard will include advanced tools to support intelligent class scheduling, helping affiliated centers arrange class times, allocate teachers, and manage classroom resources efficiently based on availability, subject requirements, and student needs.

One of the primary focuses is also to identify the underlying causes of student dropouts, disengagement, or academic underperformance. By analyzing behavioral and performance data, as well as collecting feedback from both students and teachers, the system will highlight problem areas and suggest data-driven interventions. Similarly, patterns related to teacher absenteeism, low performance, or scheduling conflicts will be tracked to support better resource planning and workforce management.

The ultimate goal is to turn raw data into actionable insights, allowing education providers to make informed decisions, enhance learning outcomes, increase student and teacher satisfaction, and maintain operational excellence across all affiliated centers."
                      icon={Images.icon3}
                      title="Mindx Technology School"
                      details="Optimize dashboard to analyze student activities, arrange classes for affiliated centers. Find out the causes of students and teachers to find solutions."
                    />
                  </div>
                  <div className="col col-md-6">
                    <CardExperience
                      exptitle="Project Manager"
                      expyear="10/2022-5/2023"
                      expdesc="Business AnalystProject name: Nutrishare- Cooking support application
Number of members: 5.
Platform: Mobile application.
Collect requirements from stakeholders.
Write end user user stories.
Draw usecase diagrams of functions.
Draw activity diagrams of functions.
Draw mockups to briefly describe the app.
Build ERD.
Write BRD, SRS documents.
"
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
              desc=" A modern online store for showcasing and selling fashion items, allowing users to browse collections, view product details, and make secure purchases."
              images={Images.ecom}
              reverse={true}
              link="https://buiducvietecomweb.netlify.app/"
            />
            <ProjectItems
              dataAos="fade-in"
              className="project_item"
              title="E-learning Website"
              desc=" A digital learning platform offering online courses, interactive exercises, and progress tracking to help users study efficiently and practice various subjects."
              images={Images.elearn}
              reverse={false}
              link="https://elearnwebbyviet.netlify.app/"
            />
            <ProjectItems
              dataAos="fade-in"
              className="project_item"
              title="Company Introduction Website"
              desc=" A corporate website designed to present a traditional silk business, highlighting its history, production process, and high-quality silk products."
              images={Images.truongphuc}
              reverse={true}
              link="https://truongphuc.netlify.app/"
            />
            <ProjectItems
              dataAos="fade-in"
              className="project_item"
              title="Food App Management"
              desc=" A web-based application for managing food orders, menus, inventory, and delivery, aimed at streamlining operations for restaurants or food services."
              images={Images.foodapp}
              reverse={false}
              link="https://ducvietfoodapp.netlify.app/"
            />
          </div>
          <footer
            className="sec_gap footer"
            data-aos="fade-up"
            ref={contactRef}
          >
            <Footer />
          </footer>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
