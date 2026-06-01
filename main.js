// Helper functions
const zodiacSigns = [
  { sign: "Aries", start: "03-21", end: "04-19" },
  { sign: "Taurus", start: "04-20", end: "05-20" },
  { sign: "Gemini", start: "05-21", end: "06-20" },
  { sign: "Cancer", start: "06-21", end: "07-22" },
  { sign: "Leo", start: "07-23", end: "08-22" },
  { sign: "Virgo", start: "08-23", end: "09-22" },
  { sign: "Libra", start: "09-23", end: "10-22" },
  { sign: "Scorpio", start: "10-23", end: "11-21" },
  { sign: "Sagittarius", start: "11-22", end: "12-21" },
  { sign: "Capricorn", start: "12-22", end: "01-19" },
  { sign: "Aquarius", start: "01-20", end: "02-18" },
  { sign: "Pisces", start: "02-19", end: "03-20" }
];

const zodiacTraits = [
  {
    sign: "Aries",
    symbol: "♈",
    traits: [
      "Courageous",
      "Energetic",
      "Confident",
      "Independent",
      "Passionate",
      "Determined"
    ]
  },
  {
    sign: "Taurus",
    symbol: "♉",
    traits: [
      "Reliable",
      "Patient",
      "Practical",
      "Loyal",
      "Persistent",
      "Grounded"
    ]
  },
  {
    sign: "Gemini",
    symbol: "♊",
    traits: [
      "Adaptable",
      "Curious",
      "Witty",
      "Expressive",
      "Versatile",
      "Social"
    ]
  },
  {
    sign: "Cancer",
    symbol: "♋",
    traits: [
      "Compassionate",
      "Intuitive",
      "Protective",
      "Loyal",
      "Empathetic",
      "Nurturing"
    ]
  },
  {
    sign: "Leo",
    symbol: "♌",
    traits: [
      "Charismatic",
      "Creative",
      "Confident",
      "Generous",
      "Optimistic",
      "Ambitious"
    ]
  },
  {
    sign: "Virgo",
    symbol: "♍",
    traits: [
      "Analytical",
      "Practical",
      "Detail-Oriented",
      "Reliable",
      "Organized",
      "Thoughtful"
    ]
  },
  {
    sign: "Libra",
    symbol: "♎",
    traits: [
      "Diplomatic",
      "Charming",
      "Fair-Minded",
      "Cooperative",
      "Graceful",
      "Balanced"
    ]
  },
  {
    sign: "Scorpio",
    symbol: "♏",
    traits: [
      "Passionate",
      "Determined",
      "Resourceful",
      "Intuitive",
      "Focused",
      "Mysterious"
    ]
  },
  {
    sign: "Sagittarius",
    symbol: "♐",
    traits: [
      "Adventurous",
      "Optimistic",
      "Independent",
      "Curious",
      "Honest",
      "Open-Minded"
    ]
  },
  {
    sign: "Capricorn",
    symbol: "♑",
    traits: [
      "Disciplined",
      "Responsible",
      "Ambitious",
      "Patient",
      "Practical",
      "Dependable"
    ]
  },
  {
    sign: "Aquarius",
    symbol: "♒",
    traits: [
      "Innovative",
      "Independent",
      "Intellectual",
      "Visionary",
      "Original",
      "Humanitarian"
    ]
  },
  {
    sign: "Pisces",
    symbol: "♓",
    traits: [
      "Compassionate",
      "Creative",
      "Intuitive",
      "Dreamy",
      "Gentle",
      "Imaginative"
    ]
  }
];

// Arrays to construct the horoscope message
const openings = [
  "The stars suggest",
  "Cosmic energies reveal",
  "Your celestial alignment indicates",
  "The universe whispers",
  "Today's planetary motion suggests",
  "A distant constellation hints",
  "The cosmic winds reveal",
  "Your star path illuminates",
  "Ancient starlight suggests",
  "The galaxy's rhythm indicates"
];

const predictions = [
  "an unexpected opportunity may appear today",
  "a hidden talent could surface",
  "someone from your past may reappear",
  "a creative breakthrough is approaching",
  "positive changes are gathering momentum",
  "a surprising connection may brighten your day",
  "a long-awaited answer could finally arrive",
  "your creativity will attract positive attention",
  "an overlooked opportunity may reveal itself",
  "a chance encounter could change your perspective",
  "good news may come from an unexpected source",
  "your determination will help overcome a challenge",
  "a new idea could spark exciting possibilities",
  "someone may seek your guidance or support",
  "a hidden opportunity may emerge from routine tasks",
  "your confidence will open new doors",
  "a meaningful discovery could inspire your next step",
  "unexpected progress may arrive sooner than expected",
  "a moment of clarity could reshape your plans",
  "positive energy may surround an important decision"
];

