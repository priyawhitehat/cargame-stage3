class Form
{
    constructor()
    {
        this.name = createInput();
        this.button = createButton("PLAY");
        this.greeting = createElement('h3');
    }

    display()
    {
        var title = createElement('h2');
        title.html('CAR RACER');
        title.position(displayWidth/2-30,displayHeight/2-400);
        
        this.name.position(displayWidth/2-50,displayHeight/2-100);
        this.button.position(displayWidth/2-0,displayHeight/2-50);
        this.greeting.position(displayWidth/2-5,displayHeight/2-300);

    

    this.button.mousePressed(()=>
    {
        this.button.hide();
        this.name.hide();
        
        player.name = this.name.value();
        this.greeting.html("WELCOME :  "+player.name);

        playerCount = playerCount+1;
        player.index = playerCount;
        player.update(player.name);
        player.updateCount(playerCount);
        
    }
    )
    
}

hide()
{
    this.name.hide();
    this.button.hide();
    this.greeting.hide();

}

}