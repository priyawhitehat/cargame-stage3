class Game{
    constructor(){
       
    }

    getState()
    {
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function (data){gameState = data.val()});
        
    }

    update(state)
    {
         database.ref('/').update({gameState : state})
    }

    async start()
    {
        if(gameState===0)
        {
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists())
            {
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();

        }
        car1 = createSprite(100,200);
        car2 = createSprite(250,200);
        car3 = createSprite(400,200);
        car4 = createSprite(550,200);
        cars = [car1,car2,car3,car4];
        
        
    }

    play()
    {
       

        form.hide();
        var index = 0;
        var x =0;
        var y = 0;
        Player.getplayerinfo();

        if(allplayers!==undefined)
        {
            index = index+1;
            for(var plr in allplayers)
            {
                x = x+20;
                y = displayHeight-allplayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if(index===player.index)
                {
                    cars[index-1].shapeColor = "red";
                }
            }
        }

    if(keyIsDown(UP_ARROW) && player.index!==null)
    {
         player.distance = player.distance+50;
         player.update();
         //camera.position.x=displayWidth/2;
        // camera.position.y=cars[index-1].y;    
    }
}


}