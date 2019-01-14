var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryItem = document.getElementById("inventoryItem");
var inventory = {"phone": false};
var inventory = {"sleutel": false};
var gameContainer = document.getElementById("gameContainer");

start();
function start(){
    gameContainer.style.backgroundImage = "url(img/homeChina.jpg)";
    gameContainer.className ="gameContainer0";
    description.innerHTML= "Klik op start om te beginnen";   
    description.style.color = "white";
    title.innerHTML = "Je moet een dag overlven in china. Je heb geen geld en een telefoon";
    inventoryItem.style.display = "none";
    button1.innerHTML = "start";
    button1.onclick = level1;
    button2.style.display = "none";
    button3.style.display = "none";
}

function level1(){
    gameContainer.style.backgroundImage = "url(img/level-1.jpg)";
    description.innerHTML= "Klik op de onderstaande buttons"; 
    title.innerHTML = "Je moet naar peking maar je heb geen geld hoe ga je der naar toe.";
    button1.innerHTML = "Lopen naar peking";
    button1.onclick = level2;
    button2.innerHTML = " met Openbaar Vervoer naar Peking";
    button2.onclick = level3;
    button3.innerHTML = "auto stelen om naar peking te gaan";
    button3.onclick = StartPrison;
    button2.style.display = "inline";
    button3.style.display = "inline";
    title.style.color = "yellow";  
    title.style.display ="block";
    inventoryItem.style.display = "none"; 
}

function level2(){
    gameContainer.style.backgroundImage = "url(img/level-2-lopen.jpg)";
    description.innerHTML= "Klik op de onderstaande buttons";  
    title.innerHTML = "Je ziet onderweg naar peking een winkeltje wordt overvallen wat ga je doen.";
    button1.innerHTML = "politie bellen";
    button1.onclick = needPhone;
    button2.innerHTML = "de overvallers tegen werken";
    button2.onclick = overvallers;
    button2.style.display = "inline";
    button3.style.display = "none";
    title.style.color = "black";
    title.style.display ="block";
    inventoryItem.style.display  = "inline";
    document.getElementById("inventoryItem").src = "img/telefoon.png";  
    inventoryItem.onclick = pickUpPhone;
    if(inventory['phone'] != true) {
        button1.onclick = overvallers;
    }   
        else (inventory['phone'] != false) 
         button1.onclick = needPhone;
         }


function pickUpPhone(){
    alert("je heb de telefoon gevonden");
    inventoryItem.style.display = 'none';
    inventory['phone']=true;
    if(inventory['phone'] != null) {
        description.innerHTML = 'Je hebt de telefoon gevonden';
        button1.onclick = level3;
    }
}

function needPhone(){
    alert("je heb een telefoon nodig");
}

function overvallers(){
    gameContainer.style.backgroundImage = "url(img/level-2-dood.jpg)";
    description.innerHTML= "Klik op opnieuw als je opnieuw wilt beginnen";  
    title.innerHTML = "De overvallers hebben je gezien en schoten je dood.";
    button1.innerHTML = "Opnieuw";
    button1.onclick = start;
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.color = "white";
    title.style.display ="block";
    inventoryItem.style.display = "none";
}

function level3(){
    gameContainer.style.backgroundImage = "url(img/level-3.jpg)";
    title.innerHTML = "Je heb honger wat ga je doen?.";
    button1.innerHTML = "Eten stelen van restaurant";
    button1.onclick = StartPrison;
    button2.innerHTML = "Je gaat restjes eten wat overgebleven is";
    button2.onclick = level4;
    button3.innerHTML = "Gratis eten fixen van mensen";
    button3.onclick = hongersnood;
    button2.style.display = "inline";
    button3.style.display = "inline";
    title.style.color = "white";
    inventoryItem.style.display = "none";
}

function hongersnood(){
    gameContainer.style.backgroundImage = "url(img/level-2-dood.jpg)";
    description.innerHTML= "Klik op opnieuw als je opnieuw wilt beginnen";  
    title.innerHTML = "Niemand wou je gratis eten geven dus je sterft van de honger.";
    button1.innerHTML = "Opnieuw";
    button1.onclick = start;
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.color = "white";
    title.style.display ="block";
    inventoryItem.style.display = "none";
}

