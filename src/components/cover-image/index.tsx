import Image from "next/image";
import Link from "next/link";

import styles from "./cover-image.module.css";

type Props = {
  title: string;
  src: string;
  slug: string;
  priority: boolean;
};

const CoverImage = ({ title, src, slug = "", priority = false }: Props) => {
  const fallbackSrc = src === undefined ? "/assets/no_image.png" : src;
  const image = (
    <Image
      src={fallbackSrc}
      alt={`Cover Image for ${title}`}
      className={styles.image}
      width={1200}
      height={675}
      priority={priority}
    />
  );

  return (
    <div className={styles.wrapper}>
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
