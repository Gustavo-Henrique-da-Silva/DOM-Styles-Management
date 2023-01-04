function alterButton(){
    console.log(MBBT.value);
    if(MCBT.value != ""){
        console.log("before: " + $("#buttonAlter").css("color"))
        $("#buttonAlter").css("color", MCBT.value);
        console.log("after: " + $("#buttonAlter").css("color"))
        MCBT.value = "";
    } else if(MBBTN.value != ""){
        console.log("before: " + $("#buttonAlter").css("backgroundColor"))
        $("#buttonAlter").css("backgroundColor", MBBTN.value);
        console.log("after: " + $("#buttonAlter").css("backgroundColor"))
        MBBTN.value = "";
    } else if(MMCBT.value != ""){
        console.log("before: " + $("#buttonAlter").css("cursor"))
        $("#buttonAlter").css("cursor", MMCBT.value);
        console.log("after: " + $("#buttonAlter").css("cursor"))
        MMCBT.value = "";
    } else if(MBBT.value != ""){
        console.log("before: " + $("#buttonAlter").css("border"))
        $("#buttonAlter").css("border", MBBT.value);
        console.log("after: " + $("#buttonAlter").css("border"))
        MBBT.value = "";
    } else if(MFBT.value != ""){
        console.log("before: " + $("#buttonAlter").css("font"))
        $("#buttonAlter").css("font", MFBT.value);
        console.log("after: " + $("#buttonAlter").css("font"))
        MFBT.value = "";
    } else if(MPBT.value != ""){
        console.log("before: " + $("#buttonAlter").css("padding"))
        $("#buttonAlter").css("padding", MPBT.value);
        console.log("after: " + $("#buttonAlter").css("padding"))
        MPBT.value = "";
    } else if(MWBT.value != ""){
        console.log("before: " + $("#buttonAlter").css("width"))
        $("#buttonAlter").css("width", MWBT.value);
        console.log("after: " + $("#buttonAlter").css("width"))
        MWBT.value = "";
    } else if(MIBT.value != ""){
        $("#buttonAlter").html(MIBT.value);
        MIBT.value = "";
    } else if(MSBT.value != ""){
        let text = MSBT.value.split("  ");
        console.log("before: " + $("#buttonAlter").css(text[0]))
        $("#buttonAlter").css(text[0], text[1]);
        console.log("after: " + $("#buttonAlter").css(text[0]))
        MSBT.value = "";
    }
}