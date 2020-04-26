$(document).ready(function(){

    
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?"+
    "tags=cat&format=json&jsoncallback=?"
    $.getJSON(url, function(flickrResponse){
        flickrResponse.items.forEach(function (photo){
            var $img = $("<img>")
            
            $img.attr("src", photo.media.m)
            $("main .carousel").append($img)
        })
    })
})


