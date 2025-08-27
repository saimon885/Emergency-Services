// dom seletion
function element(id){
    const ele = document.getElementById(id)
    return ele;
}
// button selection
const buttons = document.getElementsByClassName("button-class");
for(let button of buttons){
    button.addEventListener("click",function(){
        let money = element("Money").innerText;
        // console.log(moneyConvert);
        const servicesName = button.parentNode.parentNode.childNodes[3].innerText;
        const servicesNumber = button.parentNode.parentNode.childNodes[7].innerText;
        const servicesCallingNumber = button.parentNode.parentNode.childNodes[5].innerText;
        // console.log(servicesCallingNumber);
        const historyContainer = element("emptysdiv");
        const time = new Date();
        const currentTime = time.toLocaleTimeString();
        // console.log(currentTime);
        let moneyConvert = Number(money);
        if(moneyConvert >= 20){
            const oddMoney = moneyConvert - 20;
            document.getElementById("Money").innerText = oddMoney;
            alert(`Calling ${servicesCallingNumber}`)
            const histoyOption = document.createElement("div")
            histoyOption.innerHTML = `<div
            class="flex justify-between items-center my-5 bg-[#F5FFF6] p-3 rounded-2xl"
          >
            <div>
              <h1 class="md:text-[11px] font-bold">${servicesName}</h1>
              <p class="text-[#5C5C5C] md:text-[11px]">${servicesNumber}</p>
            </div>
            <div><p class="md:text-[13px]">${currentTime}</p></div>
          </div>`;
            historyContainer.append(histoyOption)
        }
        else{
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে 20 কয়েন লাগবে।")
        }

    })
}

// clear button
document.getElementById("ClearButton").addEventListener("click",function(){
    const historyContainer = element("emptysdiv");
    historyContainer.innerHTML = "";
})
// love section solved
const HeartClass = document.getElementsByClassName("Heart");
for(let heart of HeartClass){
    heart.addEventListener("click",function(){
        const heartNumber = element("heartNumber").innerText;
        const heartNumberConvert = Number(heartNumber);
        // console.log(heartNumberConvert);
        const totalHeart = heartNumberConvert + 1;
        document.getElementById("heartNumber").innerText = totalHeart;
    })
}
