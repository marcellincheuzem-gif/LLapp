# LLapp

LLapp is a mobile-friendly English-learning web app focused on pronunciation,
word families, parts of speech, contextual sentences, real-life situations,
phrasal verbs, idioms, translation, and speaking practice.

It also includes a placement test that recommends a starting level and an
offline English verb conjugator with tense examples and practice.

Each level now includes 50 phrasal verbs, plus a level-specific Academic Words
section with definitions and example sentences.
It also includes an offline Conjugator tab for regular and common irregular
verbs, with key forms, major tense examples, audio buttons, and quick practice.
Activities use simple instructions for writing a translation and identifying
the word type. They also include meaning-in-context questions, word-family
practice, and listen-and-type recall.

The main authored lesson and translation datasets are stored separately in
`data/lessons.json` and `data/translations.json`. The app loads these files
without changing the existing interface or learning flow.

## Use on Android

Open the published GitHub Pages URL in Chrome or Firefox on Android. The app
works as a static website and stores learning progress in the browser's local
storage.

For the best experience:

- Allow microphone access for speaking practice.
- Allow audio playback for pronunciation and sentence listening.
- Add the page to the home screen from the browser menu.

After the GitHub Pages deployment finishes, open:
`https://marcellincheuzem-gif.github.io/LLapp/`

In Chrome on Android, tap the three-dot menu and choose **Add to Home screen**
or **Install app**. If the option does not appear, open the link in a regular
browser tab (not an in-app browser), refresh once, and try again.

## Run locally

Open `index.html` in a modern browser. No build step or backend is required.
