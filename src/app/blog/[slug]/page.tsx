import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { posts } from '@/data/posts'
import { BlogPostContent } from '@/components/pages/BlogPostContent'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `https://reecegroupllc.com/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: 'article',
      url: `https://reecegroupllc.com/blog/${post.slug}`,
      images: [{ url: '/reece-group-og.png', width: 1200, height: 630, alt: 'Reece Group LLC' }],
    },
    twitter: { card: 'summary_large_image', images: ['/reece-group-og.png'] },
  }
}

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.dateISO,
    author: { '@type': 'Organization', name: 'Reece Group LLC' },
    publisher: { '@type': 'Organization', name: 'Reece Group LLC', url: 'https://reecegroupllc.com' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostContent post={post} />
    </>
  )
}
