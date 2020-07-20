import Head from 'next/head'
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType } from 'next';
import { useCallback } from 'react';

interface Repo {
  name: string;
}

export const getServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/LuizFerK/repos');
  const repos: Repo[] = await response.json();

  const repoNames = repos.map(repo => repo.name);

  return {
    props: { repoNames }
  }
};

const Main = ({ repoNames }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const handleClickRepo = useCallback((repoName: string) => {
    router.push(`/detail?name=${repoName}`, `/detail/${repoName}`);
  }, []);

  return (
    <>
      <Head>
        <title>Next - Main</title>
      </Head>
      <h1>Main</h1>
      <h2>Repos:</h2>
      {repoNames.map(repoName => (
        <p key={repoName}>
          <a onClick={() => handleClickRepo(repoName)}>{repoName}</a>
        </p>
      ))}
    </>
  );
};

export default Main;