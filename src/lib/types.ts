import { ReactNode } from 'react'

export interface PropsWithChildren {
  children: ReactNode
}

export interface PageMetaProps {
  title: string
  metaDescription: string
  canonical: string
  featuredImage?: string
}
