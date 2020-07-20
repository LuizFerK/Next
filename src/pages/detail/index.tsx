import Head from 'next/head';
import Link from 'next/link';

const Detail: React.FC = () => (
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
  </>
)

export default Detail;