import Head from 'next/head';
import Link from 'next/link';

import { InferGetStaticPropsType } from 'next';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Repo } from '../';

interface RouteParams extends ParsedUrlQuery {
  name: string;
}

interface StaticPropsParams extends GetStaticPropsContext {
  params: {
    repo: string;
  }
}

export const getStaticPaths = async () => {
  const response = await fetch('https://api.github.com/users/LuizFerK/repos');
  const repos: Repo[] = await response.json();

  const paths = repos.map(repo => ({
    params: { repo: repo.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: StaticPropsParams) => {
  const response = await fetch(`https://api.github.com/repos/LuizFerK/${params.repo}`);
  const repository: Repo = await response.json();

  return {
    props: { repository }
  }
};

const Detail = ({ repository }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(repository);

  return (
    <>
      <Head>
        <title>Next - Detail</title>
      </Head>
      <h1>Detail</h1>
      <p>
        Now you are in the detail page, to go back to main page click {''}
        <Link href="../">
          <a>here</a>
        </Link>
      </p>
      <h1>{repository.name}</h1>
    </>
  );
};

export default Detail;