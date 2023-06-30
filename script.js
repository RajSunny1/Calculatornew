
let allButtons = document.getElementsByClassName("button");
console.log(allButtons);

let buttonsArray = Array.from(allButtons);
console.log(buttonsArray.length);
console.log("for Each")
buttonsArray.forEach((divButton) => {
    // console.log(divButton);

    divButton.addEventListener("click", clickHandler)
})


function clickHandler(event) {
    let ioPanel = document.getElementById("ioPanel");
    let iopanelText = ioPanel.innerText;



    let divButtonTarget = event.target
    let divButtonText = divButtonTarget.innerText;
    console.log("click event is called ..." + divButtonTarget);

    if (divButtonText == "CLEAR") {
        ioPanel.innerText = ""

    } else if (divButtonText == "BACKSPACE") {

        let startIndex = 0;
        let endIndex = iopanelText.length - 1;

        let tempValue =iopanelText.substring(startIndex, endIndex);
        console.log(tempValue);
        ioPanel.innerText =tempValue;

            

    } else if (divButtonText == "=") {
        try{
            let result= eval(iopanelText)
            console.log(result);
            ioPanel.innerText=result;

        } catch (eror){
            console.log(eror);
            let errorMessage = "Invalid Expression [" + iopanelText +"]" ;
            ioPanel.innerText= errorMessage;
        }
        
      

    } else {

        let finalText = iopanelText + divButtonText


        ioPanel.innerText = finalText;
    }
}