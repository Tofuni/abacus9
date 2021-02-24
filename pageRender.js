// render website elements

elemSelector("#navbar").innerHTML = `
    <img src="assets/img/logo.png" />
    <ul>
        <li onclick="confirmEvent(navi, 'this tab will redirect to the abacus9 GitHub repository; continue to (https://github.com/Tofuni/abacus9)?', 'https://github.com/Tofuni/abacus9')">GitHub Repo</li>
        <li onclick="toggleBanner()">About</li>
    </ul>
    <div id="banner" style="display:none">
        <p id="abacus9Description"></p>
        <button onclick="hideElem(elemSelector('#banner'))">close</button>
    </div>`;

elemSelector("#abacus9Description").innerHTML = `
    abacus9 is a development side project i'm currently working on during free time; looking to build additional features over time and also welcoming feedback on the applet too (･‿･✿)
    <br><br>
    please feel free to send feedback to <a href="mailto:tofuni.dev@gmail.com">(tofuni.dev@gmail.com)</a> and let me know if the applet has been useful or if there's any possible improvements that could be made, thanks!
    <br><br>`;

elemSelector("#soroban").innerHTML = `
    <p class="sorobanText" id="sorobanTitle">Soroban (そろばん)</p>
    <p class="sorobanText">you can use the up/down (&#9661/&#9651) buttons on the abacus rows to modify the abacus values</p>
    <p class="sorobanText" id="sorobanDescription">background - each row in the abacus represents a digit; the top bead has a value of 5 while each of the bottom beads has a value of 1. a number is counted when beads are positioned towards the middle beam <span class="eventText" onclick="hideElem(elemSelector('#sorobanDescription'))">(hide description)</span></p>
    <div id="sorobanAbacus"></div>
    <div id="sorobanAbacusValue"></div>
    <div id="sorobanMatch">
        <div id="sorobanMatchDescription"></div>
        <div id="sorobanMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#suanpan").innerHTML = `
    <p class="suanpanText" id="suanpanTitle">Suanpan (算盘)</p>
    <p class="suanpanText">you can use the up/down (&#9661/&#9651) buttons on the abacus rows to modify the abacus values</p>
    <p class="suanpanText" id="suanpanDescription">background - each row in the abacus represents a digit; each of the top beads has a value of 5 while each of the bottom beads has a value of 1. a number is counted when beads are positioned towards the middle beam <span class="eventText" onclick="hideElem(elemSelector('#suanpanDescription'))">(hide description)</span></p>
    <div id="suanpanAbacus"></div>
    <div id="suanpanAbacusValue"></div>
    <div id="suanpanMatch">
        <div id="suanpanMatchDescription"></div>
        <div id="suanpanMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#binary").innerHTML = `
    <p class="binaryText" id="binaryTitle">Binary abacus</p>
    <p class="binaryText">you can use the up/down (&#9661/&#9651) buttons on the abacus rows to modify the abacus values</p>
    <p class="binaryText" id="binaryDescription">background - each row in the abacus represents a binary digit; a bead on the top represents the value of 1 while a bead on the bottom represents a value of 0 <span class="eventText" onclick="hideElem(elemSelector('#binaryDescription'))">(hide description)</span></p>
    <div id="binaryAbacus"></div>
    <div id="binaryAbacusValue"></div>
    <div id="binaryMatch">
        <div id="binaryMatchDescription"></div>
        <div id="binaryMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#footer").innerHTML = `
    <span>developed by Tofuni</span>
    <br><br>
    <span>abacus9 source code is available on <a target="_blank" href="https://github.com/Tofuni/abacus9">GitHub</a> (･‿･✿)</span>
    <br><br>
    <span>email: <a href="mailto:tofuni.dev@gmail.com">(tofuni.dev@gmail.com)</a></span>`;

// render abacus type-specific elements

["soroban","suanpan","binary"].forEach(function(a) {
    elemSelector("#"+a+"MatchDescription").innerHTML = `
        <span>practice exercise - set the abacus to a randomized number </span>
        <button onclick="`+a+`Match()">start practice</button>`;
    
    elemSelector("#"+a+"MatchActive").innerHTML = `
        <p id="`+a+`MatchNumber"></p>
        <span id="`+a+`MatchSuccess"></span><p id="`+a+`MatchResult"></p><button id='`+a+`MatchAgain' onclick='`+a+`Match()'>practice again</button>
        <button onclick="`+a+`MatchExit()">exit `+a+` match practice</button>`;
})