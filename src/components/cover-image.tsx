import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const fallbackSrc = src === undefined ? '/assets/no_image.png' : src
  const image = (
    <Image
      src={fallbackSrc}
      alt={`Cover Image for ${title}`}
      className='shadow-sm w-full'
      width={1300}
      height={630}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
