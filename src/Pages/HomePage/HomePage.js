import Footer from '../../Components/Footer/Footer';
import Carousel from './Components/Carousel/Carousel';
import ContactUs from './Components/ContactUs/ContactUs';
import GetStartedBlock from './Components/GetStartedBlock/GetStartedBlock';
import ParrotSection from './Components/ParrotSection/ParrotSection';
import TeamBlock from './Components/TeamBlock/TeamBlock';

const HomePage = () => {
  return (
    <div>
      <ParrotSection />
      <TeamBlock />
      <GetStartedBlock />
      <ContactUs />
      <Carousel />
      <Footer />
    </div>
  );
};
export default HomePage;
