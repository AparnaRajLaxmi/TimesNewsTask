const parseHTML = (html) => {
    const stories = [];
    const regex = /<a\s+href="([^"]+)"[^>]*>\s*<h3[^>]*>([^<]+)<\/h3>/g;
    let match;

    while ((match = regex.exec(html)) && stories.length < 6) {
        const link = match[1];
        const title = match[2].trim();
        if (title && link) {
            stories.push({ title, link: `https://time.com${link}` });
        }
    }

    console.log("Extracted Stories:", stories);
    return stories;
};

module.exports = parseHTML;
