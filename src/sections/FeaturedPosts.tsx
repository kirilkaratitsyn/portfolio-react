import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBlogContent } from '../hooks/useBlogPosts';

const FeaturedPosts = () => {
  const { t } = useTranslation();
  const blog = useBlogContent();
  const featuredPosts = blog.posts.slice(0, 2);

  if (!featuredPosts.length) {
    return null;
  }

  return (
    <section className="bg-[#0E0E0E]" id="featured_blog">
      <div className="blog__container pt-10 md:pt-20" data-aos="fade-up">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="primary-gradient primary-shadow uppercase text-3xl md:text-[37px] font-bold">
              {blog.featuredTitle}
            </h2>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed">
              {blog.featuredSubtitle}
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-white/70"
          >
            {blog.viewAll}
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/40 hover:bg-white/10"
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wide text-white/60">
                <span>{post.date}</span>
                <span>•</span>
                <span>{t('blog.estimatedRead', { time: post.readingTime })}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                <Link to={`/blog/${post.slug}`} className="block">
                  <h3 className="text-2xl font-semibold text-white transition group-hover:text-white/80">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-base text-white/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-auto">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-white/70"
                >
                  {blog.readMore}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
