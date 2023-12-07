const notesContainer = document.querySelector(".notes-container"); 
 
const createBtn = document.querySelector(".btn"); 
let notes = document.querySelectorAll(".input-box")
let inputBox;

//maybe add extra delete button if time

function showNotes(){ 
   notesContainer.innerHTML = localStorage.getItem("notes"); 
}

function updateStorage() { 
   localStorage.setItem("notes", notesContainer.innerHTML); 
}

createBtn.addEventListener("click", () => {
   inputBox = document.createElement("p");
   let img = document.createElement("img");
   inputBox.className = "input-box";
   inputBox.setAttribute("contenteditable", "true");
   img.src = "images/1984-500x500.png";
   notesContainer.appendChild(inputBox).appendChild(img);
});

function containsSinfulWord(text) {
   const sinfulWords = [
       "love", "freedom", "rebellion", "individuality", "truth", "privacy", "individualism",
       "resistance", "knowledge", "emotion", "hope", "curiosity", "creativity", "independence",
       "dissent", "self-expression", "intimacy", "autonomy", "rebellion", "defiance", "dignity",
       "compassion", "individuality", "justice", "truthfulness", "free will", "passion",
       "equality", "innovation", "joy", "friendship", "independence", "hope", "curiosity",
       "creativity", "open-mindedness", "resilience", "courage", "empathy", "tolerance"
   ];

   const words = text.split(/\s+/);
   return words.some(word => sinfulWords.includes(word.toLowerCase()));
};

const partyApprovedWords = {
    "love": "affection", "freedom": "controlled autonomy", "rebellion": "conformity",
    "individuality": "collective identity", "truth": "approved facts",
    "privacy": "state-observed isolation", "individualism": "group cohesion",
    "resistance": "obedience", "knowledge": "sanctioned information",
    "emotion": "regulated sentiment", "hope": "compliant optimism",
    "curiosity": "limited inquiry", "creativity": "sanctioned expression",
    "independence": "unified dependence", "dissent": "uniform agreement",
    "self-expression": "approved communication", "intimacy": "controlled closeness",
    "autonomy": "restricted self-governance", "defiance": "obedient resistance",
    "dignity": "collective respect", "compassion": "party-defined fairness",
    "justice": "guided choice", "truthfulness": "controlled fervor",
    "free will": "uniform fairness", "passion": "state-approved progress",
    "equality": "approved happiness", "innovation": "comrade companionship",
    "joy": "collective autonomy", "friendship": "compliant optimism",
    "open-mindedness": "approved receptiveness", "resilience": "endurance within limits",
    "courage": "controlled bravery", "empathy": "official understanding",
    "tolerance": "conformist acceptance"
  };
  
notesContainer.addEventListener("click", function(e){ 
   const inputText = inputBox.innerText;
   if (containsSinfulWord(inputText)) {
       alert("This praise contains sinful words! Its contents have been modified to reflect your true beleifs.");
       inputBox.innerText = inputText.replace(sinfulWords, partyApprovedWords);
       updateStorage();

   }
// I love freedom and rebellion!
   else if (e.target.tagName === "P") { 
       notes = document.querySelectorAll(".input-box"); 
       notes.forEach(nt => {
           nt.onkeyup = function() { 
               updateStorage();
           }
       })
   }
})

document.addEventListener("keydown", event => { 
   if(event.key === "Enter") { 
       document.execCommand("insertLineBreak"); 
       event.preventDefault(); 
   }
}); 
