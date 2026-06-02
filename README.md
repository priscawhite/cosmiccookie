# 🥠 Cosmic Cookie

A fun, interactive horoscope generator that combines astrology, personality traits, and daily cosmic insights into a modern web application experience.

## Overview

Cosmic Cookie generates personalized horoscope content based on a user's zodiac sign and birth date. The application determines a user's sun sign, displays zodiac-specific personality traits, and provides a customized horoscope reading through a simple and engaging user interface.

This project was created to strengthen front-end web development skills using JavaScript, HTML, and CSS while building a complete user-facing application.

---

## Features

### Zodiac Sign Detection

* Determines a user's sun sign from their birth date.
* Supports all 12 zodiac signs.
* Automatically maps birth dates to the correct astrological sign.

### Horoscope Generation

* Generates horoscope messages tailored to each zodiac sign.
* Displays personalized cosmic insights.
* Provides a unique experience for every visitor.

### Zodiac Traits

Each sign includes a predefined list of personality traits.

Example:

```javascript
{
  sign: "Aries",
  traits: [
    "Courageous",
    "Energetic",
    "Confident",
    "Independent"
  ]
}
```

### Interactive User Experience

* Guided multi-step user flow
* Animated screen transitions
* Responsive design
* Mobile-friendly interface

---

## Tech Stack

### Front-End

* HTML5
* CSS3
* JavaScript (ES6+)

### Future Enhancements

* React
* AI-generated horoscope content

---

## Project Structure

```text
📂 cosmic-cookie/
├── 📂 img/
│   └── background.gif
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## How It Works

### 1. User Enters Information

The user provides:

* Name
* Birth date

### 2. Determine Zodiac Sign

The application calculates the user's zodiac sign based on the month and day of birth.

Example:

```javascript
function determineSunSign(date) {
  const [, month, day] = date.split('-').map(Number);

  // Zodiac sign logic

  return sign;
}
```

### 3. Load Zodiac Traits

The application retrieves predefined traits associated with the user's sign.

### 4. Generate Horoscope

A horoscope message is selected or generated for the user.

### 5. Display Results

The application presents:

* Zodiac sign
* Personality traits
* Horoscope reading
* Cosmic message

---

## Zodiac Signs Supported

| Sign        | Date Range                |
| ----------- | ------------------------- |
| Aries       | March 21 – April 19       |
| Taurus      | April 20 – May 20         |
| Gemini      | May 21 – June 20          |
| Cancer      | June 21 – July 22         |
| Leo         | July 23 – August 22       |
| Virgo       | August 23 – September 22  |
| Libra       | September 23 – October 22 |
| Scorpio     | October 23 – November 21  |
| Sagittarius | November 22 – December 21 |
| Capricorn   | December 22 – January 19  |
| Aquarius    | January 20 – February 18  |
| Pisces      | February 19 – March 20    |

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/cosmic-cookie.git
```

### Navigate to the Project

```bash
cd cosmic-cookie
```

### Open the Application

Open `index.html` in your browser.

Or launch a local development server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## Future Roadmap

### Phase 1

* Complete horoscope generation logic
* Improve UI animations
* Add trait visualization

### Phase 2

* AI-generated horoscope content
* Daily horoscope subscriptions
* Email notifications

### Phase 3

* Social sharing features
* Store user preferences
* User authentication

---

## Learning Objectives

This project is designed to provide hands-on experience with:

* JavaScript fundamentals
* DOM manipulation
* Event handling
* Form validation
* CSS animations
* Responsive design
* API integration
* Cloud-native application architecture

---

## Author

**Prisca W.**

Cloud Engineer • AI Enthusiast • Aspiring Full-Stack Developer

Building practical projects that combine cloud technologies, AI, automation, and modern web development.

---

## License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project for educational and personal use.
