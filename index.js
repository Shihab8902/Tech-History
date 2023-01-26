// Top history section card collapse handle

// Variables
let topCardCounter = 0;
//Element selection
let topCardCollapseLinkOne = document.getElementById("cardCollapseLink1");
let topCardCollapseLinkTwo = document.getElementById("cardCollapseLink2");
let topCardCollapseLinkThree = document.getElementById("cardCollapseLink3");
let topCardCollapseLinkFour = document.getElementById("cardCollapseLink4");
//Top card collapse handler
const topCardCollapseHandler = (topCardCollapseElement)=>{
    topCardCounter++;
    if(topCardCounter == 1){
        topCardCollapseElement.innerHTML = "Show less";
    }else if(topCardCounter == 2){
        topCardCollapseElement.innerHTML = "Continue Reading...";
        topCardCounter = 0;
    }
};
//Adding event listener
topCardCollapseLinkOne.addEventListener("click", ()=>{
    topCardCollapseHandler(topCardCollapseLinkOne);
});
topCardCollapseLinkTwo.addEventListener("click", ()=>{
    topCardCollapseHandler(topCardCollapseLinkTwo);
});
topCardCollapseLinkThree.addEventListener("click", ()=>{
    topCardCollapseHandler(topCardCollapseLinkThree);
});
topCardCollapseLinkFour.addEventListener("click", ()=>{
    topCardCollapseHandler(topCardCollapseLinkFour);
});


//Developer pop up open close

//Element selection
const authorButton = document.getElementById("authorButton");
const closeButton = document.getElementById("closeButton");
const popUpBox = document.getElementById("popUpBox");
//Adding event listeners
authorButton.addEventListener("click", ()=>{
    popUpBox.style.display = "flex";
});
closeButton.addEventListener("click", ()=>{
    popUpBox.style.display = "none";
});


//Search logic

//Items
const searchableItems = ["camera", "internet", "barcode", "playstation", "airplane", "electric", "telegraph", "telephone"];
//Element selection
const inputField = document.getElementById("searchField");
const searchButton = document.getElementById("searchBtn");
//Adding Event Listeners
searchButton.addEventListener("click", ()=>{
    let userInput = inputField.value;
    console.log(userInput);
})


