import styles from "./Skeleton.module.css";

interface SkeletonProps {
  count?: number;
  className?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}

export default function Skeleton({ count, className="", width, height, borderRadius }: SkeletonProps) {

  return (
    Array.from({length: count || 1}).map((_, index) => (
      <li
        key={index}
        className={className}
        style={{
          width: width ? `${width}px` : "100%",
        }}
      >
        <div
          className={styles.skeleton}
          style={{
            height: height ? `${height}px` : "24px",
            borderRadius: borderRadius ? `${borderRadius}px` : "4px",
          }}
        ></div>
      </li>
    ))
  )
}