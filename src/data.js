import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import EricCartman from "./images/EricCartman.webp";
import KennyMcCormick from "./images/KennyMcCormick.webp";
import KyleBroflovski from "./images/KyleBroflovski.webp";
import StanMarsh from "./images/StanMarsh.webp";
import ButtersStotch from "./images/ButtersStotch.webp";
import ClydeDonovan from "./images/ClydeDonovan.webp";
import CraigTucker from "./images/CraigTucker.webp";
import TweekTweak from "./images/TweekTweak.webp";
import JimmyValmer from "./images/JimmyValmer.webp";
import TimmyBurch from "./images/TimmyBurch.webp";
import TokenBlack from "./images/TokenBlack.webp";
import ScottMalkinson from "./images/ScottMalkinson.webp";
import HeidiTurner from "./images/HeidiTurner.webp";
import WendyTestaburger from "./images/WendyTestaburger.webp";
import BebeStevens from "./images/BebeStevens.webp";
import RedMcArthur from "./images/RedMcArthur.webp";

const images = [
  EricCartman,
  KennyMcCormick,
  KyleBroflovski,
  StanMarsh,
  ButtersStotch,
  ClydeDonovan,
  CraigTucker,
  TweekTweak,
  JimmyValmer,
  TimmyBurch,
  TokenBlack,
  ScottMalkinson,
  HeidiTurner,
  WendyTestaburger,
  BebeStevens,
  RedMcArthur,
];
function getCorrectName(str) {
  let subString = str.substring(str.lastIndexOf("/") + 1, str.lastIndexOf("."));
  subString = subString.replace(/([A-Z])/g, " $1").trim();

  return subString.split("-")[0];
}
const cardsData = [];
for (let i = 0; i < images.length; i++) {
  const name = getCorrectName(images[i]);
  cardsData.push({
    id: uuidv4(),
    num: i + 1,
    isClicked: false,
    image: images[i],
    alt: `${name} from South Park`,
    name: name,
  });
}

export default cardsData;
