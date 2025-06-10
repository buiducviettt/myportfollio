import './projectItems.scss';
import { Link } from 'react-router-dom';
const ProjectItems = ({
  title,
  desc,
  images,
  reverse = false,
  className,
  dataAos,
  link,
}) => {
  return (
    <div className={`featured_project_item ${className}`} data-aos={dataAos}>
      <div className="container">
        <div className="row">
          {reverse ? (
            <>
              <div className="col col-md-6 featured_project_item_right">
                <div className="title">
                  <p style={{ color: '#9857D3' }}>Featured Project</p>
                  <h2>{title}</h2>
                </div>
                <div className="desc">
                  <div className="wrapper">
                    <p>{desc}</p>
                    <Link style={{ color: 'white' }} to={link} target="_blank">
                      Here is the link
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col col-md-6 featured_project_item_left">
                <div className="projects_img ">
                  <img className="project_img" src={images} alt="" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col col-md-6 featured_project_item_left">
                <div className="projects_img ">
                  <img className="project_img" src={images} alt="" />
                </div>
              </div>
              <div className="col col-md-6 featured_project_item_right">
                <div className="title title_reverse">
                  <p style={{ color: '#9857D3' }}>Featured Project</p>
                  <h2>{title}</h2>
                </div>
                <div className="desc desc_reverse">
                  <div className="wrapper">
                    <p>{desc}</p>
                    <Link target="_blank" style={{ color: 'white' }} to={link}>
                      Here is the link
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectItems;