const advice = [
  "Trust your instincts",
  "Remain open to new possibilities",
  "Listen carefully to your intuition",
  "Embrace change with confidence",
  "Follow your curiosity",
  "Take time to appreciate small victories",
  "Speak your thoughts with honesty and kindness",
  "Allow yourself to step outside your comfort zone",
  "Focus on what you can control",
  "Trust the process even when the path is unclear",
  "Look for lessons in unexpected places",
  "Share your talents with those around you",
  "Approach challenges with patience and optimism",
  "Stay grounded while pursuing ambitious goals",
  "Welcome new experiences with an open mind",
  "Make space for reflection before major decisions",
  "Let your curiosity guide today's choices",
  "Practice gratitude for the progress you've made",
  "Be willing to adapt when circumstances change",
  "Invest your energy where it matters most"
];

const closings = [
  "The universe rewards courage.",
  "A small action can create a big ripple.",
  "Your energy attracts new possibilities.",
  "The stars favor patience today.",
  "Something beautiful is unfolding.",
  "Fortune favors those who stay curious.",
  "The cosmos is quietly working in your favor.",
  "Your next chapter begins with a single choice.",
  "Trust that the stars are aligning behind the scenes.",
  "A spark of inspiration is closer than you think."
];

// Collect user's first name and store it in localStorage
function setFirstName() {
    document.getElementById("nameForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("getName").value;
        localStorage.setItem('firstName', name);
        document.getElementById("nameForm-container").style.display = 'none';
        greetUser();
    });
}

// Retrieve the first name from localStorage and greet the user
function greetUser() {
    const name = localStorage.getItem('firstName');
    const greetEl = document.getElementById("greetUser");
    greetEl.innerHTML = name ? `Hi ${name}!<br>Let's see what the cosmos has in store for you!` : "Hello, Guest!<br>Let's see what the cosmos has in store for you!";
    greetEl.style.display = 'block';
    greetEl.style.animation = 'pulse 2s infinite alternate;';
    greetEl.offsetHeight;
    greetEl.style.animation = 'fadeInOut 3s ease-in-out forwards';
    setTimeout(() => {
        greetEl.style.display = 'none';
        const detailForm = document.getElementById("detailForm-container");
        detailForm.style.display = 'block';
        detailForm.style.animation = 'slideInUp 0.8s ease-out forwards';
    }, 5000);
}

// Collect user's birthdate, time, and birthplace, and store them in localStorage
function setBirthDetails() {
  document.getElementById("detailForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const date = document.getElementById("getBirthDate").value;
    const time = document.getElementById("getBirthTime").value;
    localStorage.setItem('birthDate', date);
    localStorage.setItem('birthTime', time);
    document.getElementById("detailForm-container").style.display = 'none';

    const sign = determineSunSign();
    const traits = getTraits(sign);
    const horoscope = generateHoroscope(sign);

    const horoscopeEl = document.getElementById("horoscope");
    horoscopeEl.innerHTML = `
      <h2><strong>Your Sun sign is</strong> ${sign}</h2>
      <h2><strong>Your Key Traits</strong></h2><br><h3>${traits.join(', ')}</h3>
      <h2><strong>Today's Cosmic Cookie</strong></h2><br><h3>${horoscope}</h3>
    `;
    horoscopeEl.style.display = "block";
    horoscopeEl.style.animation = "slideInUp 0.8s ease-out forwards";
  });
}

// Function to determine the Sun sign based on the birth date
function determineSunSign() {
    const date = localStorage.getItem('birthDate')
    const [, month, day] = date.split('-').map(Number);
    const formattedDate = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    for (const zodiac of zodiacSigns) {
        if ((formattedDate >= zodiac.start && formattedDate <= zodiac.end) ||
            (zodiac.start > zodiac.end && (formattedDate >= zodiac.start || formattedDate <= zodiac.end))) {
            return zodiac.sign;
        }
    }
    const sunSign = "Unknown";  
    return sunSign;
}

// Function to get traits based on the Sun sign
function getTraits(sunSign) {
    const zodiac = zodiacTraits.find(z => z.sign === sunSign.split(' ')[0]);
    const symbol = zodiac ? zodiac.symbol : '';
    return zodiac ? zodiac.traits : []; 
}

// Function to generate a personalized horoscope message
function generateHoroscope(sunSign) {
  const opening = openings[Math.floor(Math.random() * openings.length)];
  const prediction = predictions[Math.floor(Math.random() * predictions.length)];
  const adviceItem = advice[Math.floor(Math.random() * advice.length)];
  const closing = closings[Math.floor(Math.random() * closings.length)];
  return `${opening} ${prediction}. ${adviceItem}. ${closing}`;
}

// Text animations
const welcomeElement = document.getElementById('welcome-container');

// Hide message element after 5s
setTimeout(() => {
    welcomeElement.style.display = 'none';
    const nameForm = document.getElementById('nameForm-container');
    nameForm.style.display = 'block';
    nameForm.style.animation = 'slideInUp 0.8s ease-out forwards';
}, 5000);

// Initialize the form listeners
setFirstName();
setBirthDetails();