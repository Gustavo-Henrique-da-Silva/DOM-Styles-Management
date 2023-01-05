function alterOrdenedList(){
    if(MCOL.value != ""){
        console.log("before: " + $("#olAlter").css("color"))
        $("#olAlter").css("color", MCOL.value);
        console.log("after: " + $("#olAlter").css("color"))
        MCOL.value = "";
    } else if(MBCOL.value != ""){
        console.log("before: " + $("#olAlter").css("backgroundColor"))
        $("#olAlter").css("backgroundColor", MBCOL.value);
        console.log("after: " + $("#olAlter").css("backgroundColor"))
        MBCOL.value = "";
    } else if(MMCOL.value != ""){
        console.log("before: " + $("#olAlter").css("cursor"))
        $("#olAlter").css("cursor", MMCOL.value);
        console.log("after: " + $("#olAlter").css("cursor"))
        MMCOL.value = "";
    } else if(MBOL.value != ""){
        console.log("before: " + $("#olAlter").css("border"))
        $("#olAlter").css("border", MBOL.value);
        console.log("after: " + $("#olAlter").css("border"))
        MBOL.value = "";
    } else if(MFOL.value != ""){
        console.log("before: " + $("#olAlter").css("font"))
        $("#olAlter").css("font", MFOL.value);
        console.log("after: " + $("#olAlter").css("font"))
        MFOL.value = "";
    } else if(MPOL.value != ""){
        console.log("before: " + $("#olAlter").css("padding"))
        $("#olAlter").css("padding", MPOL.value);
        console.log("after: " + $("#olAlter").css("padding"))
        MPOL.value = "";
    } else if(MWOL.value != ""){
        console.log("before: " + $("#olAlter").css("width"))
        $("#olAlter").css("width", MWOL.value);
        console.log("after: " + $("#olAlter").css("width"))
        MWOL.value = "";
    } else if(MIOL.value != ""){
        $("#olAlter").html(MIOL.value);
        MIOL.value = "";
    } else if(MSOL.value != ""){
        let text = MSOL.value.split("  ");
        console.log("before: " + $("#olAlter").css(text[0]))
        $("#olAlter").css(text[0], text[1]);
        console.log("after: " + $("#olAlter").css(text[0]))
        MSOL.value = "";
    }
}

export {alterOrdenedList};