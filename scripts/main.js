let totale = "";

function insertNumber(value, box) {
   
   if(isText(value, "invio")) {
       let temp = eval(totale);
       document.getElementById(box).value = temp;
       totale = temp + "";
   }
   else if(isText(value, "canc")) {
       totale = " ";
       document.getElementById(box).value = " ";
   }
   else {
        totale += value;
        document.getElementById(box).value = totale;
  }
}

function isText(box, text) {
    if(box === text ) {
        return true;
    }
    return false;
}