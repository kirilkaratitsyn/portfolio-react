import { useState } from 'react';

type CaseStudyMobilePreviewProps = {
  alt: string;
  fallbackText: string;
  imageSrc?: string;
};

const CaseStudyMobilePreview = ({
  alt,
  fallbackText,
  imageSrc,
}: CaseStudyMobilePreviewProps) => {
  const [hasError, setHasError] = useState(false);
  const shouldShowFallback = !imageSrc || hasError;

  if (shouldShowFallback) {
    return (
      <div className="flex h-[575px] items-center justify-center rounded-[24px] border border-white/10 bg-black/20 px-8 text-center text-sm leading-relaxed text-white/55">
        {fallbackText}
      </div>
    );
  }

  return (
    <div className="flex h-[575px] items-center justify-center rounded-[24px]">
      <div className="h-full w-full overflow-hidden rounded-[24px]">
        <img
          src={imageSrc}
          alt={alt}
          className="h-full w-full object-cover object-top"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
};

export default CaseStudyMobilePreview;
