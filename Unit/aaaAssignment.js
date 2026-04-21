// 1. Greeting fallback

function greet(name) {
return name || "Guest";
}
test('returns Guest when name is empty', () => {
// Arrange
const name = "";
// Act
const result = greet(name);
// Assert
expect(result).toBe("Guest");
});

// 2. Boolean toggle

function toggle(value) {
return !value;
}

test('toggles boolean value', () => {
// Arrange
const input = true;
// Act
const result = toggle(input);
// Assert
expect(result).toBe(false);
});

// 3. Add item to array

function addItem(arr, item) {
arr.push(item);
return arr;
}
test('adds item to array', () => {
// Arrange
const arr = [1, 2];
// Act
const result = addItem(arr, 3);
// Assert
expect(result).toEqual([1, 2, 3]);
});

// 4. Remove item from array

function removeItem(arr, item) {
return arr.filter(i => i !== item);
}
test('removes item from array', () => {
// Arrange
const arr = ['a', 'b'];
// Act
const result = removeItem(arr, 'a');
// Assert
expect(result).toEqual(['b']);
});



// 5. Check password length

function isValidPassword(password) {
  return password.length >= 6;
}

test('returns true for valid password length', () => {
  // Arrange
  const password = "HeLeN1&*1";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(true);
});










//Stage 3: Real QA Thinking (Creating New Tests)

//Function 1: isValidPassword

function isValidPassword(password) {
  return password.length >= 6;
}

test('isValidPassword: returns true for valid password (Positive)', () => {
  // Arrange
  const password = "HeLeN1&*1";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(true);
});

test('isValidPassword: returns false for short password (Negative)', () => {
  // Arrange
  const password = "123";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(false);
});

test('isValidPassword: returns true for exactly 6 characters (Boundary)', () => {
  // Arrange
  const password = "123456";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(true);
});

test('isValidPassword: returns false for empty string (Edge)', () => {
  // Arrange
  const password = "";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(false);
});

test('isValidPassword: returns true for password with spaces (Boundary)', () => {
  // Arrange
  const password = "a b c d e";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(true);
});

// Function 2: containsWord
function containsWord(sentence, word) {
  return sentence.includes(word);
}

test('containsWord: returns true when word is present (Positive)', () => {
  // Arrange
  const sentence = "I love coding";
  const word = "love";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(true);
});

test('containsWord: returns false when word is missing (Negative)', () => {
  // Arrange
  const sentence = "I love coding";
  const word = "coffee";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(false);
});

test('containsWord: returns false due to case sensitivity (Boundary)', () => {
  // Arrange
  const sentence = "I love coding";
  const word = "Love";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(false);
});

test('containsWord: returns true for an empty word string (Edge)', () => {
  // Arrange
  const sentence = "I love coding";
  const word = "";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(true);
});

test('containsWord: returns false for empty sentence (Edge)', () => {
  // Arrange
  const sentence = "";
  const word = "hello";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(false);
});

//Function 3: addItem
function addItem(arr, item) {
  arr.push(item);
  return arr;
}

test('addItem: adds a number to the array (Positive)', () => {
  // Arrange
  const arr = [1, 2];
  const item = 3;
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toEqual([1, 2, 3]);
});

test('addItem: adds an item to an empty array (Edge)', () => {
  // Arrange
  const arr = [];
  const item = "first";
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toEqual(["first"]);
});

test('addItem: adds a duplicate item (Boundary)', () => {
  // Arrange
  const arr = ["apple"];
  const item = "apple";
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toEqual(["apple", "apple"]);
});

test('addItem: adds a null value (Edge)', () => {
  // Arrange
  const arr = [1];
  const item = null;
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toEqual([1, null]);
});

test('addItem: adds a large number (Positive)', () => {
  // Arrange
  const arr = [100];
  const item = 999999;
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toEqual([100, 999999]);
});


