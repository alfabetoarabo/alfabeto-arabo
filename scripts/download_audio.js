import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.arabicreadingcourse.com/audio/isolated-letters';
const OUTPUT_DIR = path.join(__dirname, '../public/audio');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Mapping based on the file list from arabicreadingcourse.com
const letterMapping = [
    { remote: 'alif', local: 'alif' },
    { remote: 'ba', local: 'ba' },
    { remote: 'ta', local: 'ta' },
    { remote: 'tha', local: 'tha' },
    { remote: 'jiim', local: 'jim' },
    { remote: 'hha', local: 'ha' },
    { remote: 'kha', local: 'kha' },
    { remote: 'daal', local: 'dal' },
    { remote: 'thaal', local: 'dhal' },
    { remote: 'ra', local: 'ra' },
    { remote: 'zay', local: 'zay' },
    { remote: 'siin', local: 'sin' },
    { remote: 'shiin', local: 'shin' },
    { remote: 'saad', local: 'sad' },
    { remote: 'daad', local: 'dad' },
    { remote: 'taa', local: 'ta2' }, // Ta emphatic
    { remote: 'thaa', local: 'za' },  // Za emphatic (often transliterated as Thaa/Dhaa)
    { remote: 'ayn', local: 'ayn' },
    { remote: 'ghayn', local: 'ghayn' },
    { remote: 'fa', local: 'fa' },
    { remote: 'qaf', local: 'qaf' },
    { remote: 'kaf', local: 'kaf' },
    { remote: 'lam', local: 'lam' },
    { remote: 'miim', local: 'mim' },
    { remote: 'nuun', local: 'nun' },
    { remote: 'ha', local: 'ha2' }, // Soft Ha
    { remote: 'waw', local: 'waw' },
    { remote: 'ya', local: 'ya' }
];

async function downloadFile(url, filename) {
    const filePath = path.join(OUTPUT_DIR, filename);
    const writer = fs.createWriteStream(filePath);

    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://www.madinaharabic.com/'
            }
        });

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Error downloading ${url}:`, error.message);
    }
}

async function downloadAll() {
    console.log('Downloading audio files from arabicreadingcourse.com...');
    
    for (const m of letterMapping) {
        const url = `${BASE_URL}/${m.remote}.mp3`;
        const filename = `${m.local}.mp3`;
        console.log(`Downloading ${filename} from ${url}...`);
        await downloadFile(url, filename);
    }
}

downloadAll();
