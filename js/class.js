// 
// function twitter(){
//     let message = document.querySelector("textMessage").value;
//     let message = message.replace(/\s + /g, '');
//     let numberOfWords.message.split('').length;
//     document.getElementById("textTrack").value = wordsRemaining;
// ' + eval(100 - numberOfWords);
// if (numberOfWords is less > 100)
// alert("too many words");
// }
// function changeLimit(){
//     let limitText = document.getElementById("limit").value;
//     document.getElementById("changeLimit").innerHTML = "/" + limitText;
// }
// function(){
//     length
// }

function twitterpost(){
    let lengthmessage = document.querySelector("#text").Value;
    
    let lentext =  lengthmessage.length;


    document.getElementById("count").innerHTML = lentext;

    if(lentext > 200){
        document.getElementById("count").innerHTML = "MAX";
        let sliceText = lengthmessage.slice(1,200);
        
    }
}
function changeLimit(){
    let limitText = document.getElementById("limit").value;
    document.getElementById("changelist").innerHTML = "/" + limitText;
}