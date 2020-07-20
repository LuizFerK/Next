import Head from 'next/head';
import Link from 'next/link';
import { useRouter, Router } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

interface RouteParams extends ParsedUrlQuery {
  name: string;
}

const Detail: React.FC = () => {
  const router = useRouter();

  const { name } = router.query as RouteParams;

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
      <h1>{name}</h1>
    </>
  );
};

export default Detail;