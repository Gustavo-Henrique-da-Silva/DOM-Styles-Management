function alterUnordenedList(){
    if(MCUL.value != ""){
        console.log("before: " + $("#ulAlter").css("color"))
        $("#ulAlter").css("color", MCUL.value);
        console.log("after: " + $("#ulAlter").css("color"))
        MCUL.value = "";
    } else if(MBCUL.value != ""){
        console.log("before: " + $("#ulAlter").css("backgroundColor"))
        $("#ulAlter").css("backgroundColor", MBCUL.value);
        console.log("after: " + $("#ulAlter").css("backgroundColor"))
        MBCUL.value = "";
    } else if(MMCUL.value != ""){
        console.log("before: " + $("#ulAlter").css("cursor"))
        $("#ulAlter").css("cursor", MMCUL.value);
        console.log("after: " + $("#ulAlter").css("cursor"))
        MMCUL.value = "";
    } else if(MBUL.value != ""){
        console.log("before: " + $("#ulAlter").css("border"))
        $("#ulAlter").css("border", MBUL.value);
        console.log("after: " + $("#ulAlter").css("border"))
        MBUL.value = "";
    } else if(MFUL.value != ""){
        console.log("before: " + $("#ulAlter").css("font"))
        $("#ulAlter").css("font", MFUL.value);
        console.log("after: " + $("#ulAlter").css("font"))
        MFUL.value = "";
    } else if(MPUL.value != ""){
        console.log("before: " + $("#ulAlter").css("padding"))
        $("#ulAlter").css("padding", MPUL.value);
        console.log("after: " + $("#ulAlter").css("padding"))
        MPUL.value = "";
    } else if(MWUL.value != ""){
        console.log("before: " + $("#ulAlter").css("width"))
        $("#ulAlter").css("width", MWUL.value);
        console.log("after: " + $("#ulAlter").css("width"))
        MWUL.value = "";
    } else if(MIUL.value != ""){
        $("#ulAlter").html(MIUL.value);
        MIUL.value = "";
    } else if(MSUL.value != ""){
        let text = MSUL.value.split("  ");
        console.log("before: " + $("#ulAlter").css(text[0]))
        $("#ulAlter").css(text[0], text[1]);
        console.log("after: " + $("#ulAlter").css(text[0]))
        MSUL.value = "";
    }
}

export {alterUnordenedList};