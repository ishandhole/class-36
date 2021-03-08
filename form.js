class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("car racing game");
        title.position(300,300);

        var input = createInput("enter name");
        input.position(300,450)
        
        var button = createButton("start");
        button.position(300,500);
        
        var greetings = createElement("h2");
        greetings.position(300,300);
        button.mousePressed(function(){
            button.hide();
            input.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updatecount(playerCount);
            greetings.html("hello "+ name);

        })

    }
}