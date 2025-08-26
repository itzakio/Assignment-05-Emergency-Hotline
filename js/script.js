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
        const copyText = e.target.parentNode.parentNode.childNodes[1].innerText;
        console.log(copyText);
        navigator.clipboard.writeText(copyText);
        const newCopyCount = copyCount + 1;
        getElement("copy-count").innerText = newCopyCount;
        alert(`Contact Number copied - ${copyText}`);
    }
})

// call button functionality
document.getElementById("all-cards")
.addEventListener("click", function(e){
    const cardImg = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].childNodes[1].src;
    const cardTitle = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
    const cardContact = e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const time = new Date().toLocaleTimeString()
    const historyContainer = getElement("call-history-container")

    const callBtn = e.target.className.includes("call-btn")
    if(callBtn === true){
        const coins = Number(getElement("coins").innerText);
        if (coins < 20){
            alert("You do not have enough coins to call")
        }
        else{
            // calling functionality 
            const newCoinCount = coins - 20;
            getElement("coins").innerText = newCoinCount;
            alert(`📞 Calling ${cardTitle} - ${cardContact}`)
            
            // history functionality
            
            const div = document.createElement("div");
            div.innerHTML = `
                 <div class="p-4 rounded-lg bg-gray-100 space-y-2 mb-2">
                    <div class="flex justify-between">
                        <h3 class="text-lg font-semibold">${cardTitle}</h3>
                        <div class="size-8 bg-red-100 flex justify-center items-center rounded-md">
                            <img class="size-4 " src="${cardImg}" alt="">
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-gray-500">${cardContact}</p>
                        <p>${time}</p>
                    </div>
                </div>
            `
            historyContainer.appendChild(div);
        }
        
    }
})

// clear history tab functionality
document.getElementById("clear-btn")
.addEventListener("click", function(){
    getElement("call-history-container").innerText = "";
})