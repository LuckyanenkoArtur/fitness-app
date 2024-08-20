const formatDate = (dateObject: Date = new Date()): string => {
  const day: string = dateObject.getDate().toString();
  const month: number = dateObject.getMonth() + 1;
  const year: string = dateObject.getFullYear().toString();

  const date: string = `${day}.${
    month >= 10 ? month.toString() : "0" + month.toString()
  }.${year}`;
  const time: string = dateObject.toTimeString().slice(0, 9);

  return `${date} ${time}`;
};

export default formatDate;
