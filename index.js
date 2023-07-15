// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
/**
 * fruits.forEach(function(e){
  console.log('I want to eat a ' + e); 
}); 
 */

// methode 2 (fonction fléché) 
fruits.forEach(fruitsItems => console.log('I like ' + fruitsItems)); 