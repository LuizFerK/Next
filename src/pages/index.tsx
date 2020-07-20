import Head from 'next/head'
import Link from 'next/link'
import { InferGetServerSidePropsType } from 'next';

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

const Main = ({ repoNames }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Head>
      <title>Next - Main</title>
    </Head>
    <h1>Main</h1>
    <h2>Repos:</h2>
    {repoNames.map(repoName => (
      <p>
        <Link key={repoName} href="./detail">
          <a>{repoName}</a>
        </Link>
      </p>
    ))}
  </>
);

export default Main;