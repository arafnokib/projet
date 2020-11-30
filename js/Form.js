class Form{
    constructor(){
        this.button = createButton('Takeoff');
        this.input = createInput('Enter your flight number');
        this.message = createElement('h2');
    }

    hide(){
        this.button.hide();
        this.input.hide();
    }
    display(){
        this.button.position(displayWidth/2,20)
        this.input.position(displayWidth/2 + 80,20)
        this.message.position(displayWidth/2,100)
        
        //player.name = this.input.value();
        this.button.mousePressed(()=>{
            this.hide()
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
             player.updateCount(playerCount);
        
            this.message.html("Flight " + player.name + " is waiting for air traffic control approval.")
        })
            
        
        
    }
}