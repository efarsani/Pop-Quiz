let score = 0;

// Welcome message
alert("Welcome to Sachi's Pop Quiz!");

// Question 1
const answer1 = prompt(
  "What breed is Sachi?\n" +
    "1. Golden Retriever\n" +
    "2. Pomeranian\n" +
    "3. Chihuahua",
);

if (answer1 === "2") {
  score++;
  alert("Correct!");
} else if (answer1 === "1" || answer1 === "3") {
  alert("Incorrect! Sachi is a Pomeranian.");
} else {
  alert("Invalid input! Please enter 1, 2, or 3.");
}

// Question 2
const answer2 = prompt(
  "What month is Sachi's birthday?\n" +
    "1. February\n" +
    "2. June\n" +
    "3. December",
);

if (answer2 === "1") {
  score++;
  alert("Correct!");
} else if (answer2 === "2" || answer2 === "3") {
  alert("Incorrect! Her birthday is in February.");
} else {
  alert("Invalid input! Please enter 1, 2, or 3.");
}

// Question 3
const answer3 = prompt(
  "What breed group does a Pomeranian belong to?\n" +
    "1. Sporting\n" +
    "2. Herding\n" +
    "3. Toy",
);

if (answer3 === "3") {
  score++;
  alert("Correct!");
} else if (answer3 === "1" || answer3 === "2") {
  alert("Incorrect! Pomeranians belong to the Toy group.");
} else {
  alert("Invalid input! Please enter 1, 2, or 3.");
}

// Final score
if (score === 0) {
  alert("You scored 0 out of 3. Keep practicing!");
} else if (score === 3) {
  alert("Perfect score! You got all 3 correct!");
} else {
  alert("Good job! You scored " + score + " out of 3!");
}
