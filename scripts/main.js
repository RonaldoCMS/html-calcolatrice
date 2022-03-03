let total = "0";

function insertValue(value, box) {
   if(isCommand(value, "enter")) {
       let temp = eval(total);
       document.getElementById(box).value = temp;
       total = temp + "";
   }
   else if(isCommand(value, "canc")) {
       total = "";
       document.getElementById(box).value = " ";
   }
   else {
        total += value;
        document.getElementById(box).value = total;
  }
}

function isCommand(box, text) {
    if(box === text ) {
        return true;
    }
    return false;
}