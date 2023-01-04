/* Div Color Ids of Buttons (Classes): button-header-one, button-paragrafy, button-ordened-list, button-unordened-list, button-table, button-form,
button-div, button-nav  button-main, button-body, button-element*/




    
//Declaration of Class Buttons
const BH1 = document.getElementsByClassName("button-header-one");
const BP  = document.getElementsByClassName("button-paragrafy");
const BOL = document.getElementsByClassName("button-ordened-list");
const BUL = document.getElementsByClassName("button-unordened-list");
const BT  = document.getElementsByClassName("button-table")
const BBT  = document.getElementsByClassName("button-button")
const BF  = document.getElementsByClassName("button-form")
const BD  = document.getElementsByClassName("button-div")
const BN  = document.getElementsByClassName("button-nav")
const BM  = document.getElementsByClassName("button-main")
const BB  = document.getElementsByClassName("button-body")
const BX  = document.getElementsByClassName("button-element")

/*
Elements Alterable    H1     P     OL   UL    Button Table Form  DIV   NAV   MAIN  BODY Element Classes

                    MCH1, MCP,  MCOL, MCUL,  MCBT,  MCT,  MCF,  MCD,  MCN,  MCM,  MCB,  MCX    Color
                    MBCH1,MBCP, MBCOL,MBCUL, MBBTN, MBCT, MBCF, MBCD, MBCN, MBCM, MBCB, MBCX   Bg-Color
                    MMCH1,MMCP, MMCOL,MMCUL, MMCBT, MMCT, MMCF, MMCD, MMCN, MMCM, MMCB, MMCX   Mouse Cursor
                    MBH1, MBP,  MBOL, MBUL,  MBBT, MBT,  MBF,  MBD,  MBN,  MBM,  MBB,  MBX     Border
                    MFH1, MFP,  MFOL, MFUL,  MFBT,  MFT,  MFF,  MFD,  MFN,  MFM,  MFB,  MFX    Font-Familly
                    MPH1, MPP,  MPOL, MPUL,  MPBT,  MPT,  MPF,  MPD,  MPN,  MPM,  MPB,  MPX    Padding
                    MWH1, MWP,  MWOL, MWUL,  MWBT,  MWT,  MWF,  MWD,  MWN,  MWM,  MWB,  MWX    Width   
                    MIH1, MIP,  MIOL, MIUL,  MIBT,  MIT,  MIF,  MID,  MIN,  MIM,  MIB,  MIX    Inner       
                    MSH1, MSP,  MSOL, MSUL,  MSBT,  MST,  MSF,  MSD,  MSN,  MSM,  MSB,  MSX    Specific
*/

//Declaration of inputs IDs

//Color
const MCH1 = document.getElementById("MCH1");
const MCP  = document.getElementById("MCP");
const MCOL = document.getElementById("MCOL");
const MCUL = document.getElementById("MCUL");
const MCBT = document.getElementById("MCBT");
const MCT  = document.getElementById("MCT");
const MCF  = document.getElementById("MCF");
const MCD  = document.getElementById("MCD");
const MCN  = document.getElementById("MCN");
const MCM  = document.getElementById("MCM");
const MCB  = document.getElementById("MCB");
const MCX  = document.getElementById("MCX");


//Bg-Color

const MBCH1 = document.getElementById("MBCH1");
const MBCP  = document.getElementById("MBCP");
const MBCOL = document.getElementById("MBCOL");
const MBCUL = document.getElementById("MBCUL");
const MBBTN = document.getElementById("MBBTN");
const MBCT  = document.getElementById("MBCT");
const MBCF  = document.getElementById("MBCF");
const MBCD  = document.getElementById("MBCD");
const MBCN  = document.getElementById("MBCN");
const MBCM  = document.getElementById("MBCM");
const MBCB  = document.getElementById("MBCB");
const MBCX  = document.getElementById("MBCX");
//Mouse Cursor

