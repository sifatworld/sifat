const surpriseButton = document.getElementById('surpriseButton');
const popup = document.getElementById('popup');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Show the proposal popup when the "Click Here" button is clicked
surpriseButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// "Yes" button shows a "LOVE YOU" message in the popup
yesButton.addEventListener('click', () => {
    popup.innerHTML = `<h2>LOVE YOU ❤️</h2><p>আমাকে সবচেয়ে সুখী ব্যক্তি করার জন্য আপনাকে ধন্যবাদ!</p>`;
});

// "No" button shows a "SORRY" message in the popup
noButton.addEventListener('click', () => {
    popup.innerHTML = `<h2>SORRY 😢</h2><p>আমি বুঝতে পারি, এবং আমি সবসময় একসাথে আমাদের মুহূর্তগুলিকে লালন করব.</p>`;
});
