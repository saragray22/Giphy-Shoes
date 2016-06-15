console.log("hi");

$.ajax(
    {url: "http://api.giphy.com/v1/gifs/search?q=high+shoes&api_key=dc6zaTOxFJmzC&rating=pg&limit=24", 
  success: function(result){
    
    var container = "";
    
    for (i = 0; i < result.data.length; i++) {
   console.log(i);
      
         var catGif = result.data[i];
    console.log(catGif.images.original.url);
    
      var image = "<p><img src='"+catGif.images.original.url+"'/></p>";
    container = container + image;
      
      if ( i == 13){
        container = container + "<p></p>";
      }
      
    
    }
    
    $("#container").html(container);
    
 
    
    
//         console.log(result);
    },
  error: function(error){
        console.log(error);
  }
});