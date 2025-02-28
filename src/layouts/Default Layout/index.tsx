import Header from './Header';
// eslint-disable-next-line react/prop-types
type Props = {
  children: React.ReactNode;
};
const DefaultLayout:React.FC<Props> = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
    </div>
  );
};
export default DefaultLayout;
