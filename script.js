$.ajax(
  //We are connecting to the api of giphy that searches for things. This is the part we need to connect to to help build our site.
  //The Q in the url indicates search. We are searching for High Shoes. We then include the api key for access.
  //We are searching for a limit of 24 gifs with a rating of PG.
    {url: "http://api.giphy.com/v1/gifs/search?q=high+shoes&api_key=dc6zaTOxFJmzC&rating=pg&limit=24", 
  success: function(result){
    
    var container = "";
    

    //The for loop below means from the returned gifs I've received, the site keeps loading
    //gifs from giphy's api until it reaches a maximum of 24 (as requested in the url above)
    //If giphy is not working the loop will show no gifs.
    for (i = 0; i < result.data.length; i++) {
   console.log(i);
      
      //Each gif returned by the api is assigned the variable catGif
         var catGif = result.data[i];
    console.log(catGif.images.original.url);
    
      var image = "<p><img src='"+catGif.images.original.url+"'/></p>";
    container = container + image;
  
      
    
    }
    
    //Jquery is finding the ID container in the html and adding the catGifs into it.
    $("#container").html(container);
    
 
    },
  error: function(error){
    //
        console.log(error);
  }
});