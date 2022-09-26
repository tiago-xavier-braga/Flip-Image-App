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
function flipImage(){
    document.getElementById('1x1img').style = "transform: scaleX(-1);";
}