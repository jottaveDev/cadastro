import sideImage from '../assets/side-image.png';
import Form from './Form';
import './Main.css';

const Main = () => {
  return (
    <main>
      <section className="main-form">
        <Form />
      </section>
      <section className="main-img">
        <img src={sideImage} alt="" />
      </section>
    </main>
  );
};

export default Main;
