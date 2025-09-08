const number =  document.getElementById("number");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

count = 0;


button1.onclick = function() {
    console.log("Button1 clicked")
    count--;
    number.textContent = count;
}


button2.onclick = function() {
    console.log("Button1 clicked")
    count   =0;
    number.textContent = count;
}

    
button3.onclick = function() {
    console.log("Button1 clicked")
    count++;
    number.textContent = count;
}