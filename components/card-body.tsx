"use client";

import useUploadModal from "@/hooks/use-upload-modal";
import { ImageType } from "@/types";
import Image from "next/image";
import { useCallback, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import { CircleIcon } from "@radix-ui/react-icons";

const CardBody = () => {
  // // const [showModal, setShowModal] = useState(false);
  const [featuredImage, setFeaturedImage] = useState<ImageType>();
  const uploadModal = useUploadModal();

  const onClickUpload = useCallback(() => {
    //you may add security check here based on use case
    uploadModal.onOpen(setFeaturedImage);
  }, [uploadModal]);

  console.log("Featured Image value is " + featuredImage);
  return (
    <>
      <div
        onClick={() => onClickUpload()}
        className="
      relative
      cursor-pointer
      hover:opacity-70
      transition
      border-dashed 
      border-2 
      p-20 
      border-neutral-300
      flex
      flex-col
      justify-center
      items-center
      gap-4
      text-neutral-600
      mb-5
      h-72
    "
      >
        {!featuredImage ? (
          <>
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
          </>
        ) : (
          <Image
            src={
              process.env.NEXT_PUBLIC_SUPABASE_URL +
              "/storage/v1/object/public/images/" +
              featuredImage.image_path
            }
            alt="featured image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="justify-between flex items-center">
        <div className="flex text-sm text-muted-foreground items-center space-x-4">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-red-400 text-red-400" />
            Nextjs
          </div>
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-green-400 text-green-400" />
            TypeScript
          </div>

          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            Tailwind
          </div>
        </div>
        {!featuredImage ? (
          <></>
        ) : (
          <div
            onClick={() => setFeaturedImage(undefined)}
            className="mr-1 text-sm text-red-500 hover:text-red-600 cursor-pointer"
          >
            Remove image
          </div>
        )}
      </div>
    </>
  );
};

export default CardBody;
