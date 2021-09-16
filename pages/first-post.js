import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post 3</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <div>
          <Image
            src="/images/profile.jpeg"
            width={144}
            height={144}
            alt="Your profile"
          />
        </div>

        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}