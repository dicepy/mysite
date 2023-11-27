import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GitHubInfo {
    username: string;
    repositories: number;
    accountCreatedAt: string;
}

const Github: React.FC = () => {
    const [githubInfo, setGithubInfo] = useState<GitHubInfo | null>(null);

    useEffect(() => {
        const fetchGithubInfo = async () => {
            try {
                const response = await axios.get('http://localhost:4444/github-info'); // Адрес вашего бекенда
                const data: GitHubInfo = response.data;
                console.log(data)
                setGithubInfo(data);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchGithubInfo();
    }, []); // Пустой массив зависимостей для выполнения эффекта только при монтировании компонента

    return (
        <div>
            {githubInfo ? (
                <>
                    <p>Username: {githubInfo.username}</p>
                    <p>Repositories: {githubInfo.repositories}</p>
                    <p>Account Created At: {githubInfo.accountCreatedAt}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Github;
