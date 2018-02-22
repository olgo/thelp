    
$(document).ready( function () {
    console.log("start!");

        var all = document.body.childNodes;;

        for(var i=0; i < all.length; i++){
            searchNode(all[i]);
        }
    
    console.log("end!");
});

function searchNode(node) {

    nodeValue(node);

    for(var i=0; i < node.childNodes.length; i++){
        searchNode(node.childNodes[i]);
    }
}

function nodeValue(node) {
    console.log(node.nodeType);
    if(node.nodeValue != null && node.nodeValue != '') {
        console.log("nodeVal: " + node.nodeValue);
    }else{
        //console.log("no node value");
    }
}