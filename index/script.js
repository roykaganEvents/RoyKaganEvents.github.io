function loadcss(filename){
    var fileref= document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);

    if (typeof fileref!="undefined"){
        document.getElementById("head").appendChild(fileref);
    }
}

