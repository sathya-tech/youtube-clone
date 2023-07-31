# codeTube - YouTube Clone React App

Welcome to codeTube, a YouTube clone built with React.js that allows users to explore videos, channels, and search for specific content.

## Features

- View a list of trending videos on the Feed page.
- Watch video details on the VideoDetail page.
- Explore channel details on the ChannelDetail page.
- Perform video searches using the SearchBar and view search results on the SearchFeed page.
- Discover video categories using the SideBar component.
- Enjoy a smooth and responsive user interface.

## Components

This app is built with the following components:

- Navbar: Top navigation bar for easy access to different sections.
- Feed: Displays a list of trending videos on the main feed.
- ChannelDetail: Shows details of a specific YouTube channel.
- SearchFeed: Displays search results based on the entered search term.
- VideoDetail: Provides detailed information about a specific video.
- SearchBar: A search bar to input search terms and initiate searches.
- SideBar: Offers video categories for easy exploration.
- Videos: Main component to handle video data and display video cards.
- VideoCard: Represents a video thumbnail and basic information in a card.
- ChannelCard: Represents a YouTube channel's thumbnail and basic info in a card.
- Loader: Loading spinner component for better user experience.

## API Integration

This app uses the YouTube Data API v3 to fetch video and channel data from YouTube. The API integration code can be found in the 'fetchFromAPI.js' file.

## Usage

1. Clone the repository: `git clone https://github.com/Shashank-Gowda-R/YouTube_Clone`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Access the app in your web browser at `http://localhost:3000`

## Technologies Used

- React.js: A popular JavaScript library for building user interfaces.
- MUI (Material-UI): A popular React UI framework for styling and components.
- Axios: A promise-based HTTP client for making API requests.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Contributing
If you'd like to contribute to this project, feel free to submit a pull request. All contributions are welcome!
---

Happy coding! If you have any questions or feedback, don't hesitate to reach out.