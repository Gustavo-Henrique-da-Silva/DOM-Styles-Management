function alterTable(){
    if(MCT.value != ""){
        console.log("before: " + $("#tableAlter").css("color"))
        $("#tableAlter").css("color", MCT.value);
        console.log("after: " + $("#tableAlter").css("color"))
        MCT.value = "";
    } else if(MBCT.value != ""){
        console.log("before: " + $("#tableAlter").css("backgroundColor"))
        $("#tableAlter").css("backgroundColor", MBCT.value);
        console.log("after: " + $("#tableAlter").css("backgroundColor"))
        MBCT.value = "";
    } else if(MMCT.value != ""){
        console.log("before: " + $("#tableAlter").css("cursor"))
        $("#tableAlter").css("cursor", MMCT.value);
        console.log("after: " + $("#tableAlter").css("cursor"))
        MMCT.value = "";
    } else if(MBT.value != ""){
        console.log("before: " + $("#tableAlter").css("border"))
        $("#tableAlter").css("border", MBT.value);
        console.log("after: " + $("#tableAlter").css("border"))
        MBT.value = "";
    } else if(MFT.value != ""){
        console.log("before: " + $("#tableAlter").css("font"))
        $("#tableAlter").css("font", MFT.value);
        console.log("after: " + $("#tableAlter").css("font"))
        MFT.value = "";
    } else if(MPT.value != ""){
        console.log("before: " + $("#tableAlter").css("padding"))
        $("#tableAlter").css("padding", MPT.value);
        console.log("after: " + $("#tableAlter").css("padding"))
        MPT.value = "";
    } else if(MWT.value != ""){
        console.log("before: " + $("#tableAlter").css("width"))
        $("#tableAlter").css("width", MWT.value);
        console.log("after: " + $("#tableAlter").css("width"))
        MWT.value = "";
    } else if(MIT.value != ""){
        $("#tableAlter").html(MIT.value);
        MIT.value = "";
    } else if(MST.value != ""){
        let text = MST.value.split("  ");
        console.log("before: " + $("#tableAlter").css(text[0]))
        $("#tableAlter").css(text[0], text[1]);
        console.log("after: " + $("#tableAlter").css(text[0]))
        MST.value = "";
    }
}