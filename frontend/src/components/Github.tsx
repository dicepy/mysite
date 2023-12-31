import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GitContainer from "./Main/Github/Git-container";
import git from '../images/git.png';
import {useInView} from "react-intersection-observer";
import {useStore} from "../Store";

interface GitHubInfo {
    username: string;
    repositories: number;
    accountCreatedAt: string;
}

const Github: React.FC = () => {
    const { setActiveElement } = useStore();
    const { ref, inView, entry} = useInView({
        /* Optional options */
        threshold: 1,
    });

    useEffect(() => {
        if (entry) {
            if (entry.isIntersecting) {
                setActiveElement("projects");
            }
        }
    }, [inView]);
    const [githubInfo, setGithubInfo] = useState<GitHubInfo | null>(null);

    useEffect(() => {
        const fetchGithubInfo = async () => {
            try {
                const response = await axios.get('http://localhost:4444/github-info'); // Адрес вашего бекенда
                const data: GitHubInfo = response.data;
                setGithubInfo(data);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchGithubInfo();
    }, []); // Пустой массив зависимостей для выполнения эффекта только при монтировании компонента

    return (
        <GitContainer id="projects" ref={ref}>
            <a href="https://github.com/dicepy"><img src={git} alt="git"/></a>
            <div>
                <p>Имя: {githubInfo?githubInfo.username:"Loading username"}</p>
                <p>Репозиториев: {githubInfo?githubInfo.repositories:"Loading repos"}</p>
                <p>Аккаунт создан: {githubInfo?githubInfo.accountCreatedAt:"Loading date"}</p>
            </div>
            {githubInfo ? (
                <>

                </>
            ) : (
                <p>Loading...</p>
            )}
        </GitContainer>
    );
};

export default Github;
