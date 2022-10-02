var buttonSelect = [];
function selectImage(position){
    let image = document.getElementById(position);

    if(image.style.border != '2px solid blue'){
        image.style.border = '2px solid blue';
        
        buttonSelect.push(position);
    } else{
        image.style.border = 'none';
        
        delete buttonSelect[buttonSelect.indexOf(position)];
    }

    return buttonSelect;
}

function keyEvent(event) {
    var key = event.keyCode || event.which;
    var keychar = String.fromCharCode(key);
    if(key == 37){
        buttonSelect.forEach(element => {
            document.getElementById(element).style = "transition: 1s;transform: scaleX(-1);"; 
        });
    }
    if(key == 38){
        //up
        buttonSelect.forEach(element => {
            document.getElementById(element).style = "transition: 1s;transform: scaleY(1);"; 
        });
    }
    if(key == 39){
        //right
        buttonSelect.forEach(element => {
            document.getElementById(element).style = "transition: 1s;transform: scaleX(1);"; 
        });
    }
    if(key == 40){
        //down
        buttonSelect.forEach(element => {
            document.getElementById(element).style = "transition: 1s;transform: scaleY(-1);"; 
        });
    }
}