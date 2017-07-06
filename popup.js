$(function(){
    var color = $("#fontColor").val();
    $("#fontColor").on("Change paste keyup",function(){
        color = $(this).val();
    });

    $('#btnChange').click(function(){
      chrome.tabs.query({active:true,currentWindow:true},function(tabs){
          chrome.tabs.sendMessage(tabs[0].id,{todo:"ChangeColor",clickedColor:color})
      });  
    });
});