import Header from './Header';
// eslint-disable-next-line react/prop-types

const DefaultLayout = ({ children, onAboutClick, onContactClick }) => {
  return (
    <div className="App">
      <Header onAboutClick={onAboutClick} onContactClick={onContactClick} />
      <main className="body_content">{children}</main>
    </div>
  );
};
export default DefaultLayout;
