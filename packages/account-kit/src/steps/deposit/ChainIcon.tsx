import { twMerge } from "tailwind-merge";
import { PreloadedImage } from "./PreloadedImage";

export type Props = {
  id: number;
  name: string;
  url: string | undefined;
  className?: string;
};

export function ChainIcon({ name, url, className }: Props) {
  return (
    <span className={twMerge("flex-shrink-0 inline-flex w-6 aspect-square rounded-full overflow-clip", className)}>
      {url ? (
        <PreloadedImage url={url} />
      ) : (
        // TODO: better placeholder
        <span
          className={twMerge(
            "inline-flex items-center justify-center w-full h-full rounded-full",
            "border-2 border-dashed border-black/20 dark:border-white/50 opacity-50",
          )}
        >
          {name?.slice(0, 1)}
        </span>
      )}
    </span>
  );
}
