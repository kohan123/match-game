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

export const generateCards = (difficulty) => {
    let countOfPairs = 2;
    if (difficulty === "hard") {
        countOfPairs = 5;
    } else if (difficulty === "medium"){
        countOfPairs = 3;
    } else if (difficulty === "easy") {
        countOfPairs = 2;
    }
    let cards = [];
    for (let i = 0; i < countOfPairs; i++) {
        const imageIndex =  findIndex(0, images.length);
        const cardImage = images[imageIndex];
        const card = {
            image: cardImage,
            backImage: backcard
        }
        cards.push(card)
        cards.push(card)
    }
    return cards;
}