const MMCH1 = document.getElementById("MMCH1");
const MMCP  = document.getElementById("MMCP");
const MMCOL = document.getElementById("MMCOL");
const MMCUL = document.getElementById("MMCUL");
const MMCBT = document.getElementById("MMCBT");
const MMCT  = document.getElementById("MMCT");
const MMCF  = document.getElementById("MMCF");
const MMCD  = document.getElementById("MMCD");
const MMCN  = document.getElementById("MMCN");
const MMCM  = document.getElementById("MMCM");
const MMCB  = document.getElementById("MMCB");
const MMCX  = document.getElementById("MMCX");

//Border

const MBH1 = document.getElementById("MBH1");
const MBP  = document.getElementById("MBP");
const MBOL = document.getElementById("MBOL");
const MBUL = document.getElementById("MBUL");
const MBBT = document.getElementById("MBBT");
const MBT  = document.getElementById("MBT");
const MBF  = document.getElementById("MBF");
const MBD  = document.getElementById("MBD");
const MBN  = document.getElementById("MBN");
const MBM  = document.getElementById("MBM");
const MBB  = document.getElementById("MBB");
const MBX  = document.getElementById("MBX");
//Font

const MFH1 = document.getElementById("MFH1");
const MFP  = document.getElementById("MFP");
const MFOL = document.getElementById("MFOL");
const MFUL = document.getElementById("MFUL");
const MFBT = document.getElementById("MFBT");
const MFT  = document.getElementById("MFT");
const MFF  = document.getElementById("MFF");
const MFD  = document.getElementById("MFD");
const MFN  = document.getElementById("MFN");
const MFM  = document.getElementById("MFM");
const MFB  = document.getElementById("MFB");
const MFX  = document.getElementById("MFX");

//Padding


const MPH1 = document.getElementById("MPH1");
const MPP  = document.getElementById("MPP");
const MPOL = document.getElementById("MPOL");
const MPUL = document.getElementById("MPUL");
const MPBT = document.getElementById("MPBT");
const MPT  = document.getElementById("MPT");
const MPF  = document.getElementById("MPF");
const MPD  = document.getElementById("MPD");
const MPN  = document.getElementById("MPN");
const MPM  = document.getElementById("MPM");
const MPB  = document.getElementById("MPB");
const MPX  = document.getElementById("MPX");

// Functions names: alterHeader, alterParagrafy, alterOrdenedList, alterUnordenedList, alterTable, alterForm, alterDiv, alterNav, alterMain, alterBody, alterElement

for (var i = 0 ; i < BH1.length; i++) {
    BH1[i].addEventListener('click' , alterHeader) ; 
 }

 for (var i = 0 ; i < BP.length; i++) {
    BP[i].addEventListener('click' , alterParagrafy) ; 
 }

 for (var i = 0 ; i < BOL.length; i++) {
    BOL[i].addEventListener('click' , alterOrdenedList) ; 
 }

 for (var i = 0 ; i < BUL.length; i++) {
    BUL[i].addEventListener('click' , alterUnordenedList) ; 
 }
 for (var i = 0 ; i < BBT.length; i++) {
   BBT[i].addEventListener('click' , alterButton) ; 
}
 for (var i = 0 ; i < BT.length; i++) {
    BT[i].addEventListener('click' , alterTable) ; 
 }

 for (var i = 0 ; i < BF.length; i++) {
    BF[i].addEventListener('click' , alterForm) ; 
 }

 for (var i = 0 ; i < BD.length; i++) {
    BD[i].addEventListener('click' , alterDiv) ; 
 }

 for (var i = 0 ; i < BN.length; i++) {
    BN[i].addEventListener('click' , alterNav) ; 
 }

 for (var i = 0 ; i < BM.length; i++) {
    BM[i].addEventListener('click' , alterMain) ; 
 }

 for (var i = 0 ; i < BB.length; i++) {
    BB[i].addEventListener('click' , alterBody) ; 
 }

 for (var i = 0 ; i < BX.length; i++) {
    BX[i].addEventListener('click' , alterElement) ; 
 }
/*function changeTheme(){
    console.log("Cliquei");
    changeColor();
    changeText();
}

function changeColor(){
    button.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    brand.classList.toggle("dark-mode");
}

function changeText()
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains('dark-mode')){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const nav = document.getElementById('nav');
const brand = document.getElementById('brand')
console.log(nav);
console.log(brand);
button.addEventListener('click', changeTheme);
*/
