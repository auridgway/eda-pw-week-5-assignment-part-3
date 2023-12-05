console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  // your code here...
  let albumInfo = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(albumInfo);
  return albumInfo;
}

console.log(addToCollection(myCollection, 'All Of Me', 'Masayoshi Takanaka', 1979));
console.log(addToCollection(myCollection, 'Brasilian Skies', 'Masayoshi Takanaka', 1979));
console.log(addToCollection(myCollection, 'Salad Days', 'Mac Demarco', 2014));
console.log(addToCollection(myCollection, 'First Impresions Of Earth', 'The Strokes', 2005));
console.log(addToCollection(myCollection, 'Angles', 'The Strokes', 2011));
console.log(addToCollection(myCollection, 'Is This It', 'The Strokes', 2001));

function showCollection(collection){
  for ( item in collection ){
   console.log(collection[item].title + ' by ' + collection[item].artist + ', published in ' + collection[item].yearPublished);
  }
}

showCollection(myCollection);

function findByArtist(collection, artist){
  let isFound = [];
  for (item in collection){
    if (collection[item].artist === artist){
      isFound.push(collection[item]);
    } 
  }
  return isFound;
}

console.log(findByArtist(myCollection, 'Masayoshi Takanaka'));
console.log(findByArtist(myCollection, 'Mac Demarco'));

function search(collection, searchCriteria){
  let isFound = [];
  for (item in collection){
    if (collection[item].artist === searchCriteria.artist && collection[item].yearPublished === searchCriteria.year){
      isFound.push(collection[item]);
    }
  }
  if (searchCriteria.artist == undefined || searchCriteria.year == undefined || searchCriteria == undefined){
    return collection;
  }
  return isFound;
}

console.log('Testing search function:')
console.log(search(myCollection, {artist: 'Mac Demarco', year: 2014}));
console.log(search(myCollection, {artist: 'Mac Demarco', year: 2013}));
console.log(search(myCollection, {artist: 'Masayoshi Takanaka', year: 1979}));



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
