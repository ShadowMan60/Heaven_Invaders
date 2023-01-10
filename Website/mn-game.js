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
            y: 570
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
        
        if(this.position.x > canvas.width){
            this.velocity.x = 0;
            this.position.x = edge;
        }

        this.position.x += this.velocity.x;
    }
}

//Enemy karakter
class Enemy{
    constructor(){

        //positie van de Enemy
        this.position = {
            x: 700,
            y: 200
        }

        //snelheid van de Enemy
        this.velocity = {
            x: 0,
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

    //update de game
    update() {

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

//Shield karakters
class Shield{
    constructor(){

        //positie van de shield
        this.position = {
            x: 100,
            y: 500
        }

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
            this.width = image.width - 25
            this.height = image.height - 50
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

//callt de "Player" class
const player = new Player();
//callt de "Enemy" class
const enemy = new Enemy();
//callt de "Shield" class
const shield = new Shield();

//function om de karakters op de canvas te drawen
function animate(){
    requestAnimationFrame(animate);

    // kleur en afmetingen van de canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //"draw()" drawt de image
    //"update()" updatet de image
    enemy.draw();
    enemy.update();

    player.draw();
    player.update();

    shield.draw();
    shield.update();
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