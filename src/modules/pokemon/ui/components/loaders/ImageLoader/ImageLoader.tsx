import clsx from "clsx";
import { useState } from "react";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loadingClassName?: string;
  errorClassName?: string;
  showErrorText?: boolean;
  errorIcon?: string;
  errorText?: string;
}

export const ImageLoader = ({
  src,
  alt,
  className = "w-32 h-32 object-contain drop-shadow-2xl",
  containerClassName = "relative w-32 h-32",
  loadingClassName = "absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl animate-pulse",
  errorClassName = "absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl",
  showErrorText = true,
  errorIcon = "🎭",
  errorText = "Image not available",
}: ImageLoaderProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={containerClassName}>
      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className={loadingClassName}>
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error placeholder */}
      {imageError && (
        <div className={errorClassName}>
          <div className="text-gray-400 text-2xl mb-1">{errorIcon}</div>
          {showErrorText && <div className="text-gray-400 text-xs text-center px-2">{errorText}</div>}
        </div>
      )}

      {/* Actual image */}
      <img
        src={imageLoaded && !imageError ? src : "/images/fallback-image-icon.svg"}
        alt={alt}
        className={clsx(className, imageLoaded && !imageError ? "opacity-100" : "opacity-0")}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(false);
        }}
        style={{ minHeight: "inherit" }}
        loading="lazy"
      />
    </div>
  );
};
