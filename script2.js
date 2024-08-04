let btn = document.getElementById("button");
let text = document.getElementById("text-area");
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
color.value= '#00ffa1';
let color_font = document.getElementById("color-text");
// color_font.value=  '#ffffff';
let message = document.getElementById("message");
let popSound = document.getElementById('popSound');
let pop2Sound = document.getElementById('pop2Sound');

function addNotes(){
    if(text.value===""){
        alert("Please enter some Text");
        return;
    }
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    let dateTime = document.createElement("div");
    let contDiv = document.createElement('div');
    dateTime.textContent = getCurrentDateTime();
    dateTime.style.fontSize = '10px';
    message.innerText="";
    div.appendChild(contDiv);
    contDiv.appendChild(p);
    contDiv.appendChild(cross_btn);
    contDiv.style.cssText=`
    display :flex;
    justify-content: space-between;
    `;
    div.appendChild(dateTime);
    // div.style.display="flex";
    div.style.cssText = `
        display :flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 150px;
        min-height: 150px;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 2px 2px 4px gray;
    `;
    div.style.overflowWrap = 'break-word';

    cross_btn.innerText= 'X';
    cross_btn.style.cssText =`
        width:20px;
        height:20px;
        border: 0px;
        font-weight:800;
    `;
    cross_btn.style.backgroundColor = color.value;
    cross_btn.style.color = color_font.value;
    cross_btn.addEventListener('mouseover', function() {
        cross_btn.style.boxShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)'; 
        cross_btn.style.cursor = 'pointer'; 
    });
    cross_btn.addEventListener('mouseout', function() {
        cross_btn.style.boxShadow = 'none'; 
    });

    p.innerText = text.value;

    div.style.backgroundColor= color.value;
    div.style.color= color_font.value;
    notes_container.appendChild(div);
    notes_container.style.cssText =`
        display:flex;
        gap:20px;
        padding:20px;
    `;
    notes_container.style.flexWrap= 'wrap';
    console.log(div);

    text.value="";
    cross_btn.addEventListener("click",function(){
        div.style.display="none";
        pop2Sound.play();
    });

}


function getCurrentDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

window.onload = function() {
    const bouncingDiv = document.getElementById('bounceDiv');
    bouncingDiv.classList.add('bounce');
}

btn.addEventListener("click",addNotes);
btn.addEventListener('click',function(){
    popSound.play();
})