import Image from "next/image";

interface ImageInputProps {
  image: string;
  title: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({
  image,
  title,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`
  rounded-xl
  border-2
  p-4
  flex
  flex-col
  gap-3
  hover:border-black
  transition
  cursor-pointer
  ${selected ? "border-black" : "border-neutral-200"}
`}
    >
      <Image src={image} alt="" height={100} width={100} />
    </div>
  );
};

export default ImageInput;
