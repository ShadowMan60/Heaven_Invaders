const canvas = document.getElementById("speelveld");
const ctx = canvas.getContext("2d");
//afmetingen van de speelveld
canvas.width    = innerWidth;
canvas.height   = innerHeight;
//player karakter
class Player{
    constructor(){
        //positie van de speler
        this.position = {
            x: 700,
            y: 600
        }
        //snelheid van de speler
        this.velocity = {
            x: 0,
            y: 0
        }
        //image
        const image = new Image()
        image.src = "images/final_character.png";
        //load de image en pakt de values
        image.onload = () => {
            //-
            this.image = image;
            this.width = image.width - 400 
            this.height = image.height - 400
        }
    }
    //drawt de image als de image geladen is
    draw(){
        if(this.image){
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    //updatet de game
    update() {
        if(this.position.x > canvas.width - player.width){
            this.velocity.x = 0;
            this.position.x = canvas.width - player.width;
        } else if(this.position.x < 0){
            this.velocity.x = 0;
            this.position.x = 0;
        }
        if(this.position.x + this.width > EnBu.position.x && this.position.x < EnBu.position.x + EnBu.width){
            if(this.position.y + this.height > EnBu.position.y && this.position.y < EnBu.position.y + EnBu.height){
                this.position.y = 1000;     bullet.position.y = 1000;
                this.position.x = 0;        bullet.position.x = 0;
                this.velocity.y = 0;        bullet.velocity.y = 0;
                this.velocity.x = 0;        bullet.velocity.x = 0;
                alert("your death"<br>"restart");
            }
        }
        if(this.position.x + this.width > EnBu2.position.x && this.position.x < EnBu2.position.x + EnBu2.width){
            if(this.position.y + this.height > EnBu2.position.y && this.position.y < EnBu2.position.y + EnBu2.height){
                this.position.y = 1000;     bullet.position.y = 1000;
                this.position.x = 0;        bullet.position.x = 0;
                this.velocity.y = 0;        bullet.velocity.y = 0;
                this.velocity.x = 0;        bullet.velocity.x = 0;
                alert("your death"<br>"restart");
            }
        }
        if(this.position.x + this.width > EnBu3.position.x && this.position.x < EnBu3.position.x + EnBu3.width){
            if(this.position.y + this.height > EnBu3.position.y && this.position.y < EnBu3.position.y + EnBu3.height){
                this.position.y = 1000;     bullet.position.y = 1000;
                this.position.x = 0;        bullet.position.x = 0;
                this.velocity.y = 0;        bullet.velocity.y = 0;
                this.velocity.x = 0;        bullet.velocity.x = 0;
                alert("your death"<br>"restart");
            }
        }
        if(this.position.x + this.width > EnBu4.position.x && this.position.x < EnBu4.position.x + EnBu4.width){
            if(this.position.y + this.height > EnBu4.position.y && this.position.y < EnBu4.position.y + EnBu4.height){
                this.position.y = 1000;     bullet.position.y = 1000;
                this.position.x = 0;        bullet.position.x = 0;
                this.velocity.y = 0;        bullet.velocity.y = 0;
                this.velocity.x = 0;        bullet.velocity.x = 0;
                alert("your death"<br>"restart");
            }
        }
        this.position.x += this.velocity.x;
    }
}
//Enemy bullet karakter
class EBullet{
    constructor(posX, posY){
        //positie van de spawn plek van bullet
        this.position = {
            x : posX + 50,
            y : posY + 50
        }
        //snelheid van de bullet
        this.velocity = {
            x: 0,
            y: 4 
        }
        //image
        const image = new Image()
        image.src = "images/bullet2.png";
        //load de image en pakt de values
        image.onload = () => {
            //-
            this.image = image;
            this.width = image.width*1.75;
            this.height = image.height*1.75;
        }
    }
    //drawt de image als de image geladen is
    draw(){
        if(this.image){
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    //update de enemy bullet class
    update() {
        const random = Math.floor(Math.random() * enemies.length);
        if(this.position.y > canvas.height - this.width){
            this.position.y = enemies[random].position.y + 50;
            this.position.x = enemies[random].position.x + 50;
        }
        if(this.position.x + this.width > shield.position.x && 
        this.position.x < shield.position.x + shield.width){
            if(this.position.y > shield.position.y){
                this.position.y = enemies[random].position.y + 50;
                this.position.x = enemies[random].position.x + 50;
            }
        }
        if(this.position.x + this.width > shield2.position.x && 
        this.position.x < shield2.position.x + shield2.width){
            if(this.position.y > shield2.position.y){
                this.position.y = enemies[random].position.y + 50;
                this.position.x = enemies[random].position.x + 50;
            }
        }
        if(this.position.x + this.width > shield3.position.x && 
        this.position.x < shield3.position.x + shield3.width){
            if(this.position.y > shield3.position.y){
                this.position.y = enemies[random].position.y + 50;
                this.position.x = enemies[random].position.x + 50;
            }
        }
        if(this.position.x + this.width > shield4.position.x && 
        this.position.x < shield4.position.x + shield4.width){
            if(this.position.y > shield4.position.y){
                this.position.y = enemies[random].position.y + 50;
                this.position.x = enemies[random].position.x + 50;
            }
        }
        if(this.position.x + this.width > shield5.position.x && 
        this.position.x < shield5.position.x + shield5.width){
            if(this.position.y > shield5.position.y){
                this.position.y = enemies[random].position.y + 50;
                this.position.x = enemies[random].position.x + 50;
            }
        }
        this.position.y += this.velocity.y;
    }
}
//hoeveel enemys
let i = 0;
//Enemy karakter
class Enemy{
    constructor(){
        //positie van de Enemy
        this.position = {
            x: 50 + (i * 130),
            y: 0
        }
        i++
        if (i > 8) {
            this.position.y = 40;
            this.position.x = 50 + ((i - 9) * 130);
        }
        //snelheid van de Enemy
        this.velocity = {
            x: 1,
            y: 0 
        }
        //image
        const image = new Image()
        image.src = "images/enemy.png";
        //load de image en pakt de values
        image.onload = () => {
            //-
            this.image = image;
            this.width = image.width - 400
            this.height = image.height - 400
        }
    }
    //drawt de image als de image geladen is
    draw(){
        if(this.image){
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    //update de enemy class
    update() {
        if(this.position.x > canvas.width - enemy.width){
            this.velocity.x = -1
            this.position.x = canvas.width - enemy.width;
            this.position.y += 72;
        } else if(this.position.x < 0){
            this.velocity.x = 1;
            this.position.x = 0;
            this.position.y += 72;
        }
        if(this.position.x + this.width > shield.position.x && 
            this.position.x < shield.position.x + shield.width){
            if(this.position.y + this.height/1.5 > shield.position.y){
                this.position.y += -432;
                this.position.x = 0;
                console.log("reset");
            }
        }
        if(this.position.x + this.width > bullet.position.x && 
            this.position.x < bullet.position.x + bullet.width){
            if(this.position.y + this.height > bullet.position.y && 
                this.position.y < bullet.position.y + bullet.height){
                this.position.y = 1000;
                this.position.x = canvas.width/2;
                this.velocity.y = 0;
                this.velocity.x = 0;
                bullet.velocity.y = 0;
                bullet.position.y = 620;
                bullet.position.x = player.position.x + 49;
                enemies.splice(this , this+1);
                console.log("death");
            }
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
//hoeveel shields
let j = 0;
//Shields
class Shield{
    constructor(){
        //positie van de shield
        this.position = {
            x: 110 + (j * 310),
            y: 500
        }
        j++
        //snelheid van de shield
        this.velocity = {
            x: 0,
            y: 0
        }
        //image
        const image = new Image()
        image.src = "images/Shield.png";
        //load de image en pakt de values
        image.onload = () => {
            //-
            this.image = image;
            this.width = image.width * 2
            this.height = image.height * 2
        }
    }
    //drawt de image als de image geladen is
    draw(){
        if(this.image){
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    //updatet de game
    update() {  
    }
}
class PBullet{
    constructor(){
        //positie van de speler
        this.position = {
            x: 749,
            y: 619
        }
        //snelheid van de speler
        this.velocity = {
            x: 0,
            y: 0
        }
        //image
        const image = new Image()
        image.src = "images/bullet.png";
        //load de image en pakt de values
        image.onload = () => {
            //-
            this.image = image;
            this.width = image.width*1.75;
            this.height = image.height*1.75;
        }
    }
    //drawt de image als de image geladen is
    draw(){
        if(this.image){
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
    //updatet de game
    update() {
        if(this.position.x > canvas.width - player.width/2){
            this.velocity.x = 0;
            this.position.x = canvas.width - player.width/2 - this.width/2;
        } else if(this.position.x < player.width/2 - this.width/2){
            this.position.x = player.width/2 - this.width/2;
        }
        if(this.position.y < 0){
            this.velocity.y = 0;
            this.position.y = 620;
            this.position.x = player.position.x + 49;
        }
        if(this.position.x + this.width > shield.position.x && 
            this.position.x < shield.position.x + shield.width){
            if(this.position.y < shield.position.y + shield.height){
                this.velocity.y = 0;
                this.position.y = 620;
                this.position.x = player.position.x + 49;
            }
        }
        if(this.position.x + this.width > shield2.position.x && 
        this.position.x < shield2.position.x + shield2.width){
            if(this.position.y < shield2.position.y + shield2.height){
                this.velocity.y = 0;
                this.position.y = 620;
                this.position.x = player.position.x + 49;
            }
        }
        if(this.position.x + this.width > shield3.position.x && 
        this.position.x < shield3.position.x + shield3.width){
            if(this.position.y < shield3.position.y + shield3.height){
                this.velocity.y = 0;
                this.position.y = 620;
                this.position.x = player.position.x + 49;
            }
        }
        if(this.position.x + this.width > shield4.position.x && 
        this.position.x < shield4.position.x + shield4.width){
            if(this.position.y < shield4.position.y + shield4.height){
                this.velocity.y = 0;
                this.position.y = 620;
                this.position.x = player.position.x + 49;
            }
        }
        if(this.position.x + this.width > shield5.position.x && 
        this.position.x < shield5.position.x + shield5.width){
            if(this.position.y < shield5.position.y + shield5.height){
                this.velocity.y = 0;
                this.position.y = 620;
                this.position.x = player.position.x + 49;
            }
        }
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
    }
}
const background = new Image();
background.src = "images/background4.jpg"; 
background.width = canvas.width;
background.height = canvas.height;
//maakt een object instance van de Player class
const player = new Player();
const bullet = new PBullet();
//maakt object instances van de Enemy class
const enemy = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
const enemy5 = new Enemy();
const enemy6 = new Enemy();
const enemy7 = new Enemy();
const enemy8 = new Enemy();
const enemy9 = new Enemy();
const enemy10 = new Enemy();
const enemy11 = new Enemy();
const enemy12 = new Enemy();
const enemy13 = new Enemy();
const enemy14 = new Enemy();
const enemy15 = new Enemy();
const enemy16 = new Enemy();
const EnBu = new EBullet(enemy13.position.x , enemy13.position.y);
const EnBu2 = new EBullet(enemy4.position.x , enemy4.position.y);
const EnBu3 = new EBullet(enemy9.position.x , enemy9.position.y);
const EnBu4 = new EBullet(enemy7.position.x , enemy7.position.y);
//enemy array
const enemies = [enemy, enemy2, enemy3, enemy4,
                enemy5, enemy6, enemy7, enemy8,
                enemy9, enemy10, enemy11, enemy12, 
                enemy13, enemy14, enemy15, enemy16]
//maakt object instances van de shield class
const shield = new Shield();
const shield2 = new Shield();
const shield3 = new Shield();
const shield4 = new Shield();
const shield5 = new Shield();
//shield array
const shields = [shield, shield2, shield3, shield4, shield5];
//function om de karakters op de canvas te drawen
function animate(){
    requestAnimationFrame(animate);
    // kleur en afmetingen van de canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //"draw()" drawt alle images
    //"update()" updatet alle images
    ctx.drawImage(background, -100, -100,);
    player.draw(); player.update();     bullet.draw(); bullet.update();
    enemy.draw(); enemy.update();       EnBu.draw(); EnBu.update();
    enemy2.draw(); enemy2.update();     EnBu2.draw(); EnBu2.update();
    enemy3.draw(); enemy3.update();     EnBu3.draw(); EnBu3.update();
    enemy4.draw(); enemy4.update();     EnBu4.draw(); EnBu4.update();
    enemy5.draw(); enemy5.update();     shield.draw(); shield.update();
    enemy6.draw(); enemy6.update();     shield2.draw(); shield2.update();
    enemy7.draw(); enemy7.update();     shield3.draw(); shield3.update();
    enemy8.draw(); enemy8.update();     shield4.draw(); shield4.update();
    enemy9.draw(); enemy9.update();     shield5.draw(); shield5.update();
    enemy10.draw(); enemy10.update();
    enemy11.draw(); enemy11.update();
    enemy12.draw(); enemy12.update();
    enemy13.draw(); enemy13.update();
    enemy14.draw(); enemy14.update();
    enemy15.draw(); enemy15.update();
    enemy16.draw(); enemy16.update();
}
//voert de functie uit
animate();
//speler beweegt als je op de keys drukt
addEventListener("keydown", ({key}) => {
    switch (key){
        case "a":
            player.velocity.x = -7;
            if(bullet.position.y < 619){
                bullet.velocity.x = 0;
            } else {
                bullet.velocity.x = -7;
            }
            break
        case "d":
            player.velocity.x = 7;
            if(bullet.position.y < 619){
                bullet.velocity.x = 0;
            } else {
                bullet.velocity.x = 7;
            }
            break
        case " ":
            bullet.velocity.y = -5;
    }
})
addEventListener("keyup", ({key}) => {
    switch (key){
        case "a":
            player.velocity.x = 0;
            bullet.velocity.x = 0;
            break
        case "d":
            player.velocity.x = 0;
            bullet.velocity.x = 0;
            break
    }
})