const input = document.querySelector(".search-box input"),
      imageBox = document.querySelectorAll(".image-box");

input.addEventListener("keyup" , e => {
    if(e.key == "Enter"){
        let SearchValue = input.value,
        value = SearchValue.toUpperCase();
        imageBox.forEach(image => {
            if(value === image.dataset.name) {
            return image.style.display = "block";
            } 
                image.style.display = "none";
                if(value !== image.dataset.name) {
                    return console.log("SORRY !");
                    } 
        })
    }
})

input.addEventListener("keyup" , () => {
    if(input.value != "") return;
    imageBox.forEach(image =>  {
        image.style.display = "block";
    })
})
