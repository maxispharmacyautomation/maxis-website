import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Insights & Blog | Maxis Pharmacy Automation",
  description: "Ideas on pharmacy automation, safety, and compliance packaging standards.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium text-ink tracking-tight mb-6">
              Insights
            </h1>
            <p className="text-xl text-slate-600">
              Ideas on pharmacy automation, safety, and compliance. Technical perspectives from the Maxis team.
            </p>
          </div>
        </Container>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`} 
                className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-brand-light transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-slate-50 w-full overflow-hidden">
                  <Image 
                    src={post.image || "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80"} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-ink mb-3 group-hover:text-brand-dark transition-colors line-clamp-3">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 flex-1 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-brand-dark font-medium mt-auto group-hover:translate-x-1 transition-transform text-sm">
                    Read article <ArrowRight className="w-4 h-4 ml-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-light py-20 border-t border-brand-teal/20 text-center">
        <Container>
          <h2 className="text-2xl md:text-3xl font-medium text-ink mb-4 max-w-2xl mx-auto">
            Ready to secure your pharmacy workflow?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Safety starts with removing the manual variables. See how automation protects your patients.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-brand-dark hover:bg-brand-darker rounded-lg transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Request a demo
          </Link>
        </Container>
      </section>
    </main>
  );
}
