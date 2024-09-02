const https = require('https');

const fetchHTML = (url) => {
    return new Promise((resolve, reject) => {
        try {
            
            const urlObject = new URL(url);  

            https.get(urlObject, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(data);
                });
            }).on('error', (err) => {
                reject(err);
            });
        } catch (err) {
            console.error('Error fetching URL:', err.message);  
            reject(new Error('Invalid URL provided to fetchHTML.'));
        }
    });
};

module.exports = fetchHTML;
