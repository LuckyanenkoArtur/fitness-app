import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img6 from "../assets/6.jpg";

interface TrainerData {
  id: number;
  name: string;
  image: string;
  specilization: string;
}

const trainers: TrainerData[] = [
  {
    id: 1,
    name: "Блокова Юлия",
    image: img1,
    specilization: "Бокс",
  },
  {
    id: 2,
    name: "Корсупока Анастасия",
    image: img2,
    specilization: "Легкая Аттлектика",
  },
  {
    id: 3,
    name: "Пончиков Владимер",
    image: img3,
    specilization: "Паурлифтинг",
  },
  {
    id: 4,
    name: "Саенко Юлия",
    image: img4,
    specilization: "Фитнес",
  },
  {
    id: 5,
    name: "Саенко Юлия",
    image: img4,
    specilization: "Стречинг",
  },
  {
    id: 6,
    name: "Укроповна Александровна",
    image: img6,
    specilization: "Йога",
  },
];

export default trainers;
