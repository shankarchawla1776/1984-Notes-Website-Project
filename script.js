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

   const words = text.split(/\s+/); // Split the text into words
   return words.some(word => sinfulWords.includes(word.toLowerCase()));
};

notesContainer.addEventListener("click", function(e){ 
   const inputText = inputBox.innerText;
   
   if (containsSinfulWord(inputText)) {
       alert("This note contains a sinful word!");
   }

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
