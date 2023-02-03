import GetToKnow from "./base/get-to-know";
import Quote from "./base/quote";

const AboutComponent = () => {
  return (
    <section className="container bg-white mt-5 text-dark" id="about">
      <GetToKnow />
      <Quote />
    </section>
  );
};

export default AboutComponent;
