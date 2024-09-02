const fetchHTML = require('../fetchHTML/fetchHTML');
const parseHTML = require('../parseHTML/parseHTML');

const getTimeStories = async (req, res) => {
    try {
        const html = await fetchHTML('https://time.com'); 
        console.log("Fetched HTML:", html.slice(0, 1000)); // first 1000 characters 
        const stories = parseHTML(html);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(stories));
    } catch (error) {
        console.error('Error in getTimeStories:', error.message); 
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
};

module.exports = { getTimeStories };
