import Mountain from "./models/Mountain";

const mountains: Mountain[] = [
  {
    mountainName: "Kilimanjaro",
    mountainHeight: 19341,
  },
  {
    mountainName: "Everest",
    mountainHeight: 29029,
  },
  {
    mountainName: "Denali",
    mountainHeight: 20310,
  },
];

const findNameOfTallestMountain = (array: Mountain[]): Mountain | "" => {
  if (array.length) {
    let tallestMountain: Mountain = array[0];
    array.forEach((item) => {
      if (item.mountainHeight > tallestMountain.mountainHeight) {
        tallestMountain = item;
      }
    });
    return tallestMountain;
  } else {
    return "";
  }
};

findNameOfTallestMountain(mountains);
