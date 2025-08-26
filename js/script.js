// get Element
function getElement (id){
    const theElement = document.getElementById(id);
    return theElement;
}

// heart count
document.getElementById("all-cards")
.addEventListener("click", function(e){
    let heart = e.target.className.includes("heart")
    if(heart === true){
        const heartCount = Number(getElement("heart-count").innerText);
        const newCount = heartCount + 1;
        getElement("heart-count").innerText = newCount;
    }
})