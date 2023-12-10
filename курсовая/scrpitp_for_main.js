let cat = ["catalogue_images/chocolad_catalogue.jpg",
"catalogue_images/marmelad_catalogue.jpg", 
"catalogue_images/conditer_catalogue.jpg", 
"catalogue_images/foreign_catalogue.jpg"]
let classnames = ["chocolad", "marmelad", "cond", "foreign"]
let cataloguePages = ["chocolad_catalogue.html", "marmelad_catalogue.html", "cake_catalogue.html", "foreign_catalogue.html"]
let s = 0;
let i = 0;
let k = 0;

let imgElement = document.getElementById('img');
let catalogue = document.getElementsByClassName('cat');

// Добавляем обработчик события нажатия на кнопку

function ChangeCatImgRight(){
    // Устанавливаем новый текст в поле content
    if (k != classnames.length - 1){
        k++;
    }
    else{
        k = 0;
    }
    if (s != cataloguePages.length - 1){
        s++;
    }
    else{
        s = 0;
    }
    imgElement.href = cataloguePages[s];
    imgElement.className = classnames[k];
    if (document.getElementById("first_img").src.indexOf(cat[i]) >= 0){
        if (i != cat.length - 1){
            document.getElementById("first_img").src = cat[i + 1];
            i++;
        }
        else{
            document.getElementById("first_img").src = cat[0];
            i = 0;
        }
    }
}

function ChangeCatImgLeft(){
    if (k != 0){
        k--;
    }
    else{
        k = classnames.length - 1;
    }
    if (s != 0){
        s--;
    }
    else{
        s = cataloguePages.length - 1;
    }
    imgElement.className = classnames[k];
    imgElement.href = cataloguePages[s];
    if (document.getElementById("first_img").src.indexOf(cat[i]) >= 0){
        if (i != 0){
            document.getElementById("first_img").src = cat[i - 1];
            i--;
        }
        else{
            document.getElementById("first_img").src = cat[cat.length - 1];
            i = cat.length - 1;
        }
    }
}