function level4(){
    gameContainer.style.backgroundImage = "url(img/level-4.jpg)";
    description.innerHTML= "Klik op opnieuw als je opnieuw wilt beginnen";  
    title.innerHTML = "het is laat en je moet gaan slapen, wat ga je doen.";
    button1.innerHTML = " op straat slapen";
    button1.onclick = StartPrison;
    button2.innerHTML = "Bij onbekende mensen slapen";
    button2.onclick = dood;
    button3.innerHTML = "gratis hotel fixen";
    button3.onclick = final;
    button2.style.display = "inline";
    button3.style.display = "inline";
    title.style.color = "red";
    inventoryItem.style.display = "none";
}

function dood(){
    gameContainer.style.backgroundImage = "url(img/level-2-dood.jpg)";
    description.innerHTML= "Klik op opnieuw als je opnieuw wilt beginnen bij level1";  
    title.innerHTML = "Bij wie je wou overnachten had verkeerde bedoelingen en heeft je vermoord.";
    button1.innerHTML = "Opnieuw";
    button1.onclick = start;
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.color = "white";
    title.style.display ="block";
    inventoryItem.style.display = "none";
}

function final(){
    gameContainer.style.backgroundImage = "url(img/final.jpg)";
    description.innerHTML= "Klik op opnieuw als je opnieuw wilt beginnen bij level1";  
    title.innerHTML = "Je heb gewonnen. Je heb een dag overleeft in china.";
    button1.innerHTML = "Opnieuw";
    button1.onclick = level1;
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.color = "white";
    title.style.display ="block";
    inventoryItem.style.display = "none";
}

function StartPrison(){
    gameContainer.style.backgroundImage = "url(img/prisonStart.jpg)";
    description.innerHTML= "Klik op start om te beginnen";  
    title.innerHTML = "Je heb iets ilegaals gedaan en daarom ben je opgepakt. Je krijgt een gevangenisstraf van 5jaar.";
    button1.innerHTML = "start";
    button1.onclick = prisonLevel1;
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.color = "red";
    title.style.display ="block";
    inventoryItem.style.display = "none";
}

function prisonLevel1(){
    gameContainer.style.backgroundImage = "url(img/level1.jpg)";
    description.innerHTML= "Klik op start om te beginnen";  
    title.innerHTML = "Je voelt je niet veilig in de gevangenis wat ga je doen om veilig te voelen.";
    button1.innerHTML = " bij een gang aan sluiten";
    button1.onclick = prisonLevel2;
    button2.innerHTML = "bij politie aangeven";
    button2.onclick = prisonAangeven;
    button3.innerHTML = "wapen zoeken om je zelf te verdedigen";
    button3.onclick = wapenZoeken;
    button2.style.display = "inline";
    button3.style.display = "inline";
    title.style.color = "white";
    inventoryItem.style.display = "none";
}

function prisonAangeven(){
    gameContainer.style.backgroundImage = "url(img/level1-aangeven.jpg)";
    description.innerHTML= "Klik op start om opniew te beginnen";  
    title.innerHTML = "De politie kan je niet helpen met je probleem.";
    button1.innerHTML = "opnieuw";
    button1.onclick = StartPrison;
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.color = "red";
    title.style.display ="block";
    inventoryItem.style.display = "none";
}

function wapenZoeken(){
    gameContainer.style.backgroundImage = "url(img/wc.jpg)";  
    title.innerHTML = "Er is hier geen wapen maar wel een sleutel die je later nodig heb.";
    button1.innerHTML = "terug";
    button1.onclick = prisonLevel1;
    button2.style.display = "none";
    button3.style.display = "none";
    title.style.color = "red";
    title.style.display ="block";
    inventoryItem.style.display = "inline";
    inventoryItem.src = "img/sleutel.png";  
    inventoryItem.style.width = "50px";
    inventoryItem.style.position = "absolute";
    inventoryItem.style.left = "50px";
    inventoryItem.style.top = "340px";
    inventoryItem.onclick = pickUpSleutel;
    if(inventory['sleutel'] != true) {
        button1.onclick = prisonLevel1;
    }
}

