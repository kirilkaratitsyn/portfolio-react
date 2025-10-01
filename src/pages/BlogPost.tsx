import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Contact from '../sections/Contact';
import { useBlogContent } from '../hooks/useBlogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = useBlogContent();
  const { t } = useTranslation();
  const post = blog.posts.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!post) {
    return (
      <>
        <section className="bg-[#0E0E0E]">
          <div className="blog__container pt-20 min-h-[60vh]" data-aos="fade-up">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-[37px] font-bold primary-gradient primary-shadow uppercase">
                {blog.title}
              </h1>
              <p className="text-white/70 text-lg">
                {blog.notFound}
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-white/70"
              >
                {blog.backToList}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
        <Contact />
      </>
    );
  }

  return (
    <>
      <article className="bg-[#0E0E0E]">
        <div className="blog__container pt-20" data-aos="fade-up">
          <div className="mb-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/70 hover:text-white"
            >
              <span aria-hidden>←</span>
              {blog.backToList}
            </Link>
          </div>
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wide text-white/60">
              <span>{post.date}</span>
              <span>•</span>
              <span>{t('blog.estimatedRead', { time: post.readingTime })}</span>
            </div>
            <h1 className="text-3xl md:text-[42px] font-bold leading-tight text-white">
              {post.title}
            </h1>
            {post.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>
          <div className="my-10 overflow-hidden rounded-3xl border border-white/10">
            <img
              src={post.image}
              alt={post.title}
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 text-white/80">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
      <Contact />
    </>
  );
};

export default BlogPost;
