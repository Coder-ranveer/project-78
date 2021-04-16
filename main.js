var images = ["Family.jpg" ,"me.png", "sister.png", "mom.jpg", "dad.jpg"];
var names = ["Family Book", "Ranveer", "Samaira", "Kashmira", "Virag"];
var i = 0;
function family()
{
    i++;
    var pic = images [i];
    var namme = names [i];
    document.getElementById("family").src= pic;
    console.log(pic);
    document.getElementById("name").innerHTML= namme;
    if (i >= 4)
    {
    i = 0;
    }
}