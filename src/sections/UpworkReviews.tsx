import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';

type Insight = {
  label: string;
  count: number;
};

type Review = {
  title: string;
  timeframe: string;
  contractType: string;
  rating: number;
  feedback: string;
};

const STARS_TOTAL = 5;
const UPWORK_PROFILE_URL =
  'https://www.upwork.com/freelancers/~0165dda3529105e6f3';

function UpworkReviews() {
  const { t } = useTranslation();
  const reviews = t('upworkReviews.reviews', { returnObjects: true }) as Review[];
  const insights = t('upworkReviews.insights.items', {
    returnObjects: true,
  }) as Insight[];

  return (
    <section id="upwork-reviews">
      <div className="upwork-reviews__container pt-10 md:pt-20" data-aos="fade-up">
        <div className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
              {t('upworkReviews.eyebrow')}
            </p>
            <h2 className="text-3xl font-bold uppercase primary-gradient primary-shadow md:text-[37px]">
              {t('upworkReviews.overviewTitle')}
            </h2>
          </div>

          <div className="flex">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#14a800]/20 bg-[#14a800]/[0.06] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#9effa9]">
              <img
                src="/source/ui/upwork-top-rated.svg"
                alt=""
                className="h-6 w-6 shrink-0"
                aria-hidden
              />
              <span>{t('hero.topRated')}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {insights.map((insight) => (
              <div
                key={insight.label}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2.5"
              >
                <span className="text-sm font-semibold text-white">{insight.count}</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/58">
                  {insight.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.title}
                className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-tight text-white">
                    {review.title}
                  </h3>
                  <span className="flex shrink-0 items-center gap-1 text-[#14a800]">
                    {Array.from({ length: STARS_TOTAL }).map((_, index) => (
                      <FaStar
                        key={index}
                        className={`h-3.5 w-3.5 ${
                          index < Math.round(review.rating) ? 'opacity-100' : 'opacity-20'
                        }`}
                      />
                    ))}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-white/52">
                  <span className="inline-flex items-center rounded-full border border-[#14a800]/25 bg-[#14a800]/10 px-3 py-1 font-semibold tracking-[0.14em] text-[#7dff8f]">
                    {t('upworkReviews.ratingLabel')} {review.rating.toFixed(1)}
                  </span>
                  <span>{review.timeframe}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {review.feedback}
                </p>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href={UPWORK_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#14a800] px-12 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#159600]"
            >
              {t('upworkReviews.openProfile')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpworkReviews;
