import GetToKnow from "./base/get-to-know";
import Quote from "./base/quote";
import TheTeam from "./base/the-team";
import Gallery from "./base/gallery";

const AboutComponent = () => {
  return (
    <section className="container bg-white mt-5 px-3 px-lg-4 text-dark" id="about">
      <GetToKnow />
      <Quote />
      <TheTeam />
      <Gallery />
    </section>
  );
};

export default AboutComponent;
