import { useRef } from 'react';
const useScrollToSection = () => {
  const sectionRef = useRef(null);
  const scrollTo = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return [sectionRef, scrollTo];
};
export default useScrollToSection;
