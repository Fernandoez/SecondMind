//Realiza a inserção do "Leia Mais" nos link de serviços

let link = []
for(var i=0; i<6; i++){
    link[i] = document.getElementById('a'+ i);

}

link[0].onmouseover = function(){
    var newText = document.createElement('strong');
    var setText = document.createTextNode('Leia Mais');
    newText.style.color = '#FF7033';
    newText.appendChild(setText);
    link[0].appendChild(newText);
    link[0].onmouseout = function(){
        link[0].removeChild(newText);
    }
}

link[1].onmouseover = function(){
    var newText = document.createElement('strong');
    var setText = document.createTextNode('Leia Mais');
    newText.style.color = '#FF7033';
    newText.appendChild(setText);
    link[1].appendChild(newText);
    link[1].onmouseout = function(){
        link[1].removeChild(newText);
    }
}
link[2].onmouseover = function(){
    var newText = document.createElement('strong');
    var setText = document.createTextNode('Leia Mais');
    newText.style.color = '#FF7033';
    newText.appendChild(setText);
    link[2].appendChild(newText);
    link[2].onmouseout = function(){
        link[2].removeChild(newText);
    }
}
link[3].onmouseover = function(){
    var newText = document.createElement('strong');
    var setText = document.createTextNode('Leia Mais');
    newText.style.color = '#FF7033';
    newText.appendChild(setText);
    link[3].appendChild(newText);
    link[3].onmouseout = function(){
        link[3].removeChild(newText);
    }
}

link[4].onmouseover = function(){
    var newText = document.createElement('strong');
    var setText = document.createTextNode('Leia Mais');
    newText.style.color = '#FF7033';
    newText.appendChild(setText);
    link[4].appendChild(newText);
    link[4].onmouseout = function(){
        link[4].removeChild(newText);
    }
}
link[5].onmouseover = function(){
    var newText = document.createElement('strong');
    var setText = document.createTextNode('Leia Mais');
    newText.style.color = '#FF7033';
    newText.appendChild(setText);
    link[5].appendChild(newText);
    link[5].onmouseout = function(){
        link[5].removeChild(newText);
    }
}