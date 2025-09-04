const params = new URLSearchParams(window.location.search);
const petName = params.get("pet");

const petInput = document.getElementById("pet");

if(petName && petInput){
  petInput.value = petName
}