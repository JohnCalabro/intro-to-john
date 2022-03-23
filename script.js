//const h2 = document.createElement("h2");
//h2.textContent = "This content added by JavaScript";

//document.querySelector("body").appendChild(h2);

function addingEventListener() {
    const John = document.getElementById('John');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    John.addEventListener('click', clickAlert);
}