class Player
{
    constructor()
    {
         this.index = null;
         this.distance = 0;
         this.name = null;
    }

    getCount()
    {
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",function(data)
        {
            playerCount = data.val();
        }
        )

    }

    updateCount(Count)
    {
        database.ref('/').update({
        playerCount:Count
            
        }
        )

    }
    
    update()
    { 
        var playerIndex = "players/player" + this.index; 
        database.ref(playerIndex).set({ name:this.name, distance:this.distance });
        
    }

    static getplayerinfo()
    {
        var playerinforef = database.ref('players');
        playerinforef.on("value",(data)=>{
        allplayers = data.val();
        }
        )
    }

}