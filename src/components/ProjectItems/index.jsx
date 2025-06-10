import './projectItems.scss';
const ProjectItems = ({ title, desc, images, reverse = false, className }) => {
  return (
    <div className={`featured_project_item ${className}`}>
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
