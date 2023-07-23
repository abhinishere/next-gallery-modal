import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { ImageType } from "@/types";
import Image from "next/image";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="m-1 relative flex aspect-square cursor-pointer items-center justify-center rounded-md ">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={
                process.env.NEXT_PUBLIC_SUPABASE_URL +
                "/storage/v1/object/public/images/" +
                image.image_path
              }
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-4",
              selected ? "ring-blue-400" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
