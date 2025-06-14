import { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
import './card.scss';
const CardExperience = ({
  icon,
  title,
  details,
  exptitle,
  expyear,
  expdesc,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="card_experience">
      <div className="card_experience_wrapper">
        <div className="card_experience_left">
          <img src={icon} alt={title} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="44"
            viewBox="0 0 112 44"
            fill="none"
          >
            <ellipse
              cx="55.6695"
              cy="21.0382"
              rx="55.6695"
              ry="21.0382"
              transform="matrix(-0.998499 0.0547787 -0.0655311 -0.997851 112.929 39.901)"
              fill="url(#paint0_linear_16_82)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_16_82"
                x1="55.6695"
                y1="0"
                x2="55.6695"
                y2="42.0764"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2C1250" />
                <stop offset="0.197917" stopColor="#2C1250" />
                <stop offset="0.901042" stopColor="#2C1250" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="card_experience_right">
          <h2>{title}</h2>
          <p>{details}</p>
          <button className="button_learn" onClick={handleClick}>
            Learn more
          </button>
          {isOpen && (
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
              <div className="popup_header experience_header">
                <div className="experience_name  d-flex aligns-center justify-content-between">
                  <p>{exptitle}</p>
                  <p className="exp_year">{expyear}</p>
                </div>
                <div className="experience_desc">
                  <p>{expdesc}</p>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};
export default CardExperience;
