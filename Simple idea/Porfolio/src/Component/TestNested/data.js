const data = [
  {
    id: 1,
    title: "Item 1",
    children: [
      {
        id: 11,
        title: "Subitem 1.1",
        children: [
          {
            id: 111,
            title: "Sub-subitem 1.1.1",
            children: [],
          },
          {
            id: 112,
            title: "Sub-subitem 1.1.2",
            children: [],
          },
        ],
      },
      {
        id: 12,
        title: "Subitem 1.2",
        children: [],
      },
    ],
  },
  {
    id: 2,
    title: "Item 2",
    children: [
      {
        id: 21,
        title: "Subitem 2.1",
        children: [],
      },
    ],
  },
];

export default data;
