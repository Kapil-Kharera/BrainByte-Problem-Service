const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();
    const convertedHtml = marked.parse(markdownContent);
    console.log("Coverted html : ", convertedHtml);
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, { allowedTags: sanitizeHtmlLibrary.defaults.allowedTags});
    console.log("sanitized html : ", sanitizedHtml);
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log("sanitized markdown : ", sanitizedMarkdown);
    return sanitizedMarkdown
}

module.exports = sanitizeMarkdownContent;