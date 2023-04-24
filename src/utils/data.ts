export type DataType =
  | "crypto"
  | "indexes"
  | "stocks"
  | "commodities"
  | "forex";

export interface DummyProps {
  id: string;
  name: string;
  img: string;
  type: DataType;
}

export const dummyData: DummyProps[] = [
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Ethereum",
    img: "/assets/img/eth.png",
    type: "crypto",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Avalanche",
    img: "/assets/img/avax.png",
    type: "indexes",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Cardano",
    img: "/assets/img/ada.png",
    type: "stocks",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Chainlink",
    img: "/assets/img/link.png",
    type: "commodities",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Algorand",
    img: "/assets/img/algo.png",
    type: "forex",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Ethereum",
    img: "/assets/img/eth.png",
    type: "crypto",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Avalanche",
    img: "/assets/img/avax.png",
    type: "indexes",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Cardano",
    img: "/assets/img/ada.png",
    type: "stocks",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Chainlink",
    img: "/assets/img/link.png",
    type: "commodities",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Algorand",
    img: "/assets/img/algo.png",
    type: "forex",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Ethereum",
    img: "/assets/img/eth.png",
    type: "crypto",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Avalanche",
    img: "/assets/img/avax.png",
    type: "indexes",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Cardano",
    img: "/assets/img/ada.png",
    type: "stocks",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Chainlink",
    img: "/assets/img/link.png",
    type: "commodities",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Algorand",
    img: "/assets/img/algo.png",
    type: "forex",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Ethereum",
    img: "/assets/img/eth.png",
    type: "crypto",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Avalanche",
    img: "/assets/img/avax.png",
    type: "indexes",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Cardano",
    img: "/assets/img/ada.png",
    type: "stocks",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Chainlink",
    img: "/assets/img/link.png",
    type: "commodities",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Algorand",
    img: "/assets/img/algo.png",
    type: "forex",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Ethereum",
    img: "/assets/img/eth.png",
    type: "crypto",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Avalanche",
    img: "/assets/img/avax.png",
    type: "indexes",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Cardano",
    img: "/assets/img/ada.png",
    type: "stocks",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Chainlink",
    img: "/assets/img/link.png",
    type: "commodities",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    name: "Algorand",
    img: "/assets/img/algo.png",
    type: "forex",
  },
];
