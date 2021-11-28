import { NextSeo } from 'next-seo'
import { PageMetaProps, PropsWithChildren } from '../lib/types'

interface Props extends PropsWithChildren {
  meta: PageMetaProps
}

export const Layout = ({ children, meta }: Props) => {
  const { title, metaDescription, canonical, featuredImage } = meta
  return (
    <>
      <NextSeo
        title={title}
        description={metaDescription}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: title,
          description: metaDescription,
          images: [
            {
              url: featuredImage,
            },
          ],
        }}
      />
      <main className="w-auto max-w-7xl">{children}</main>
    </>
  )
}
