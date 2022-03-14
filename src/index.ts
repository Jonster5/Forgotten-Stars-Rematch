import cors from 'cors';
import express, { Request, Response } from 'express';
import { urlencoded } from 'body-parser';
import path from 'path';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(urlencoded({ extended: false }));

app.get('/*', express.static('public'));

app.get('/assets/index', (req: Request, res: Response) => {
    res.sendFile(path.resolve('data/index.json'));
});

app.get('/assets/', (req: Request, res: Response) => {
    const section: string = req.query.section as string;
    const name: string = req.query.name as string;
    const type: string = req.query.type as string;

    if (!section || !name || !type) res.send('Query parameters incorrect');

    if (type === 'image')
        res.sendFile(path.resolve('data', section, name) + '.png');
    else if (type === 'json')
        res.sendFile(path.resolve('data', section, name) + '.json');
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
