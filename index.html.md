# UIT
ULTRA INTELLIGENT TECHNOLOGY
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UIT — Ultra Intelligent Technology</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Inter,Arial,sans-serif;
}

body{
    background:#030407;
    color:#fff;
    min-height:100vh;
    overflow:hidden;
}

.app{
    display:flex;
    height:100vh;
}

/* SIDEBAR */

.sidebar{
    width:250px;
    background:#07090d;
    border-right:1px solid #191d27;
    padding:22px 16px;
    display:flex;
    flex-direction:column;
}

.logo{
    display:flex;
    align-items:center;
    gap:12px;
    margin-bottom:35px;
}

.logoIcon{
    width:42px;
    height:42px;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    font-size:20px;
    background:linear-gradient(135deg,#171b3c,#090b13);
    border:1px solid #5963ff;
    box-shadow:0 0 30px #4f58ff25;
}

.logoText h2{
    font-size:20px;
    letter-spacing:3px;
}

.logoText span{
    font-size:7px;
    color:#686f80;
    letter-spacing:1.5px;
}

.newChat{
    background:#11151d;
    border:1px solid #252b38;
    color:#ddd;
    padding:13px;
    border-radius:11px;
    cursor:pointer;
    margin-bottom:25px;
    text-align:left;
}

.newChat:hover{
    border-color:#5963ff;
}

.sectionTitle{
    color:#555d6c;
    font-size:9px;
    letter-spacing:2px;
    margin:10px;
}

.menu{
    padding:12px;
    color:#777f8f;
    border-radius:9px;
    cursor:pointer;
    font-size:13px;
}

.menu:hover{
    background:#10141b;
    color:#fff;
}

.online{
    margin-top:auto;
    font-size:9px;
    color:#687181;
    letter-spacing:1px;
}

.onlineDot{
    display:inline-block;
    width:7px;
    height:7px;
    background:#52e7a6;
    border-radius:50%;
    margin-right:7px;
    box-shadow:0 0 10px #52e7a6;
}

/* MAIN */

.main{
    flex:1;
    position:relative;
    display:flex;
    flex-direction:column;
    background:
        radial-gradient(circle at 50% 40%,#151936 0%,#080a10 30%,#030407 70%);
}

.topbar{
    height:75px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 30px;
    border-bottom:1px solid #11151c;
}

.title{
    color:#6e7585;
    font-size:9px;
    letter-spacing:3px;
}

.status{
    color:#5de0a3;
    font-size:9px;
    border:1px solid #204936;
    padding:7px 11px;
    border-radius:20px;
}

/* CORE */

.center{
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}

.core{
    width:210px;
    height:210px;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:25px;
}

.ring{
    position:absolute;
    border-radius:50%;
    border:1px solid #5963ff55;
    inset:0;
    animation:spin 12s linear infinite;
}

.ring2{
    inset:18px;
    border-color:#9a65ff44;
    animation-direction:reverse;
    animation-duration:9s;
}

.ring3{
    inset:38px;
    border-color:#45d8ff55;
    animation-duration:6s;
}

.coreCenter{
    width:105px;
    height:105px;
    border-radius:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    background:
        radial-gradient(circle at 35% 30%,#303b91,#11142b 55%,#080912);

    border:1px solid #6871ff;
    box-shadow:
        0 0 60px #5863ff35,
        inset 0 0 30px #6871ff30;
}

.coreCenter strong{
    letter-spacing:5px;
    font-size:22px;
}

.coreCenter small{
    margin-top:5px;
    font-size:7px;
    letter-spacing:2px;
    color:#8b93a8;
}

.active .ring{
    animation-duration:2s;
}

.welcome{
    text-align:center;
}

.welcome .small{
    color:#697185;
    font-size:9px;
    letter-spacing:4px;
}

.welcome h1{
    margin-top:13px;
    font-size:42px;
    font-weight:400;
}

.welcome h1 span{
    font-weight:700;
    background:linear-gradient(90deg,#fff,#7f8aff);
    color:transparent;
    background-clip:text;
}

.welcome p{
    margin-top:10px;
    color:#687081;
    font-size:13px;
}

/* CHAT */

.chat{
    width:min(850px,90%);
    max-height:45vh;
    overflow-y:auto;
    margin:0 auto 20px;
}

.message{
    display:flex;
    gap:12px;
    padding:17px 0;
    border-bottom:1px solid #151922;
}

.avatar{
    width:32px;
    height:32px;
    min-width:32px;
    border-radius:9px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid #30364a;
    color:#8992ff;
    font-size:9px;
}

.message small{
    color:#656d7c;
    letter-spacing:2px;
    font-size:8px;
}

.message p{
    margin-top:7px;
    color:#d8dce5;
    line-height:1.6;
    white-space:pre-wrap;
}

/* COMPOSER */

.composer{
    width:min(850px,90%);
    margin:0 auto 22px;
}

.modes{
    display:flex;
    gap:6px;
    margin-bottom:8px;
    overflow-x:auto;
}

.mode{
    padding:7px 11px;
    background:transparent;
    border:1px solid transparent;
    color:#606979;
    border-radius:7px;
    font-size:8px;
    letter-spacing:1px;
    cursor:pointer;
}

.mode.active{
    background:#12162c;
    border-color:#373f78;
    color:#b5bbff;
}

.inputBox{
    display:flex;
    align-items:center;
    gap:8px;
    background:#0b0e13;
    border:1px solid #292f3b;
    padding:8px;
    border-radius:15px;
    box-shadow:0 15px 50px #0009;
}

.inputBox input{
    flex:1;
    background:none;
    border:none;
    outline:none;
    color:#fff;
    padding:12px;
    font-size:14px;
}

.inputBox input::placeholder{
    color:#4e5665;
}

.voice,
.send{
    width:43px;
    height:43px;
    border-radius:10px;
    border:none;
    cursor:pointer;
}

.voice{
    background:#151922;
    color:#777f91;
}

.voice.active{
    color:#ff6e91;
    box-shadow:0 0 20px #ff6e9122;
}

.send{
    background:#e7eaff;
    color:#080a10;
    font-size:20px;
}

.warning{
    text-align:center;
    margin-top:7px;
    color:#3d4450;
    font-size:8px;
}

@keyframes spin{
    from{transform:rotate(0deg)}
    to{transform:rotate(360deg)}
}

/* MOBILE */

@media(max-width:750px){

    .sidebar{
        display:none;
    }

    .topbar{
        padding:18px;
    }

    .welcome h1{
        font-size:30px;
    }

    .core{
        width:170px;
        height:170px;
    }

    .coreCenter{
        width:85px;
        height:85px;
    }

    .composer,
    .chat{
        width:94%;
    }
}
</style>
</head>

<body>

<div class="app">

    <!-- SIDEBAR -->

    <aside class="sidebar">

        <div class="logo">

            <div class="logoIcon">
                U
            </div>

            <div class="logoText">
                <h2>UIT</h2>
                <span>ULTRA INTELLIGENT TECHNOLOGY</span>
            </div>

        </div>

        <button class="newChat" onclick="newChat()">
            ＋ New Intelligence Session
        </button>

        <div class="sectionTitle">
            SYSTEM
        </div>

        <div class="menu">
            ◈ Intelligence
        </div>

        <div class="menu">
            ◉ Voice Assistant
        </div>

        <div class="menu">
            ⌕ Research
        </div>

        <div class="menu">
            ◇ Code Studio
        </div>

        <div class="menu">
            ▣ File Intelligence
        </div>

        <div class="online">
            <span class="onlineDot"></span>
            UIT SYSTEM ONLINE
        </div>

    </aside>


    <!-- MAIN -->

    <main class="main">

        <div class="topbar">

            <div class="title">
                UIT / INTELLIGENCE CORE
            </div>

            <div class="status">
                ● ONLINE
            </div>

        </div>


        <section class="center">

            <!-- INTELLIGENCE CORE -->

            <div class="core" id="core">

                <div class="ring"></div>
                <div class="ring ring2"></div>
                <div class="ring ring3"></div>

                <div class="coreCenter">

                    <strong>UIT</strong>

                    <small id="coreStatus">
                        READY
                    </small>

                </div>

            </div>


            <!-- WELCOME -->

            <div class="welcome" id="welcome">

                <div class="small">
                    INTELLIGENCE WITHOUT LIMITS
                </div>

                <h1>
                    What should <span>UIT</span><br>
                    accomplish?
                </h1>

                <p>
                    Ask · Create · Research · Code · Translate · Explore
                </p>

            </div>


            <!-- CHAT -->

            <div class="chat" id="chat"></div>

        </section>


        <!-- COMPOSER -->

        <div class="composer">

            <div class="modes">

                <button class="mode active"
                    onclick="changeMode(this,'FAST')">
                    FAST
                </button>

                <button class="mode"
                    onclick="changeMode(this,'THINK')">
                    THINK
                </button>

                <button class="mode"
                    onclick="changeMode(this,'RESEARCH')">
                    RESEARCH
                </button>

                <button class="mode"
                    onclick="changeMode(this,'CREATE')">
                    CREATE
                </button>

                <button class="mode"
                    onclick="changeMode(this,'CODE')">
                    CODE
                </button>

            </div>


            <div class="inputBox">

                <button
                    class="voice"
                    id="voiceButton"
                    onclick="startVoice()">
                    ◉
                </button>

                <input
                    id="input"
                    type="text"
                    placeholder="Command UIT..."
                    onkeydown="handleKey(event)"
                >

                <button
                    class="send"
                    onclick="sendMessage()">
                    ↑
                </button>

            </div>

            <div class="warning">
                UIT can make mistakes. Verify important information.
            </div>

        </div>

    </main>

</div>


<script>

let currentMode = "FAST";

let recognition;

const input = document.getElementById("input");
const chat = document.getElementById("chat");
const welcome = document.getElementById("welcome");
const core = document.getElementById("core");
const coreStatus = document.getElementById("coreStatus");


/* MODE */

function changeMode(button, mode){

    document
        .querySelectorAll(".mode")
        .forEach(x => x.classList.remove("active"));

    button.classList.add("active");

    currentMode = mode;

}


/* SEND */

async function sendMessage(){

    const text = input.value.trim();

    if(!text) return;

    input.value = "";

    welcome.style.display = "none";

    addMessage("YOU", text);

    setCore("THINKING");

    const loading = addMessage(
        "UIT",
        "Thinking..."
    );

    try{

        /*
        REAL API CONNECTION

        Create /api/chat on your backend.

        It should accept:

        {
            message: text,
            mode: currentMode
        }

        and return:

        {
            reply: "AI response"
        }
        */

        const response = await fetch("/api/chat",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                message:text,
                mode:currentMode
            })

        });


        if(!response.ok)
            throw new Error();


        const data = await response.json();

        loading.remove();

        addMessage(
            "UIT",
            data.reply || "No response received."
        );

        speak(data.reply || "");

        setCore("SPEAKING");

        setTimeout(()=>{
            setCore("READY");
        },1500);


    }catch(error){

    console.error("UIT AI Error:", error);

    loading.remove();

    addMessage(
        "UIT",
        "Sorry, I couldn't connect to the AI right now."
    );

    setCore("READY");

}


/* MESSAGE */

function addMessage(sender,text){

    const message = document.createElement("div");

    message.className = "message";

    message.innerHTML = `

        <div class="avatar">
            ${sender === "UIT" ? "U" : "YOU"}
        </div>

        <div>

            <small>
                ${sender === "UIT"
                    ? "UIT • " + currentMode
                    : "YOU"}
            </small>

            <p>${escapeHTML(text)}</p>

        </div>

    `;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;

    return message;

}


/* ESCAPE HTML */

function escapeHTML(text){

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* NEW CHAT */

function newChat(){

    chat.innerHTML = "";

    welcome.style.display = "block";

    setCore("READY");

}


/* ENTER */

function handleKey(event){

    if(event.key === "Enter"){

        sendMessage();

    }

}


/* CORE */

function setCore(status){

    coreStatus.textContent = status;

    if(status !== "READY"){
        core.classList.add("active");
    }else{
        core.classList.remove("active");
    }

}


/* VOICE */

function startVoice(){

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if(!SpeechRecognition){

        alert(
            "Voice recognition is not supported by this browser."
        );

        return;

    }


    if(recognition){

        recognition.stop();

        recognition = null;

        document
            .getElementById("voiceButton")
            .classList.remove("active");

        setCore("READY");

        return;

    }


    recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.continuous = false;

    recognition.interimResults = true;


    recognition.onstart = function(){

        document
            .getElementById("voiceButton")
            .classList.add("active");

        setCore("LISTENING");

    };


    recognition.onresult = function(event){

        let transcript = "";

        for(
            let i = event.resultIndex;
            i < event.results.length;
            i++
        ){

            transcript +=
                event.results[i][0].transcript;

        }

        input.value = transcript;

    };


    recognition.onend = function(){

        document
            .getElementById("voiceButton")
            .classList.remove("active");

        setCore("READY");

        recognition = null;

    };


    recognition.start();

}


/* TEXT TO SPEECH */

function speak(text){

    if(
        !text ||
        !("speechSynthesis" in window)
    ) return;


    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    speech.onstart = function(){

        setCore("SPEAKING");

    };

    speech.onend = function(){

        setCore("READY");

    };

    window.speechSynthesis.speak(speech);

}

</script>

</body>
</html>python3 -m http.server 8000