function pickUpSleutel(){
    alert("je heb de sleutel gevonden");
    inventoryItem.style.display = 'none';
    inventory['sleutel']=true;
    if(inventory['sleutel'] != null) {
        button1.onclick = prisonLevel1;
    }
}


function prisonLevel2(){
    gameContainer.style.backgroundImage = "url(img/level2.jpg)";
    description.innerHTML= "Klik op start om te beginnen";  
    title.innerHTML = "Om bij een gang aan te sluiten moet je een bewaker dood maken ga je dat doen?.";
    button1.innerHTML = "ja";
    button1.onclick = stoel;
    button2.innerHTML = "nee";
    button2.onclick = prisonLevel3;
    button2.style.display = "inline";
    button3.style.display = "none";
    title.style.color = "red";
    inventoryItem.style.display = "none";
}

function stoel() {
    gameContainer.style.backgroundImage = "url(img/stoel.jpg)";
    description.innerHTML= "Klik op start opniew te beginnen";  
    title.innerHTML = "De politie heeft je gezien dus je krijgt de stoel.";
    button1.innerHTML = "prison opnieuw spelen";
    button1.onclick = StartPrison;
    button2.innerHTML = "china opnieuw spelen";
    button2.onclick = start;
    button3.style.display = "none";
    title.style.color = "red";
    inventoryItem.style.display = "none";
}
function prisonLevel3(){
    title.innerHTML = "de gang is boos op je, ze willen je vermoorden wat ga je doen.";
    gameContainer.style.backgroundImage = "url(img/level3.jpg)";
    button1.innerHTML = "ontsnappen uit de gevangenis";
    button1.onclick = prisonLevel4;
    button2.innerHTML = "aangeven bij de politie";
    button2.onclick = prisonAangeven;
    button3.innerHTML = "vechten tegen de gang";
    button3.onclick = gangGevecht;
    button2.style.display = "inline";
    button3.style.display = "inline";
    title.style.color = "white";

}

function gangGevecht() {
    gameContainer.style.backgroundImage = "url(img/gangfight.png)";
    description.innerHTML= "Klik op opnieuw als je opnieuw wilt beginnen bij level1";  
    title.innerHTML = "Je heb het gevecht verloren je bent dood gegaan.";
    button1.innerHTML = "prison opnieuw spelen";
    button1.onclick = StartPrison;
    button2.innerHTML = "china opnieuw spelen";
    button2.onclick = start;
    button3.style.display = "none";
    title.style.color = "black";
    title.style.display ="block";
    inventoryItem.style.display = "none";
}

function prisonLevel4(){
    gameContainer.style.backgroundImage = "url(img/level4.jpg)";
    title.innerHTML = "Om te kunnen ontsnappen heb je een sleutel nodig.";
    button1.innerHTML = "ontsnappen";
    button1.onclick = prisonLevel4;
    button2.innerHTML = "Opnieuw";
    button2.onclick = "StartPrison";
    button3.style.display = "none";
    title.style.color = "white";
    if(inventory['sleutel'] == true) {
        button1.onclick = prisonFinal;
    }  
        else if(inventory['sleutel'] == false) 
             button1.onclick = function(){alert("je heb geen sleutel om te kunnen ontsnappen");}
         }

    function prisonFinal(){
        gameContainer.style.backgroundImage = "url(img/final.jpg)";
        description.innerHTML= "Klik op opnieuw als je opnieuw wilt beginnen";  
        title.innerHTML = "Je hebt gewonnen. je bent ontsnapt uit de gevangenis.";
        button1.innerHTML = "Opnieuw";
        button1.onclick = start;
        button2.style.display = "none";
        button3.style.display = "none";
        title.style.color = "white";
        title.style.display ="block";
        inventoryItem.style.display = "none";
    }




