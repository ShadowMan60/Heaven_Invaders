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
            y: 590
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
            this.width = image.width - 390 
            this.height = image.height - 390
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
        
        if(this.position.x > canvas.width){
            this.velocity.x = 0;
            this.position.x = edge;
        }

        this.position.x += this.velocity.x;
    }
}
////////////////////////////////////////////////


const player = new Player();
player.draw();

//function om de player op de canvas te drawen
function animate(){
    requestAnimationFrame(animate);

    //afmetingen van de canvas
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //drawt de image
    player.draw();

    //update de image
    player.update();
}

//voert de functie uit
animate();

//speler beweegt als je op de keys drukt
addEventListener("keydown", ({key}) => {
    switch (key){
        case "a":
            console.log("left");
            player.velocity.x = -15;
            break
        case "d":
            console.log("right");
            player.velocity.x = 15;
    }
})

addEventListener("keyup", ({key}) => {
    switch (key){
        case "a":
            console.log("left");
            player.velocity.x = 0;
            break
        case "d":
            console.log("right");
            player.velocity.x = 0;
    }
})




