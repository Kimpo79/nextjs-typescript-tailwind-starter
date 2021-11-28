import { GetStaticProps, GetStaticPropsContext } from 'next'
import { Layout } from '../layouts/Main'
import { PageMetaProps } from '../lib/types'

interface Props {
  locale: string
  meta: PageMetaProps
}

export default function Home({ meta, locale }: Props) {
  return (
    <Layout meta={meta}>
      <div className="center text-center py-20 m-20 border-dashed border-accent border rounded-xs">
        <h1 className="font-bold text-3xl text-primary">
          Yet another Next.js starter
        </h1>
        <p className="font-semibold text-xl text-secondary">Start hacking!</p>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  const pageProps: PageMetaProps = {
    title: 'This is a site title',
    metaDescription: 'This is a meta description',
    canonical: 'http://localhost:3000',
    featuredImage: 'https://via.placeholder.com/728x90.png',
  }

  return {
    props: {
      locale,
      meta: pageProps,
    },
  }
}
