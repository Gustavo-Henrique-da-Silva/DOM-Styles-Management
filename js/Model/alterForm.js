function alterForm(){
    if(MCF.value != ""){
        console.log("before: " + $("#formAlter").css("color"))
        $("#formAlter").css("color", MCF.value);
        console.log("after: " + $("#formAlter").css("color"))
        MCF.value = "";
    } else if(MBCF.value != ""){
        console.log("before: " + $("#formAlter").css("backgroundColor"))
        $("#formAlter").css("backgroundColor", MBCF.value);
        console.log("after: " + $("#formAlter").css("backgroundColor"))
        MBCF.value = "";
    } else if(MMCF.value != ""){
        console.log("before: " + $("#formAlter").css("cursor"))
        $("#formAlter").css("cursor", MMCF.value);
        console.log("after: " + $("#formAlter").css("cursor"))
        MMCF.value = "";
    } else if(MBF.value != ""){
        console.log("before: " + $("#formAlter").css("border"))
        $("#formAlter").css("border", MBF.value);
        console.log("after: " + $("#formAlter").css("border"))
        MBF.value = "";
    } else if(MFF.value != ""){
        console.log("before: " + $("#formAlter").css("font"))
        $("#formAlter").css("font", MFF.value);
        console.log("after: " + $("#formAlter").css("font"))
        MFF.value = "";
    } else if(MPF.value != ""){
        console.log("before: " + $("#formAlter").css("padding"))
        $("#formAlter").css("padding", MPF.value);
        console.log("after: " + $("#formAlter").css("padding"))
        MPF.value = "";
    } else if(MWF.value != ""){
        console.log("before: " + $("#formAlter").css("width"))
        $("#formAlter").css("width", MWF.value);
        console.log("after: " + $("#formAlter").css("width"))
        MWF.value = "";
    } else if(MIF.value != ""){
        $("#formAlter").html(MIF.value);
        MIF.value = "";
    } else if(MSF.value != ""){
        let text = MSF.value.split("  ");
        console.log("before: " + $("#formAlter").css(text[0]))
        $("#formAlter").css(text[0], text[1]);
        console.log("after: " + $("#formAlter").css(text[0]))
        MSF.value = "";
    }
}

export{alterForm};
