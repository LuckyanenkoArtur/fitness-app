interface StateData {
  id: number;
  name: string;
}

const states: StateData[] = [
  { name: "Отменено", id: 1 },
  { name: "Выполено", id: 2 },
  { name: "Текущие", id: 3 },
  { name: "Все", id: 3 },
];

export default states;
