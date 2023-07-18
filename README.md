# README

# The Life Walk On Social (Frontend)

The inspiration for this project is derived from my own experiences as a retired collegiate athlete, where my identity that was previously tied to my sport suddenly vanished without any guidance. I excelled in goal setting and commitment with something I was striving towards in my sport, but as soon as that became my past, I had no plans for what I wanted to do afterwards. I felt alone, even though I know that many other former athletes go through the same exact process. This eventually led me to where I find myself today in this program.

This project is designed to create a social hub for former athletes to connect, find events catered towards people who are experiencing similar, but different issues, especially in a time where social connection seems to be difficult.

The backend of the application leverages Ruby on Rails API functionality to receive and send AJAX requests in a JSON format and React.js frontend with HTML and CSS, using React Bootstrap, React Router, and Material UI.

## LIVE DEMO

[Click here for the live demo](https://vimeo.com/846104295)


## Dependencies

- Node Package Manager (NPM)
- ReactJS
- React Router
- React Bootstrap
- Material UI

## Installation & Usage

1. Download this entire git repository to your computer and place in your desired install directory.
2. To start install and start hosting the local server, open your terminal and navigate to the directory where you have installed this repo in.
3. Run the following in your terminal to install the required node packages:

```bash
npm run dev
npm install
```

This app is currently hosted locally, which you can run on your own server given you have installed the backend repo (to view data) and this repo.

You'll need to have the backend repo (https://github.com/markprubin/the-life-walk-on-social) running on http://localhost:3000.
You can view the app on the server the terminal will prompt you on.

## Roadmap

There are plenty of features I would like to add as I move forward with this project.

- First, I would like to add a profile page for each individual. This would give others to be able to connect with others online and see if they have any similarities in hobbies, education, or experiences.
- I'd also like to add a task/habit builder, where you can store your list of "to-do's" to keep you accountable.
- I'd like to add a comments section in addition to a list of favorites. Currently, only the number of favorites is visible. But it would be effective from a community standpoint to see who would be potentially attending events.
- A stretch goal would be to make some kind of community forum, so there isn't just 1 on 1 connection between individuals.

## License

Copyright (c) [2023] [Mark Rubin]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
