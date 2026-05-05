function loadDoc(doc){
    const frame = document.getElementById("viewing");
    frame.src=doc;

    const v = document.getElementById("preview");
    v.style.display = "block";

    const oneTimeUse =document.getElementById("section");
    oneTimeUse.style.minHeight ="760px";
}