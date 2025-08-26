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

// copy button functionality
document.getElementById("all-cards")
.addEventListener("click", function(e){
    const copyBtn = e.target.className.includes("copy-btn")
    if(copyBtn === true){
        
        const copyCount = Number(getElement("copy-count").innerText);
        const copyText = getElement("copy-btn-id").parentNode.parentNode.childNodes[7].innerText
        navigator.clipboard.writeText(copyText);
        const newCopyCount = copyCount + 1;
        getElement("copy-count").innerText = newCopyCount;
        alert(`Contact Number copied ${copyText}`);
    }
})