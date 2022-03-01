
function word(str) { 
    return str.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      const wordCount ={};
      const length = word.length;
   word=para.replace(/[.,]/g, "");
word=para.toLowerCase();
      return count;
    }, {});
  } 
  
  console.log(); 
let para = "n Harry Potter and the Chamber of Secrets, Dobby repeatedly assumes control over events by intercepting Ron’s and Hermione’s letters during the summer; by sealing the barrier to Platform 93⁄4, causing Harry to miss the Hogwarts Express; and by sending a Bludger after Harry in a Quidditch match, breaking his wrist. Yet again, in Harry Potter and the Prisoner of Azkaban, many adults intercede while attempting to protect Harry from perceived danger, as Snape observes: “Everyone from the Minister of Magic downward has been trying to keep famous Harry Potter safe from Sirius Black” (284). All these characters, as enactors of fate, unknowingly drive Harry toward his destiny by attempting to control or to direct his life, while themselves controlled and directed by fate.";

let result = word(para);
console.log(para.match(/(\w+)/g).length);
console.log(result);