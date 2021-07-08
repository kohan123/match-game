import backcard from "../assets/card.png";
import penguin from "../assets/penguin.png";
import animal1 from "../assets/animal1.jpg";
import animal2 from "../assets/animal2.jpg";
import animal3 from "../assets/animal3.jpg";
import animal4 from "../assets/animal4.jpg";
import animal5 from "../assets/animal5.jpg";


const images = [penguin,animal1,animal2,animal3,animal4,animal5];
function findIndex(min, max) {
    return Math.floor(Math.random() * max ) + min;
}

const getCountOfPairs = (difficulty) => {
    let countOfPairs = 2;
   switch(difficulty) {
       case "hard":
        countOfPairs = 5;
        break;
        case "medium":
        countOfPairs = 3;
        break;
        case "easy":
        countOfPairs = 2;
        break;
        default:
        countOfPairs = 2;       
   }
   return countOfPairs;
}

export const generateRandomId = () => {
    return Math.floor(Math.random() * 2000);
};

export const generateCards = (difficulty) => {
    let cards = [];
    for (let i = 0; i < getCountOfPairs(difficulty); i++) {
        const imageIndex =  findIndex(0, images.length);
        const cardImage = images[imageIndex];
        const card = {
            image: cardImage,
            backImage: backcard
        }
        cards.push( {...card, id: generateRandomId()} );
        cards.push( {...card, id: generateRandomId()} );
    }
    return cards;
}