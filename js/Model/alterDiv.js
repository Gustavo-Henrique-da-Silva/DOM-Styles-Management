function alterDiv(){
    if(MCD.value != ""){
        console.log("before: " + $("#divAlter").css("color"))
        $("#divAlter").css("color", MCD.value);
        console.log("after: " + $("#divAlter").css("color"))
        MCD.value = "";
    } else if(MBCD.value != ""){
        console.log("before: " + $("#divAlter").css("backgroundColor"))
        $("#divAlter").css("backgroundColor", MBCD.value);
        console.log("after: " + $("#divAlter").css("backgroundColor"))
        MBCD.value = "";
    } else if(MMCD.value != ""){
        console.log("before: " + $("#divAlter").css("cursor"))
        $("#divAlter").css("cursor", MMCD.value);
        console.log("after: " + $("#divAlter").css("cursor"))
        MMCD.value = "";
    } else if(MBD.value != ""){
        console.log("before: " + $("#divAlter").css("border"))
        $("#divAlter").css("border", MBD.value);
        console.log("after: " + $("#divAlter").css("border"))
        MBD.value = "";
    } else if(MFD.value != ""){
        console.log("before: " + $("#divAlter").css("font"))
        $("#divAlter").css("font", MFD.value);
        console.log("after: " + $("#divAlter").css("font"))
        MFD.value = "";
    } else if(MPD.value != ""){
        console.log("before: " + $("#divAlter").css("padding"))
        $("#divAlter").css("padding", MPD.value);
        console.log("after: " + $("#divAlter").css("padding"))
        MPD.value = "";
    } else if(MWD.value != ""){
        console.log("before: " + $("#divAlter").css("width"))
        $("#divAlter").css("width", MWD.value);
        console.log("after: " + $("#divAlter").css("width"))
        MWD.value = "";
    } else if(MID.value != ""){
        $("#divAlter").html(MID.value);
        MID.value = "";
    } else if(MSD.value != ""){
        let text = MSD.value.split("  ");
        console.log("before: " + $("#divAlter").css(text[0]))
        $("#divAlter").css(text[0], text[1]);
        console.log("after: " + $("#divAlter").css(text[0]))
        MSD.value = "";
    }
}

export{alterDiv};