
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

/***  Ablaufsteuerung | Control */  
// 5. Modul Ablaufsteuerung | Test:
// controller()
function controller() {
  output(updateImg(checkAge(getInput()))) 
}

// 5a. Trigger - BtnClick 
const btn = document.getElementById("trigBtn");
btn.addEventListener("click",actOnClick);

// 5b. Event-Dispatcher
function actOnClick() {
    controller();
}


/***  Eingabe | Check auf Datenintegrität */  

//4. Definiton : Eingabefeld
const field = document.getElementsByName("eingabe")[0];

//4a. Modul: Eingabe
function getInput() {
    return parseInt(field.value);
}

// 4b. Trigger-Input
field.addEventListener("input",isInputValid);

// 4c. Check auf korrekte Eingaben ...
function isInputValid() {
   
    let inputStr = field.value;
    let cond = false; //???

    if (!cond) {
        field.value = "";
        updateImg(data.default.bev);
    }
   
    return true;
}





/***  Business-Logic */ 
//3. Modul: Business-Logic (Mapping) | Test:
// output(checkAge(2));
// output(checkAge(7));
// output(checkAge(13));
// output(checkAge(18));
// output(checkAge(99));
// output(checkAge(135));
function checkAge(age) {
    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper) :
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper) :
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper) :
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper) :
            return data.wine.bev;
        default:
            return data.default.bev;           
    }
}

/*** View-Schicht aktualisieren */ 
//2. Modul: Bild aktualisieren | Test:
// output(updateImg("cola"));
// output(updateImg("milch"));
// output(updateImg("wein"));
function updateImg(imgName) {
    const img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;
}

//1. Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}