// Declaration of pokemon array with each object 
let pokemonRepository = (function()  {
  let pokemonList = [
  { name: 'Bulbasaur',
     Height: 7, 
     type: ['Grass', 'Monster'] },
  { name: 'Pikachu',
     Height: 4, 
     type: ['Electric'] },
  { name: 'Raticate',
     Height: 7,
      type: ['Normal'] }
];
   return {
      add: function() {
         pokemonList.push(pokemon);
      },
      getAll:function() {
         return pokemonList;
      }
   };
})();


// For loop to print out the details of each pokemon 
 for (  let i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + `${pokemonList[i].Height}` + "</p")
 }

 // ForEach method to print out details of each pokemon
 pokemonRepository.getAll().forEach(function(pokemon) {
   document.write("<p>" + `${pokemon.name}: ${pokemon.Height}`);
 });
 
 // For loop to print out which pokemon is the biggest
 for (  let i = 0; i < pokemonList.length;  i++) {
   if (pokemonList[i].Height >6) {
      document.write("<p>"  +  `${pokemonList[i].name} Wow, that's big` + "</p")
   }
 }
 