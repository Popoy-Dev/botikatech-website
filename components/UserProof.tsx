import { userProofItems } from '@/lib/content';

export function UserProof() {
  const midpoint = Math.ceil(userProofItems.length / 2);
  const firstRow = userProofItems.slice(0, midpoint);
  const secondRow = userProofItems.slice(midpoint);
  const secondRowSafe = secondRow.length > 0 ? secondRow : firstRow;

  const renderEmbedCard = (item: (typeof userProofItems)[number], idx: number) => (
    <article
      key={`${item.facebookEmbedSrc ?? 'embed'}-${idx}`}
      className="w-[85vw] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:w-[520px]"
    >
      {item.facebookEmbedSrc ? (
        <iframe
          src={item.facebookEmbedSrc}
          title={`BotikaTech embed ${idx + 1}`}
          width="100%"
          height={item.embedHeight ?? 429}
          className="block w-full"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
        />
      ) : null}
    </article>
  );

  return (
    <section id="user-proof" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="space-y-6 overflow-hidden">
          <div className="user-proof-marquee-track user-proof-marquee-right">
            {[...firstRow, ...firstRow].map((item, idx) => renderEmbedCard(item, idx))}
          </div>
          <div className="user-proof-marquee-track user-proof-marquee-left">
            {[...secondRowSafe, ...secondRowSafe].map((item, idx) => renderEmbedCard(item, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
