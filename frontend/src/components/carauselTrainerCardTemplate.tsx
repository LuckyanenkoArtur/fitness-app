// Import SCSS styles
import "./carauselTrainerCardTemplate.scss";

type CarouselTrainerCardTemplateProps = {
  id: number;
  image: string;
  name: string;
  specilization: string;
};

const carouselTrainerCardTemplate = (
  trainer: CarouselTrainerCardTemplateProps
) => {
  return (
    <div className="carousel-card" key={trainer.id}>
      <div className="image-box">
        <img src={trainer.image} alt={trainer.name} width={250} />
      </div>
      <div className="trainer-card">
        <h4>{trainer.name} </h4>
        <h6>{trainer.specilization}</h6>
      </div>
    </div>
  );
};

export default carouselTrainerCardTemplate;
