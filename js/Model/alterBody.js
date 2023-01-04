function alterBody(){
    if(MCB.value != ""){
        console.log("before: " + $("#bodyAlter").css("color"))
        $("#bodyAlter").css("color", MCB.value);
        console.log("after: " + $("#bodyAlter").css("color"))
        MCB.value = "";
    } else if(MBCB.value != ""){
        console.log("before: " + $("#bodyAlter").css("backgroundColor"))
        $("#bodyAlter").css("backgroundColor", MBCB.value);
        console.log("after: " + $("#bodyAlter").css("backgroundColor"))
        MBCB.value = "";
    } else if(MMCB.value != ""){
        console.log("before: " + $("#bodyAlter").css("cursor"))
        $("#bodyAlter").css("cursor", MMCB.value);
        console.log("after: " + $("#bodyAlter").css("cursor"))
        MMCB.value = "";
    } else if(MBB.value != ""){
        console.log("before: " + $("#bodyAlter").css("border"))
        $("#bodyAlter").css("border", MBB.value);
        console.log("after: " + $("#bodyAlter").css("border"))
        MBB.value = "";
    } else if(MFB.value != ""){
        console.log("before: " + $("#bodyAlter").css("font"))
        $("#bodyAlter").css("font", MFB.value);
        console.log("after: " + $("#bodyAlter").css("font"))
        MFB.value = "";
    } else if(MPB.value != ""){
        console.log("before: " + $("#bodyAlter").css("padding"))
        $("#bodyAlter").css("padding", MPB.value);
        console.log("after: " + $("#bodyAlter").css("padding"))
        MPB.value = "";
    } else if(MWB.value != ""){
        console.log("before: " + $("#bodyAlter").css("width"))
        $("#bodyAlter").css("width", MWB.value);
        console.log("after: " + $("#bodyAlter").css("width"))
        MWB.value = "";
    } else if(MIB.value != ""){
        $("#bodyAlter").html(MIB.value);
        MIB.value = "";
    } else if(MSB.value != ""){
        let text = MSB.value.split("  ");
        console.log("before: " + $("#bodyAlter").css(text[0]))
        $("#bodyAlter").css(text[0], text[1]);
        console.log("after: " + $("#bodyAlter").css(text[0]))
        MSB.value = "";
    }
}
