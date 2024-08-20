interface WorkoutCardData {
  id: number;
  title: string;
  trainer: string;
  duration: string;
  image: string;
}

import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img6 from "../assets/6.jpg";

const data: WorkoutCardData[] = [
  {
    id: 1,
    title: "Фитнес",
    trainer: "Саенко Юлия",
    duration: "1 час и 30 минут",
    image: img1,
  },
];

export default data;
