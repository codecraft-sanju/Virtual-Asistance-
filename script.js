let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let btngood = document.querySelector('#btngood')
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}

window.addEventListener('load',() => {
    wishMe()
})

// window.onload = () =>{
//     speak("hello just for code")
// }

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()

// recognition.onresult=(event)=>{
//   let currentIndex = event.resultIndex
//   let transcript=event.results[currentIndex][0].transcript
//   content.innerText = transcript
//   takeCommand(transcript.toLowerCase())
// }
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript.toLowerCase(); // Force lowercase here
    content.innerText = transcript;
    takeCommand(transcript);
};


btn.addEventListener("click",() => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display="block"
})
// btn.addEventListener("click", () => {
//     recognition.start();
//     btn.style.display = "none";
//     voice.style.display = "block";
//});

recognition.onend = () => {
    btn.style.display = "flex";
    voice.style.display = "none";
};
btngood.addEventListener("click", () => {
    wishMe()
})


function takeCommand(message) {
    // btn.style.display = "flex"
    // voice.style.display = "none"
           if(message.includes("hello") || message.includes("hey")){
                speak("hello sir,what can i help you?")
              }
           else if(message.includes("who are you") || message.includes("hu r u")){
                speak("i am virtual assistance , created by Sanjay sir")
            }
            else if (message.includes("open youtube")) {
                speak("opening YouTube")
                window.open("https://www.youtube.com/", "_blank")
           }
           else if (message.includes("open calculator")) {
               speak("opening calculator")
               window.open("calculator://")
           }
            else if(message.includes("open google")){
                speak("opening google")
                window.open("https://www.google.com","_blank")
            }
            else if(message.includes("open instagram")){
                speak("opening instagram")
                window.open("https://www.instagram.com","_blank")
           }
           else if (message.includes("time")) {
               let time = new Date().toLocaleTimeString();
               speak(`The current time is ${time}`);
           }
           else if (message.includes("date")) {
               let date = new Date().toLocaleDateString();
               speak(`Today's date is ${date}`);
           }

            else if(message.includes("open whatsapp")){
                speak("opening instagram")
                window.open("whatsapp://")
            }
            else if(message.includes("open facebook")){
                speak("opening instagram")
                window.open("https://www.facebook.com","_blank")
            }
            else if (message.includes("tell me about sanjay") || message.includes("introduce sanjay")){
                speak("sanjay is a talented individual from rajasthan, with a strong interest in technology and software development. would you like to know more about sanjay")
            }
            else if(message.includes("yes" ) || message.includes("yas" )|| message.include(" sure ")){
                speak("he has also experience in backend devlopment,especially with java and enjoys working on projects that integrate both fronted and backend systems.")
    }
           else {
               speak(` this is what i found on internet regarding ${message.replace("shifra","")} || ${message.replace("shipra","")} `)
               window.open(` https://www.google.com/search?q=${message.replace("shifra", "")} || ${message.replace("shipra", "")}`,"_blank")
         }
        }



// function takeCommand(message) {
//     if (message.includes("hello")) {
//         speak("Hello sir, what can I help you with?");
//     } else if (message.includes("who are you") || message.includes("hu r u")) {
//         speak("I am a virtual assistant, created by Sanjay sir.");
//     } else if (message.includes("open youtube")) {
//         speak("Opening YouTube");
//         window.location.href = "http://www.youtube.com";
//     } else if (message.includes("open google")) {
//         speak("Opening Google");
//         window.location.href = "http://www.google.com";
//     } else if (message.includes("open instagram")) {
//         speak("Opening Instagram");
//         window.location.href = "http://www.instagram.com";
//     } else if (message.includes("open whatsapp")) {
//         speak("Opening WhatsApp");
//         window.location.href = "https://www.whatsapp.com";
//     } else if (message.includes("open facebook")) {
//         speak("Opening Facebook");
//         window.location.href = "https://www.facebook.com";
//     } else if (message.includes("tell me about sanjay") || message.includes("introduce sanjay")) {
//         speak("Sanjay is a talented individual from Rajasthan, with a strong interest in technology and software development. Would you like to know more about Sanjay?");
//     } else if (message.includes("yes")) {
//         speak("He has experience in backend development, especially with Java, and enjoys working on projects that integrate both front-end and back-end systems.");
//     }
// }
























































































































//  let btn=document.querySelector("#btn")
//  let content=document.querySelector("#content")
//  let btngood=document.querySelector('#btngood')

// function speak(text){
//     let text_speak=new SpeechSynthesisUtterance(text)
//     text_speak.rate=1
//     text_speak.pitch=1
//     text_speak.volume=1
//     text_speak.lang="hi-GB"
//     window.speechSynthesis.speak(text_speak)
// }
// function wishMe(){
//     let day=new Date()
//     let hours=day.getHours()
//     console.log("Current hours:", hours);
//     if(hours>=0 && hours<12){
//         speak("Good Morning Sir")
//     }
//     else if(hours>=12 && hours<16){
//         speak("Good Afternoon Sir");
//     }else{
//         speak("Good Evening Sir");
//     }
// }
// // window.addEventListener ('DOMContentLoaded', () => {
// // wishMe();

// // })


// // window.addEventListener('click',()=>{
// //     wishMe()
// // })
// let speechRecognization=window.SpeechRecognition || window.webkitSpeechRecognition
// let recognition=new speechRecognization()

