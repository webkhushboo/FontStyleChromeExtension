chrome.runtime.sendMessage({todo:"showPageAction"});
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "ChangeColor"){
        var addColor = "#" +request.clickedColor;

        $('.article-content').css('color',addColor);
    }
})