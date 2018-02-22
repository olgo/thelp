
var translate = [];

$(document).ready( function () {

    var all = document.body.childNodes;;

    for(var i=0; i < all.length; i++){
        searchNode(all[i]);
    }

    var translateJSON = {};
    for(var i=0; i < translate.length; i++){
        translate[i] = translate[i].trim('&nbsp;');
        translate[i] = translate[i].trim('\n');
        translateJSON['tid' + i] = translate[i];
    }

    console.log(JSON.stringify(translateJSON));
    
    console.log("done!");
});

function searchNode(node) {

    if(node.childNodes.length == 0){
        nodeValue(node);
    }

    for(var i=0; i < node.childNodes.length; i++){
        searchNode(node.childNodes[i]);
    }
}

function nodeValue(node) {
    if(node.nodeValue != null){
        if( node.nodeName != 'SCRIPT'
            && node.nodeName != '#comment'
            && node.nodeValue.trim() != '') {
            translate.push(node.nodeValue);
        }
    }
}