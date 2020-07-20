import Head from 'next/head'
import Link from 'next/link'

const Main: React.FC = () => (
  <>
    <Head>
      <title>Next - Main</title>
    </Head>
    <h1>Main</h1>
    <p>
      You are in the main page, to get more details, go to the {''}
      <Link href="./detail">
        <a>detail page</a>
      </Link>
    </p>
  </>
);

export default Main;