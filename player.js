class Player{
    constructor(){

    }
    getCount(){
        var playerref = database.ref("playercount");
        playerref.on("value",function(data){
            playerCount = data.val()
        })
    }
    updatecount(Count){
        database.ref("/").update({
            playercount:Count
        })
    }
    update(name){
        var playerindex = "player" + playerCount;
        database.ref(playerindex).set({
            name:name
        })
    }
}