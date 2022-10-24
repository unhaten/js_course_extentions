// const fetchBtn = document.getElementById("fetch-btn");
// const sentence = document.getElementById("sentence");

// let data = [
//     { player: "Jane", score: 52 },
//     { player: "Mark", score: 41 },
// ];

// fetchBtn.addEventListener("click", function () {
//     console.log(data[0].score);
// });

// let description = "largest countries";
// let array = ["China", "India", "USA"];
// let description2 = "best fruits";
// let array2 = ["Apples", "Bananas"];

// function generateSentence(description, array) {
//     let length = array.length;
//     let string = "";
//     const lastIndex = array.length - 1;
//     for (let i = 0; i < length; i++) {
//         if (i != lastIndex) {
//             string += `${array[i]}, `;
//         } else {
//             string += `${array[i]}`;
//         }
//     }
//     return `The ${length} ${description} are ${string}`;
// }
// console.log(generateSentence(description, array));

const container = document.getElementById("container");

const imgs = [
    "jpg1.png",
    "jpg2.jpg",
    "jpg3.png",
    // 'jpg4.png',
];

function renderPics(images) {
    // let finalPics = "";
    for (let i = 0; i < images.length; i++) {
        // finalPics += images[i];
        container.innerHTML += `<img src="${images[i]}">`;
        // finalPics = "";
        // console.log(container.innerHTML, finalPics);
    }
}

renderPics(imgs);
