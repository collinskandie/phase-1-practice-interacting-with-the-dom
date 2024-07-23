// Global variables
let counter = document.getElementById("counter");
let count = 0;
let isPaused = false;
let interval;

// Function to start the timer
function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      count++;
      counter.textContent = count;
    }
  }, 1000);
}

// Start the timer when the page loads
document.addEventListener("DOMContentLoaded", () => {
  startTimer();
});

// Increment and decrement functionality
document.getElementById("plus").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

document.getElementById("minus").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// Like functionality
document.getElementById("heart").addEventListener("click", () => {
  const likes = document.querySelector(".likes");
  let existingLike = document.getElementById(`like-${count}`);

  if (existingLike) {
    let likeCount = parseInt(existingLike.dataset.likes, 10);
    likeCount++;
    existingLike.dataset.likes = likeCount;
    existingLike.textContent = `${count} has been liked ${likeCount} times`;
  } else {
    let newLike = document.createElement("li");
    newLike.id = `like-${count}`;
    newLike.dataset.likes = 1;
    newLike.textContent = `${count} has been liked 1 time`;
    likes.appendChild(newLike);
  }
});

// Pause and resume functionality
document.getElementById("pause").addEventListener("click", () => {
  const pauseButton = document.getElementById("pause");
  if (isPaused) {
    isPaused = false;
    pauseButton.textContent = "pause";
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
  } else {
    isPaused = true;
    pauseButton.textContent = "resume";
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
  }
});

// Comment functionality
document.getElementById("comment-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("list");
  const newComment = document.createElement("p");
  newComment.textContent = commentInput.value;
  commentList.appendChild(newComment);
  commentInput.value = "";
});
