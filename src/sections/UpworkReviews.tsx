import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import { FaStar, FaRegShareSquare, FaExternalLinkAlt } from 'react-icons/fa';

type UpworkReview = {
  title: string;
  timeframe: string;
  contractType: string;
  rating?: number;
  ratingLabel?: string;
  feedback?: string;
  showSeeMore?: boolean;
};

const STARS_TOTAL = 5;
const UPWORK_PROFILE_URL =
  'https://www.upwork.com/freelancers/~0165dda3529105e6f3';

const UpworkReviews = () => {
  const { t } = useTranslation();

  const reviews = t('upworkReviews.reviews', {
    returnObjects: true
  }) as UpworkReview[];

  const title = t('upworkReviews.title');
  const subtitle = t('upworkReviews.subtitle');
  const seeMoreLabel = t('upworkReviews.seeMore');
  const openOnUpworkLabel = t('upworkReviews.openOnUpwork');
  const seeMoreReviewsLabel = t('upworkReviews.seeMoreReviews');

  const openReview = () => {
    if (typeof window !== 'undefined') {
      window.open(UPWORK_PROFILE_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="upwork-reviews" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mb-12">
          <h2 className="text-[37px] font-bold primary-gradient primary-shadow">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base text-white/70">{subtitle}</p>
        </header>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }}
        >
          {reviews.map((review) => {
            const numericRating =
              typeof review.rating === 'number' ? review.rating : undefined;
            const targetUrl = UPWORK_PROFILE_URL;
            const isClickable = Boolean(targetUrl);

            return (
              <SwiperSlide key={review.title}>
                <article
                  role={isClickable ? 'link' : undefined}
                  tabIndex={isClickable ? 0 : -1}
                  onClick={() => openReview()}
                  onKeyDown={(event) => {
                    if (!isClickable) return;
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openReview();
                    }
                  }}
                  className={`group my-3 flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#d7e7d3] bg-[#f3f8f4] p-6 text-[#1f2a1d] shadow-[0_12px_30px_-18px_rgba(14,74,25,0.45)] transition-transform duration-200 ${
                    isClickable
                      ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_16px_38px_-18px_rgba(20,170,0,0.35)]'
                      : 'cursor-default'
                  }`}
                >
                  <div className="flex flex-col gap-5">
                    <header className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold leading-tight text-[#142b19]">
                        {review.title}
                      </h3>
                      {isClickable && (
                        <span className="flex p-2 items-center justify-center rounded-full border border-[#d7e7d3] bg-white text-[#198f35] transition-colors duration-200 group-hover:bg-[#198f35] group-hover:text-white">
                          <FaRegShareSquare />
                        </span>
                      )}
                    </header>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#4d5b4a]">
                      {numericRating !== undefined && (
                        <span className="flex items-center gap-1 text-[#198f35]">
                          {review.ratingLabel && (
                            <span className="sr-only">
                              {review.ratingLabel}
                            </span>
                          )}
                          {Array.from({ length: STARS_TOTAL }).map(
                            (_, index) => (
                              <FaStar
                                key={index}
                                className="h-4 w-4"
                                fill="currentColor"
                              />
                            )
                          )}
                          <span className="ml-1 text-base font-semibold">
                            {numericRating.toFixed(1)}
                          </span>
                        </span>
                      )}
                      <span className="text-xs font-medium uppercase tracking-wide text-[#2d3a2b]">
                        {review.contractType}
                      </span>
                      <span className="text-xs text-[#4d5b4a]">
                        {review.timeframe}
                      </span>
                    </div>

                    {review.feedback && (
                      <p className="text-sm leading-relaxed text-[#2b332a]">
                        {review.feedback}
                        {review.showSeeMore ? (
                          <span className="ml-1 font-semibold text-[#198f35]">
                            {seeMoreLabel}
                          </span>
                        ) : null}
                      </p>
                    )}

                  </div>

                  {isClickable && (
                    <footer className="mt-6 flex items-center justify-between text-sm">
                      <span className="text-[#4d5b4a]">
                        {openOnUpworkLabel}
                      </span>
                      <FaExternalLinkAlt className="text-[#198f35]" />
                    </footer>
                  )}
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="mt-12 flex justify-center">
          <button
            onClick={openReview}
            className="px-12 py-3 text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap bg-[#198f35] text-white hover:bg-[#14a02e] shadow-[0_12px_30px_-18px_rgba(20,170,0,0.35)] hover:shadow-[0_16px_38px_-18px_rgba(20,170,0,0.45)]"
          >
            {seeMoreReviewsLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpworkReviews;
