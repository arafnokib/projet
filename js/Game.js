class Game{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    }
    update(){
        database.ref('/').update({
            gameState: 1
          });
         form.message.hide();
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }

        plane1 = createSprite(200,200,50,50)
        plane2 = createSprite(400,200,50,50)
        plane3 = createSprite(600,200,50,50)
        plane4 = createSprite(800,200,50,50)

        planes = [plane1, plane2, plane3, plane4]

      }
      play(){
        //textSize(30);
       // text("You have taken off", 120, 100)
        form.hide();
       Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
          var index = 0;
          var x = 0;
          var y;
          
          
          for(var plr in allPlayers){
            index += 1
            x += 200;
            y = displayHeight - allPlayers[plr].distance;
            planes[index-1].x = x;
            planes[index-1].y = y;
    
            if(index === player.index){
              planes[index-1].shapeColor="red";
              camera.position.x = displayWidth/2;
              camera.position.y = planes[index-1].y
            }
            
          }
        }
    
        
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=50
          player.update();
        }
        drawSprites();
      }
    }