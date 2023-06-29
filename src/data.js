import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const cardsData = [];
for (let i = 0; i < 16; i++) {
  cardsData.push({ id: uuidv4(), num: i + 1, clickTime: 0 });
}

export default cardsData;
