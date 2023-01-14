const selectElement=document.getElementById("seleccion");
const tarjeta= document.querySelectorAll("li");

selectElement.addEventListener('change', (event) => {
    switch (event.target.value) {
        case "1":
            location.reload();
            break;
        case "2":
            for (let i = 0; i < 10; i++) {
                if (tarjeta[i].value % 2 === 0) {
                    tarjeta[i].style.color = "crimson";
                } else {
                    tarjeta[i].style.color = "black";
                    tarjeta[i].style.background = "none";
                }
            }
            break;
        case "3":
            for (let i = 0; i < 10; i++) {
                if (tarjeta[i].value % 2 !== 0) {
                    tarjeta[i].style.background = "crimson";
                } else {
                    tarjeta[i].style.color = "black";
                }
            }
            break;
        default:
            document.getElementById("durazno").style.color = "black";
            break;
    }
});