// recognition.onresult=(event) => {
//        let currentIndex = event.resultIndex
//        let transcriptevent =  event.results[currentIndex][0].transcript
//        content.innerText()=transcriptevent
//        takeCommand(transcript.toLowerCase())
// }
// btn.addEventListener("click",() => {
//   recognition.start()
// })

// btngood.addEventListener("click",()=>{
//     wishMe()
// })





// function takeCommand(message){
//     if(message.include("hello") || message.include("hey")){
//         speak("hello sir, what can i help you?")
//     }
//     else if(message.includes("who are you")){
//         speak("i am virtual assistance , created by Sanjay sir")
//     }
//     else if(message.includes("open youtube")){
//         speak("opening youtube")
//         window.open("http://www.youtube.com")
//     }
//     else if(message.includes("open google")){
//         speak("opening google")
//         window.open("http://www.google.com")
//     }
//     else if(message.includes("open instagram")){
//         speak("opening instagram")
//         window.open("http://www.instagram.com")
//     }
//     else if(message.includes("open whatapp")){
//         speak("opening instagram")
//         window.open("http://https://www.whatsapp.com")
//     }
//     else if(message.includes("open facebook")){
//         speak("opening instagram")
//         window.open("http://https://www.facebook.com")
//     }
//     else if (message.includes("tell me about sanjay" ||message.include("introduce sanjay"))){
//         speak("sanjay is a talented individual from rajasthan, with a strong interest in technology and software development. would you like to know more about sanjay")
//     }
//     else if(message.includes("yes")){
//         speak("he has also experience in backend devlopment,especially with java and enjoys working on projects that integrate both fronted and backend systems.")
//     }
// }











// let btn = document.querySelector("#btn");
// let content = document.querySelector("#content");
// let btngood = document.querySelector('#btngood');
// let voice = document.querySelector("#voice");

// function speak(text) {
//     let text_speak = new SpeechSynthesisUtterance(text)
//     text_speak.rate = 1
//     text_speak.pitch = 1
//     text_speak.volume = 1
//     text_speak.lang = "en-GB"
//     window.speechSynthesis.speak(text_speak)
// }

// function wishMe() {
//     let day = new Date()
//     let hours = day.getHours()
//     if (hours >= 0 && hours < 12) {
//         speak("Good Morning Sir")
//     } else if (hours >= 12 && hours < 16) {
//         speak("Good Afternoon Sir")
//     } else {
//         speak("Good Evening Sir")
//     }
// }

// let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// let recognition = new speechRecognition()

// recognition.onresult = (event) => {
//     let currentIndex = event.resultIndex
//     let transcript = event.results[currentIndex][0].transcript
//     content.innerText = transcript;
//     takeCommand(transcript.toLowerCase())
// };

// btn.addEventListener("click", () => {
//     recognition.start();
//     btn.style.display="none"
//     voice.style.display="block"
// });

// btngood.addEventListener("click", () => {
//     wishMe();
//     btngood.classList.add('animate-button');
// });

// btngood.addEventListener("animationend", () => {
//     btngood.classList.remove('animate-button')
// });

// function takeCommand(message) {
//      btn.style.display="flex"
//       voice.style.display="none"
//     if (message.includes("hello") || message.includes("hey")) {
//         console.log('hello')
//         speak("hello sir, what can I help you with?");
//     }
    
//     else if (message.includes("who are you")) {
//         speak("I am a virtual assistant, created by Sanjay sir.")
//     } 
    
//     else if (message.includes("open youtube")) {
//         speak("opening youtube")
//         window.open("http://www.youtube.com")
//     }
    
//     else if (message.includes("open calculator")) {
//         speak("opening calculator");
//         window.open("calculator://");
//     }
    
//     else if (message.includes("open google")) {
//         speak("opening Google")
//         window.open("http://www.google.com")
//     } 
    
//     else if (message.includes("open instagram")) {
//         speak("opening Instagram")
//         window.open("http://www.instagram.com")
//     }
    
//     else if (message.includes("open whatsapp")) {
//         speak("opening WhatsApp")
//         window.open("whatapp://")
//     } 
    
//     else if (message.includes("time")) {
//         let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
//         speak("time")
//     }

//     else if (message.includes("date")) {
//         let date=new Date().toLocaleString(undefined,{day:"numeric",month:"sort"})
//         speak(date)
//     }
    
//     else if (message.includes("open facebook")) {
//         speak("opening Facebook")
//         window.open("https://www.facebook.com")
//     } 
    
//     else if (message.includes("tell me about sanjay") || message.includes("introduce sanjay")) {
//         speak("Sanjay is a talented individual from Rajasthan, with a strong interest in technology and software development. Would you like to know more about Sanjay?");
//     } 
    
//     else if (message.includes("yes")) {
//         speak("He also has experience in backend development, especially with Java, and enjoys working on projects that integrate both front-end and back-end systems.");
//     }
   
//     else{
//         // let finalText="this is what i found on internet regarding" + message.replace("shifra","") || message.replace("shipra","")
//         // speak(finalText)
//         // window.open('https://www.google.com/search?q=${message.replace("shipra","")}',"_blank")
        
//             let finalText = "This is what I found on the internet regarding " + message.replace(/shipra|shifra/gi, "")
//             speak(finalText)
//             let query = message.replace(/shipra|shifra/gi, "").trim()  // Remove unnecessary words and trim whitespace
//             window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank")
//         }
        

//     }



