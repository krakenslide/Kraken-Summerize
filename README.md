# AI Summarize

AI Summarize is a web application that utilizes the power of OpenAI's GPT-4 to summarize articles, websites, documents, reports, and presentations. The application allows users to input a URL and get a concise summary of the content.

## Features

- Summarize content from any URL.
- View and manage a history of summarized articles.
- Copy URLs to clipboard.
- Animated loading indicators and error handling.
- Responsive design with a modern UI.

## Demo

![Demo](screenshot.png)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/krakenslide/Kraken-Summerize.git
   cd Kraken-Summerize
2. Install dependencies:

   ```bash
     npm install
4.  Create a .env file in the root directory and add your RapidAPI key:
      ```bash
      VITE_RAPID_API_ARTICLE_KEY=your_rapidapi_key
5.  Start the development server:
      ```bash
      npm run dev

##Usage 
1. Open your browser and go to http://localhost:3000.
2. Enter the URL of the article you want to summarize.
3. Click the search button to fetch the summary.
4. View the summary and manage your summarized articles.
  
## Project Structure

- `src/`
  - `components/`
    - `Hero.jsx`: The header component displaying the app title and navigation.
    - `Demo.jsx`: The main component for handling article submission, displaying summaries, and managing the article history.
  - `services/`
    - `article.js`: API service for fetching article summaries.
    - `store.js`: Redux store configuration.
  - `App.jsx`: Main application component.
  - `index.jsx`: Entry point of the application.

##Dependencies 
 *  React
 *  Redux Toolkit
 *  React-Redux
 *  React Icons
 *  React Loader Spinner
 *  React Typed
 *  TailwindCSS
 *  Vite
 *  Material-UI
 
##License
This project is licensed under the MIT License.

##Acknowledgments
OpenAI for providing the GPT-4 model.
RapidAPI for the article summarizer API.
The developers and contributors of the various open-source libraries used in this project.




