export default class BoardParser {
    parse(str) {
        let trimmed = str.trim();
        if (trimmed[0] === '/') trimmed = trimmed.substr(1);
        if (trimmed[trimmed.length-1] === '/') trimmed = trimmed.substr(0, trimmed.length - 1);

        // a number between 1 and 52
        if (/^[1-5][0-9]?x[1-5][0-9]?$/.test(trimmed)) {
            const size = trimmed.split('x');
            return {
                width: parseInt(size[0], 10),
                height: parseInt(size[1], 10),
            }
        }

        return false;
    }
}