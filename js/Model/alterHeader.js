

function alterHeader(){
    if(MCH1.value != ""){
        console.log("before: " + $("#h1Alter").css("color"))
        $("#h1Alter").css("color", MCH1.value);
        console.log("after: " + $("#h1Alter").css("color"))
        MCH1.value = "";
    } else if(MBCH1.value != ""){
        console.log("before: " + $("#h1Alter").css("backgroundColor"))
        $("#h1Alter").css("backgroundColor", MBCH1.value);
        console.log("after: " + $("#h1Alter").css("backgroundColor"))
        MBCH1.value = "";
    } else if(MMCH1.value != ""){
        console.log("before: " + $("#h1Alter").css("cursor"))
        $("#h1Alter").css("cursor", MMCH1.value);
        console.log("after: " + $("#h1Alter").css("cursor"))
        MMCH1.value = "";
    } else if(MBH1.value != ""){
        console.log("before: " + $("#h1Alter").css("border"))
        $("#h1Alter").css("border", MBH1.value);
        console.log("after: " + $("#h1Alter").css("border"))
        MBH1.value = "";
    } else if(MFH1.value != ""){
        console.log("before: " + $("#h1Alter").css("font"))
        $("#h1Alter").css("font", MFH1.value);
        console.log("after: " + $("#h1Alter").css("font"))
        MFH1.value = "";
    } else if(MPH1.value != ""){
        console.log("before: " + $("#h1Alter").css("padding"))
        $("#h1Alter").css("padding", MPH1.value);
        console.log("after: " + $("#h1Alter").css("padding"))
        MPH1.value = "";
    } else if(MWH1.value != ""){
        console.log("before: " + $("#h1Alter").css("width"))
        $("#h1Alter").css("width", MWH1.value);
        console.log("after: " + $("#h1Alter").css("width"))
        MWH1.value = "";
    } else if(MIH1.value != ""){
        $("#h1Alter").html(MIH1.value);
        MIH1.value = "";
    } else if(MSH1.value != ""){
        let text = MSH1.value.split("  ");
        console.log("before: " + $("#h1Alter").css(text[0]))
        $("#h1Alter").css(text[0], text[1]);
        console.log("after: " + $("#h1Alter").css(text[0]))
        MSH1.value = "";
    } 
}
/*
Elements Alterable    H1     P     OL   UL    Button Table Form  DIV   NAV   MAIN  BODY Element Classes

                    MCH1, MCP,  MCOL, MCUL,  MCBT,  MCT,  MCF,  MCD,  MCN,  MCM,  MCB,  MCX    Color
                    MBCH1,MBCP, MBCOL,MBCUL, MBBTN, MBCT, MBCF, MBCD, MBCN, MBCM, MBCB, MBCX   Bg-Color
                    MMCH1,MMCP, MMCOL,MMCUL, MMCBT, MMCT, MMCF, MMCD, MMCN, MMCM, MMCB, MMCX   Mouse Cursor
                    MBH1, MBP,  MBOL, MBUL,  MBBT, MBT,  MBF,  MBD,  MBN,  MBM,  MBB,  MBX    Border
                    MFH1, MFP,  MFOL, MFUL,  MFBT,  MFT,  MFF,  MFD,  MFN,  MFM,  MFB,  MFX    Font-Familly
                    MPH1, MPP,  MPOL, MPUL,  MPBT,  MPT,  MPF,  MPD,  MPN,  MPM,  MPB,  MPX    Padding
                    MWH1, MWP,  MWOL, MWUL,  MWBT,  MWT,  MWF,  MWD,  MWN,  MWM,  MWB,  MWX    Width   
                    MIH1, MIP,  MIOL, MIUL,  MIBT,  MIT,  MIF,  MID,  MIN,  MIM,  MIB,  MIX    Inner       
                    MSH1, MSP,  MSOL, MSUL,  MSBT,  MST,  MSF,  MSD,  MSN,  MSM,  MSB,  MSX    Specific
*/