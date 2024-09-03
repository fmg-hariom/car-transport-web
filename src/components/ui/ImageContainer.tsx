import Image from 'next/image';

type Props = { src: string; alt: string };

const ImageContainer = ({ src, alt }: Props) => {
  return (
    <div className="relative w-[70%] h-full group">
      <Image
        src={src}
        alt={alt}
        width={700}
        height={300}
        className="rounded shadow-xl w-full text-center"
      />
      {/* <div className="absolute inset-0 border-[3px] z-[-1] rounded border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div> */}
    </div>
  );
};

export default ImageContainer;
