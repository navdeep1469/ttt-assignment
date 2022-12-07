This project is an assignment given by Terribly Tiny Tales-TTT.
It is a front-end React.js app that fetches data form an API and then plots a Histogram of 20 highest frequency words.

I've divided the app in 2 main Components and they are as follows-:

1.) Home Component-> This Components simply renders a button. When the user clicks on the button it redirects him to the main page that is the Histogram.
2.) Histogram Component-> This component makes an API call using the useEffect hook when rendered that fetches the data and use that data to create map of key-value pairs. This data is then set as the state of the histogram using the useState hook.

Dependencies/Packages used in the Project:
axios-> For making API call.
react-apexcharts-> For plotting Histogram.
react-bootstrap -> For designing the webpage.
react-router-dom -> For routing of the components.
