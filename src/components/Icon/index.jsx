import './icon.scss';
const Icon = ({ image }) => {
  return (
    <div className="icon_img">
      <img src={image} alt="icon" />
    </div>
  );
};
export default Icon;
