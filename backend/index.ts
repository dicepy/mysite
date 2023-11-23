// index.ts
import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import bodyParser from 'body-parser';
import moment from 'moment';
import key from './src/secret';

interface GitHubUser {
    login: string;
    public_repos: number;
    created_at: string;
}

interface TelegramRequest {
    chat_id: string;
    text: string;
}

const app = express();
const PORT = process.env.PORT || 4444;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Обработка запросов к GitHub API
app.get('/github-info', async (req: Request, res: Response) => {
    try {
        const githubUsername = 'dicepy';
        const githubAPI = `https://api.github.com/users/${githubUsername}`;

        const response: AxiosResponse<GitHubUser> = await axios.get(githubAPI, {
            headers: {
                Authorization: `Bearer ${key.github}`,
            },
        });

        const { login, public_repos, created_at } = response.data;
        const accountCreatedAt = moment(created_at).fromNow();

        res.json({
            username: login,
            repositories: public_repos,
            accountCreatedAt,
        });
    } catch (error: any) { // Явное указание типа для переменной error
        if (error instanceof Error) {
            console.error('Error fetching GitHub data:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.error('Unknown error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});



app.post('/telegram-bot', async (req: Request, res: Response) => {
    const { text } = req.body;

    try {
        // Отправка сообщения в телеграм с использованием вашего бота
        const telegramApi = `https://api.telegram.org/bot${key.telegramBotToken}/sendMessage`;
        await axios.post(telegramApi, {
            chat_id: key.telegramChatId,
            text,
        });

        res.json({ message: 'Request received successfully' });
    } catch (error: any) { // Явное указание типа для переменной error
        if (error instanceof Error) {
            console.error('Error sending Telegram message:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.error('Unknown error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});