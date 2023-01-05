function alterParagrafy(){
    console.log("Entrando no parágrafo");
    if(MCP.value != ""){
        console.log("before: " + $("#pAlter").css("color"))
        $("#pAlter").css("color", MCP.value);
        console.log("after: " + $("#pAlter").css("color"))
        MCP.value = "";
    } else if(MBCP.value != ""){
        console.log("before: " + $("#pAlter").css("backgroundColor"))
        $("#pAlter").css("backgroundColor", MBCP.value);
        console.log("after: " + $("#pAlter").css("backgroundColor"))
        MBCP.value = "";
    } else if(MMCP.value != ""){ 
        console.log("before: " + $("#pAlter").css("cursor"))
        $("#pAlter").css("cursor", MMCP.value);
        console.log("after: " + $("#pAlter").css("cursor"))
        MMCP.value = "";
    } else if(MBP.value != ""){
        console.log("before: " + $("#pAlter").css("border"))
        $("#pAlter").css("border", MBP.value);
        console.log("after: " + $("#pAlter").css("border"))
        MBP.value = "";
    } else if(MFP.value != ""){
        console.log("before: " + $("#pAlter").css("font"))
        $("#pAlter").css("font", MFP.value);
        console.log("after: " + $("#pAlter").css("font"))
        MFP.value = "";
    } else if(MPP.value != ""){
        console.log("before: " + $("#pAlter").css("padding"))
        $("#pAlter").css("padding", MPP.value);
        console.log("after: " + $("#pAlter").css("padding"))
        MPP.value = "";
    } else if(MWP.value != ""){ 
        console.log("before: " + $("#pAlter").css("width"))
        $("#pAlter").css("width", MWP.value);
        console.log("after: " + $("#pAlter").css("width"))
        MWP.value = "";
    } else if(MIP.value != ""){
        $("#pAlter").html(MIP.value);
        MIP.value = "";
    } else if(MSP.value != ""){
        let text = MSP.value.split("  ");
        console.log("before: " + $("#pAlter").css(text[0]))
        $("#pAlter").css(text[0], text[1]);
        console.log("after: " + $("#pAlter").css(text[0]))
        MSP.value = "";
    } 
}

export{alterParagrafy};