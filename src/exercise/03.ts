// Les Types de bases
// http://localhost:3000/alone/final/01.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {initExo2} from './helper/exerciseHelper'
const divExoName = 'formExoFinal3'
initExo2(divExoName)

// ✔️ Début de l'exercice

// 🐶 récupurère tous les champs 'input' avec "querySelectorAll"
// 🤖
const inputs = document.querySelectorAll('input')

// 🐶 parcours la liste avec foreach
// 🤖
inputs.forEach(el => {
  if (el.type == "text") el.type = "color"
})

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
