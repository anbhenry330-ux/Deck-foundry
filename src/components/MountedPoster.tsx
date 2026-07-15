import Image from "next/image";

/** A brand flyer pinned to the page like a mounted print — same paper-mat
 * treatment as the hero photo, sized for a supporting role rather than the lead. */
export function MountedPoster({
  src,
  alt,
  rotate = -1.5,
  className = "",
}: {
  src: string;
  alt: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border-[6px] border-[#FBF8F1] bg-[#FBF8F1] shadow-[0_20px_44px_-18px_rgba(60,56,47,0.4)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Image
        src={src}
        alt={alt}
        width={1414}
        height={2000}
        sizes="(max-width: 768px) 60vw, 240px"
        className="h-auto w-full rounded-md"
      />
    </div>
  );
}
