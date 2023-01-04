
function alterMain(){
    if(MCM.value != ""){
        console.log("before: " + $("#mainAlter").css("color"))
        $("#mainAlter").css("color", MCM.value);
        console.log("after: " + $("#mainAlter").css("color"))
        MCM.value = "";
    } else if(MBCM.value != ""){
        console.log("before: " + $("#mainAlter").css("backgroundcolor"))
        $("#mainAlter").css("backgroundcolor", MBCM.value);
        console.log("after: " + $("#mainAlter").css("backgroundcolor"))
        MBCM.value = "";
    } else if(MMCM.value != ""){
        console.log("before: " + $("#mainAlter").css("cursor"))
        $("#mainAlter").css("cursor", MMCM.value);
        console.log("after: " + $("#mainAlter").css("cursor"))
        MMCM.value = "";
    } else if(MBM.value != ""){
        console.log("before: " + $("#mainAlter").css("border"))
        $("#mainAlter").css("border", MBM.value);
        console.log("after: " + $("#mainAlter").css("border"))
        MBM.value = "";
    } else if(MFM.value != ""){
        console.log("before: " + $("#mainAlter").css("font"))
        $("#mainAlter").css("font", MFM.value);
        console.log("after: " + $("#mainAlter").css("font"))
        MFM.value = "";
    } else if(MPM.value != ""){
        console.log("before: " + $("#mainAlter").css("padding"))
        $("#mainAlter").css("padding", MPM.value);
        console.log("after: " + $("#mainAlter").css("padding"))
        MPM.value = "";
    } else if(MWM.value != ""){
        console.log("before: " + $("#mainAlter").css("width"))
        $("#mainAlter").css("width", MWH1.value);
        console.log("after: " + $("#mainAlter").css("width"))
        MWH1.value = "";
    } else if(MIM.value != ""){
        $("#mainAlter").html(MIH1.value);
        MIH1.value = "";
    } else if(MSM.value != ""){
        let text = MSH1.value.split("  ");
        console.log("before: " + $("#mainAlter").css(text[0]))
        $("#mainAlter").css(text[0], text[1]);
        console.log("after: " + $("#mainAlter").css(text[0]))
        MSH1.value = "";
    } 
}
