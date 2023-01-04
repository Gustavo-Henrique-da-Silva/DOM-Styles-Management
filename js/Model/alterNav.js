function alterNav(){
    if(MCN.value != ""){
        console.log("before: " + $("#navAlter").css("color"))
        $("#navAlter").css("color", MCN.value);
        console.log("after: " + $("#navAlter").css("color"))
        MCN.value = "";
    } else if(MBCN.value != ""){
        console.log(MBCN.value);
        console.log("before: " + $("#navAlter").css("backgroundColor"))
        $("#navAlter").css("backgroundColor", MBCN.value);
        console.log("after: " + $("#navAlter").css("backgroundColor"))
        MBCN.value = "";
    } else if(MMCN.value != ""){
        console.log("before: " + $("#navAlter").css("cursor"))
        $("#navAlter").css("cursor", MMCN.value);
        console.log("after: " + $("#navAlter").css("cursor"))
        MMCN.value = "";
    } else if(MBN.value != ""){
        console.log("before: " + $("#navAlter").css("border"))
        $("#navAlter").css("border", MBN.value);
        console.log("after: " + $("#navAlter").css("border"))
        MBN.value = "";
    } else if(MFN.value != ""){
        console.log("before: " + $("#navAlter").css("font"))
        $("#navAlter").css("font", MFN.value);
        console.log("after: " + $("#navAlter").css("font"))
        MFN.value = "";
    } else if(MPN.value != ""){
        console.log("before: " + $("#navAlter").css("padding"))
        $("#navAlter").css("padding", MPN.value);
        console.log("after: " + $("#navAlter").css("padding"))
        MPN.value = "";
    } else if(MWN.value != ""){
        console.log("before: " + $("#navAlter").css("width"))
        $("#navAlter").css("width", MWN.value);
        console.log("after: " + $("#navAlter").css("width"))
        MWN.value = "";
    } else if(MIN.value != ""){
        $("#navAlter").html(MIN.value);
        MIN.value = "";
    } else if(MSN.value != ""){
        let text = MSN.value.split("  ");
        console.log("before: " + $("#navAlter").css(text[0]))
        $("#navAlter").css(text[0], text[1]);
        console.log("after: " + $("#navAlter").css(text[0]))
        MSN.value = "";
    }
}