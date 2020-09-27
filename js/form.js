//Realiza o controle de aparecer os formulários nas pagenas de "Leia Mais"

var button = document.getElementById('contact-button');
var form = document.getElementById('make-contact');
var closeButton = document.getElementById('close-button');

button.onclick = function(){
    form.style.display = 'block';
}

closeButton.onclick = function(){
    form.style.display = 'none';
}