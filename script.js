const inputList = document.getElementById("inputList");
const listContainer = document.getElementById("list-Container");
function addTask(){
    if(inputList.value === ''){
        alert("You Must Have To Add Task To Add In The List..."); // agar list khali h tb add btn click krega to alert krega
    }else{
        let li = document.createElement("li"); // ek list bnaoo
        li.innerHTML = inputList.value;  // us list me input ka jo v value add krega uske barabar list hoga
        listContainer.appendChild(li); // phir  list container me us input.value wale nye add kie hui list ko add krdo

        let span = document.createElement("span");  // ek span tag bnao 
        span.innerHTML = "\u00d7";// us span tag me \u00d7 code se x (cross) aata h , usko us span tag me rakh do
        li.appendChild(span); // phir list se us span tag ko jod do...
    }

    inputList.value = ""; // add hone ke baad input field automatic khali krna h
    saveData();// save data function ko call kie h taki page refresh v ho jaye tb  v data show kre...
}

listContainer.addEventListener("click" , function(e){  // listcontainer pr ek eventlistner lgaya h taki jb v koi click kre to ek function pass kre e naam se
    if(e.target.tagName === "LI"){ // agar koi jb v e.target tagname li pr click kre tb
        e.target.classList.toggle("checked");// usko toggle krdo checked mark se
        saveData();                          // save data function ko call kie h taki page refresh v ho jaye tb  v data show kre...
    }else if(e.target.tagName === "SPAN"){   //agar koi jb v e.target tagname span pr click kre tb
        e.target.parentElement.remove();     // to uska parent list ko hta do
        saveData();                         //save data function ko call kie h taki page refresh v ho jaye tb  v data show kre...
    }
} , false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML); // saving the data , preventing lost after refreshing and storing the data in localstaorage
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // call data to show after closing the window , the data will save in localstorage
}
showTask();  // jb v window close ho tb data lost na ho , jb phir se khule tb ye function showtask ko call kre or purana data show krega....