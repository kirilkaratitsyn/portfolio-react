import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Contact from '../sections/Contact';
import { useBlogContent } from '../hooks/useBlogPosts';

const BlogList = () => {
  const blog = useBlogContent();
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-[#0E0E0E]" id="blog">
        <div className="blog__container pt-20" data-aos="fade-up">
          <div className="mb-12 max-w-3xl">
            <h1 className="primary-gradient primary-shadow uppercase text-3xl md:text-[37px] font-bold mb-4">
              {blog.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {blog.subtitle}
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {blog.posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-56 w-full rounded-xl object-cover transition duration-500 hover:scale-105"
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
                    <h2 className="text-2xl font-semibold text-white transition hover:text-white/80">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-base text-white/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div>
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
      <Contact />
    </>
  );
};

export default BlogList;
