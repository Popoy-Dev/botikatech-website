import { userProofItems } from '@/lib/content';

export function UserProof() {
  const midpoint = Math.ceil(userProofItems.length / 2);
  const firstRow = userProofItems.slice(0, midpoint);
  const secondRow = userProofItems.slice(midpoint);
  const secondRowSafe = secondRow.length > 0 ? secondRow : firstRow;

  const renderImageCard = (
    item: (typeof userProofItems)[number],
    idx: number,
    widthClassName: string,
    imageHeightClassName: string,
  ) => (
    <article
      key={`${item.imageSrc ?? 'image'}-${idx}`}
      className={`${widthClassName} shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm`}
    >
      <img
        src={item.imageSrc ?? '/botikatech-logo.webp'}
        alt="BotikaTech customer feedback"
        className={`${imageHeightClassName} w-full object-cover`}
        loading="lazy"
      />
    </article>
  );

  return (
    <section id="user-proof" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        {/* Mobile: image-only rows from /public/images */}
        <div className="space-y-4 overflow-hidden md:hidden">
          <div className="user-proof-marquee-track user-proof-marquee-right">
            {[...firstRow, ...firstRow].map((item, idx) =>
              renderImageCard(item, idx, 'w-[31vw]', 'h-28'),
            )}
          </div>
          <div className="user-proof-marquee-track user-proof-marquee-left">
            {[...secondRowSafe, ...secondRowSafe].map((item, idx) =>
              renderImageCard(item, idx, 'w-[31vw]', 'h-28'),
            )}
          </div>
        </div>

        {/* Tablet/Desktop: image marquee for stable performance */}
        <div className="hidden space-y-6 overflow-hidden md:block">
          <div className="user-proof-marquee-track user-proof-marquee-right">
            {[...firstRow, ...firstRow].map((item, idx) =>
              renderImageCard(item, idx, 'w-[460px]', 'h-64'),
            )}
          </div>
          <div className="user-proof-marquee-track user-proof-marquee-left">
            {[...secondRowSafe, ...secondRowSafe].map((item, idx) =>
              renderImageCard(item, idx, 'w-[460px]', 'h-64'),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
