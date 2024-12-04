const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  console.log("After destructivelyAppendCat:", cats);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  console.log("After destructivelyPrependCat:", cats);
}

function destructivelyRemoveLastCat() {
  cats.pop();
  console.log("After destructivelyRemoveLastCat:", cats);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  console.log("After destructivelyRemoveFirstCat:", cats);
}

function appendCat(name) {
  const result = [...cats, name];
  console.log("After appendCat:", result);
  return result;
}

function prependCat(name) {
  const result = [name, ...cats];
  console.log("After prependCat:", result);
  return result;
}

function removeLastCat() {
  const result = cats.slice(0, -1);
  console.log("After removeLastCat:", result);
  return result;
}

function removeFirstCat() {
  const result = cats.slice(1);
  console.log("After removeFirstCat:", result);
  return result;
}

// Call the functions
destructivelyAppendCat("Ralph");
destructivelyPrependCat("Bob");
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
appendCat("Felix");
prependCat("Luna");
removeLastCat();
removeFirstCat();
