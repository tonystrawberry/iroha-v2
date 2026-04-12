type BlobProps = {
  color: string;
  size?: number;
  variant?: "blob" | "blob-2" | "blob-3";
  blur?: boolean;
  opacity?: number;
  className?: string;
};

export default function Blob({
  color,
  size = 160,
  variant = "blob",
  blur = false,
  opacity = 1,
  className = "",
}: BlobProps) {
  return (
    <div
      className={`${variant} ${blur ? "blur-sm" : ""} ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
        flexShrink: 0,
      }}
    />
  );
}
