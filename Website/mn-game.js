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
            y: 630
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

        this.position.x += this.velocity.x;
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
            x: 4,
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
            this.velocity.x = -4
            this.position.x = canvas.width - enemy.width;
            this.position.y += 8;
        } else if(this.position.x < 0){
            this.velocity.x = 4;
            this.position.x = 0;
            this.position.y += 8;
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
            x: 110 + (j * 299),
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
        
        if(this.position.x > canvas.width){
            this.velocity.x = 0;
            this.position.x = edge;
        }

        this.position.x += this.velocity.x;
    }
}

const background = new Image();
background.src = "images/background3.jpg"; 
background.width = canvas.width;
background.height = canvas.height;

//maakt een object instance van de Player class
const player = new Player();

//maakt een object instance van de Enemy class
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
// const enemy17 = new Enemy();
// const enemy18 = new Enemy();
// const enemy19 = new Enemy();
// const enemy20 = new Enemy();
// const enemy21 = new Enemy();
// const enemy22 = new Enemy();

const enemies = [enemy, enemy2, enemy3, enemy4,
                enemy6, enemy7, enemy8, enemy9,
                enemy10, enemy11, enemy12, enemy13
                ,enemy14, enemy15, enemy16
]

//maakt een object instance van de shield class
const shield = new Shield();
const shield2 = new Shield();
const shield3 = new Shield();
const shield4 = new Shield();
const shield5 = new Shield();

//function om de karakters op de canvas te drawen
function animate(){
    requestAnimationFrame(animate);

    // kleur en afmetingen van de canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //"draw()" drawt de image
    //"update()" updatet de image

    ctx.drawImage(background, -100, -100,);

    player.draw(); player.update();

    enemy.draw(); enemy.update();
    enemy2.draw(); enemy2.update();
    enemy3.draw(); enemy3.update();
    enemy4.draw(); enemy4.update();
    enemy5.draw(); enemy5.update();
    enemy6.draw(); enemy6.update();
    enemy7.draw(); enemy7.update();
    enemy8.draw(); enemy8.update();
    enemy9.draw(); enemy9.update();
    enemy10.draw(); enemy10.update();
    enemy11.draw(); enemy11.update();
    enemy12.draw(); enemy12.update();
    enemy13.draw(); enemy13.update();
    enemy14.draw(); enemy14.update();
    enemy15.draw(); enemy15.update();
    enemy16.draw(); enemy16.update();
    // enemy17.draw(); enemy15.update();
    // enemy18.draw(); enemy16.update();
    // enemy19.draw(); enemy15.update();
    // enemy20.draw(); enemy16.update();
    // enemy21.draw(); enemy16.update();
    // enemy22.draw(); enemy16.update();



    shield.draw(); shield.update();
    shield2.draw(); shield2.update();
    shield3.draw(); shield3.update();
    shield4.draw(); shield4.update();
    shield5.draw(); shield5.update();
}

//voert de functie uit
animate();

//speler beweegt als je op de keys drukt
addEventListener("keydown", ({key}) => {
    switch (key){
        case "a":
            player.velocity.x = -7;
            break
        case "d":
            player.velocity.x = 7;
            break
    }
})

addEventListener("keyup", ({key}) => {
    switch (key){
        case "a":
            player.velocity.x = 0;
            break
        case "d":
            player.velocity.x = 0;
    }
})