function alterElement(){
    let text;
    console.log("Element");
    if(MCX.value != ""){
        text = MCX.value.split("  ");
        console.log(text)
        console.log("before: " + $("#" + text[0]).css("color"))
        $("#" + text[0]).css("color", text[1]);
        console.log("after: " + $("#" + text[0] ).css("color"))
        MCX.value = "";
    } else if(MBCX.value != ""){
        text = MBCX.value.split("  ");
        console.log("before: " + $("#" + text[0]).css("backgroundColor"))
        $("#" + text[0]).css("backgroundColor", text[1]);
        console.log("after: " + $("#" + text[0]).css("backgroundColor"))
        MBCX.value = "";
    } else if(MMCX.value != ""){
        text = MMCX.value.split("  ");
        console.log("before: " + $("#" + text[0]).css("cursor"))
        $("#" + text[0]).css("cursor", text[1]);
        console.log("after: " + $("#" + text[0]).css("cursor"))
        MMCX.value = "";
    } else if(MBX.value != ""){
        text = MBX.value.split("  ");
        console.log("before: " + $("#" + text[0]).css("border"))
        $("#" + text[0]).css("border", text[1]);
        console.log("after: " + $("#" + text[0]).css("border"))
        MBX.value = "";
    } else if(MFX.value != ""){
        text = MFX.value.split("  ");
        console.log("before: " + $("#" + text[0]).css("font"))
        $("#" + text[0]).css("font", text[1]);
        console.log("after: " + $("#" + text[0]).css("font"))
        MFX.value = "";
    } else if(MPX.value != ""){
        text = MPX.value.split("  ");
        console.log("before: " + $("#" + text[0]).css("padding"))
        $("#" + text[0]).css("padding", text[1]);
        console.log("after: " + $("#" + text[0]).css("padding"))
        MPX.value = "";
    } else if(MWX.value != ""){
        text = MWX.value.split("  ");
        console.log("before: " + $("#" + text[0]).css("width"))
        $("#" + text[0]).css("width", text[1]);
        console.log("after: " + $("#" + text[0]).css("width"))
        MWX.value = "";
    } else if(MIX.value != ""){
        text = MIX.value.split("  ");
        $("#" + text[0]).html(text[1]);
        MIX.value = "";
    } else if(MSX.value != ""){
        let text = MSX.value.split("  ");
        console.log("before: " + $("#" + text[0]).css(text[1]))
        $("#" + text[0]).css(text[1], text[2]);
        console.log("after: " + $("#" + text[0]).css(text[1]))
        MSX.value = "";
    }
}

export{alterElement};