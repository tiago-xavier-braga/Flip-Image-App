var buttonSelect = [];

function selectImage(position){
    let image = document.getElementById(position);

    if(image.style.border != '4px solid blue'){
        image.style.border = '4px solid blue';
        
        buttonSelect.push(position);
    } else{
        image.style.border = 'none';
        
        delete buttonSelect[buttonSelect.indexOf(position)];
    }

    return buttonSelect;
}