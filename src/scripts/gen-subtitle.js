import fs from 'fs';
import path from 'path';

/**
 * @param {string} content 
 * @returns {Array} 
 */
function parseSRT(content) {
    content = content.trim() + '\n';

    const pattern = /(\d+)\r?\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})\r?\n((?:.+\r?\n)+)/g;

    const subtitles = [];
    let match;

    while ((match = pattern.exec(content)) !== null) {
        const index = parseInt(match[1]);
        const startTime = match[2];
        const endTime = match[3];
        const text = match[4].trim();

        subtitles.push({
            index,
            start_time: startTime,
            end_time: endTime,
            text
        });
    }

    return subtitles;
}

/**
 * @param {string} inputFolder 
 * @param {string} outputFolder 
 */
function convertSRTtoJSON(inputFolder, outputFolder) {
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
    }

    const allSubtitles = {};

    const files = fs.readdirSync(inputFolder);
    const srtFiles = files.filter(file => path.extname(file).toLowerCase() === '.srt');

    console.log(`Found ${srtFiles.length} SRT files to process.`);
    srtFiles.forEach(file => {
        const filePath = path.join(inputFolder, file);
        const fileName = path.basename(file, '.srt');

        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const subtitles = parseSRT(content);
            allSubtitles[fileName] = {
                file_path: filePath,
                subtitles: subtitles
            };

            console.log(`Successfully processed: ${filePath}`);
        } catch (error) {
            console.error(`Error processing ${filePath}: ${error.message}`);
        }
    });

    const outputFile = path.join(outputFolder, 'subtitles.json');
    fs.writeFileSync(outputFile, JSON.stringify(allSubtitles, null, 2), 'utf8');

    console.log(`All subtitles converted and saved to ${outputFile}`);
    return outputFile;
}

const input_path = 'src/files/srt';
const output_path = 'src/json/srt';

convertSRTtoJSON(input_path, output_path);

export { convertSRTtoJSON, parseSRT };