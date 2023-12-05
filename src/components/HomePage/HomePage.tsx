import '../../assets/styles/header.scss';
import { Books, Footer, Header } from '../index';

const HomePage = () => {
  return (
    <>
      <Header/>
      <main>
        <Books/>
      </main>
      <Footer/>
    </>
  );
}

export { HomePage };

