import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Maxis Insights`,
    description: post.excerpt,
  };
}

const components = {
  // We can map custom components to MDX elements here if needed later
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // Get 3 related posts (excluding current)
  const relatedPosts = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      
      {/* BREADCRUMBS */}
      <div className="bg-white border-b border-slate-100 py-3 text-sm text-slate-500">
        <Container className="flex items-center gap-2">
          <Link href="/" className="hover:text-brand-dark transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-brand-dark transition-colors">Blog</Link>
        </Container>
      </div>

      {/* ARTICLE WRAPPER */}
      <article className="py-12 md:py-20">
        <Container className="max-w-4xl">
          
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-dark mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Link>

          {/* Post Header */}
          <header className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 bg-brand-light text-brand-dark text-xs font-semibold uppercase tracking-wider rounded-md mb-6">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-4 text-sm font-medium text-slate-500 border-b border-slate-200 pb-8">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mb-12 border border-slate-200 bg-slate-100">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                priority
                className="object-cover" 
              />
            </div>
          )}

          {/* MDX Body Wrapper */}
          <div className="prose prose-lg prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 prose-headings:text-ink prose-headings:font-semibold prose-a:text-brand-dark hover:prose-a:text-brand-darker prose-a:font-medium prose-img:rounded-xl">
            <MDXRemote source={post.content} components={components} />
          </div>

        </Container>
      </article>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-20 border-t border-slate-200">
          <Container>
            <h2 className="text-2xl font-semibold text-ink mb-10">More from our blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`} 
                  className="group flex flex-col bg-slate-50 rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-video w-full bg-slate-200 overflow-hidden">
                    <Image 
                      src={relatedPost.image || "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80"} 
                      alt={relatedPost.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-brand-dark mb-2 uppercase tracking-wider">{relatedPost.category}</div>
                    <h3 className="text-lg font-semibold text-ink mb-3 group-hover:text-brand-dark transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

    </main>
  );
}
