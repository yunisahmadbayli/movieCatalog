const input = document.querySelector("input");

const images = [ 
    "batman1.jpg",
    "batman2.jpg",
    "battleship.jpg",
    "godfather1.jpg",
    "godfather2.jpg",
    "godfather3.jpg",
    "inception.jpg",
    "ironman1.jpg",
    "ironman2.jpg",
    "ironman3.jpg",
    "lucy.jpg",
    "matrix1.jpg",
    "matrix2.jpg",
    "matrix3.jpg",
    "matrix4.jpg",
    "memento.jpg",
    "pianist.jpg",
    "prestige.jpg",
    "scarface.jpg",
    "spiderman_nowayhome.jpg",
    "spiderman1.jpg",
    "spiderman2.jpg",
    "spiderman3.jpg",
    "tenet.jpg",
    "transformers1.jpg",
    "transformers2.jpg",
    "vendetta.jpg",
    "venom.jpg"
]

for(i=0 ; i < images.length ; i++){
    
    const imageName = images[i];

    const div = document.createElement("div");
    div.className = "image_box";
    div.dataset.name = imageName.replace(".jpg","");

    const img = document.createElement("img");
    img.src = `images/${imageName}`;

    const h6 = document.createElement("h6");
    h6.textContent = imageName.replace(".jpg","").replace(/(\d+)/, ' $1');

    div.appendChild(img);
    div.appendChild(h6);

    document.getElementById("images").appendChild(div);

}

document.addEventListener("DOMContentLoaded",()=>{

    const imageBoxes = document.querySelectorAll(".image_box");

    input.addEventListener("input",()=>{
        
        const inputValue = input.value.toLowerCase().replace(/\s+/g, "");

        imageBoxes.forEach(box => {
            const boxData = box.dataset.name.toLowerCase().replace(/\s+/g, "");
            box.style.display = boxData.includes(inputValue) ? "block" : 'none';
        })

    })    

})