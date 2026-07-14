/**
 * Original abstract wreath-and-spark seal — the brand's hand-drawn wreath motif
 * redrawn as generic botanical line art (no licensed character likenesses).
 */
export function WreathMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* left branch */}
      <path d="M60 14c-16 4-30 12-38 26-6 11-8 24-6 38" />
      <path d="M22 40c-4 2-9 3-13 2" />
      <path d="M18 54c-4 1-9 1-13-1" />
      <path d="M17 68c-3 2-8 3-12 2" />
      <path d="M31 27c-3-3-5-7-5-11" />
      {/* right branch */}
      <path d="M60 14c16 4 30 12 38 26 6 11 8 24 6 38" />
      <path d="M98 40c4 2 9 3 13 2" />
      <path d="M102 54c4 1 9 1 13-1" />
      <path d="M103 68c3 2 8 3 12 2" />
      <path d="M89 27c3-3 5-7 5-11" />
      {/* base ends, left open like a pinned dossier seal */}
      <path d="M16 78c2 8 6 15 12 21" />
      <path d="M104 78c-2 8-6 15-12 21" />
      {/* center spark / forge mark */}
      <path d="M60 90l4 9-9 4 9 4-4 9-4-9-9-4 9-4z" strokeWidth={1.3} />
      {/* pin dot at top, echoes a maker's stamp */}
      <circle cx="60" cy="8" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
