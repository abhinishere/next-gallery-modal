"use client";

import getImages from "@/actions/get-images";
import useUploadModal from "@/hooks/use-upload-modal";
import { ImageType } from "@/types";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

interface CardBodyProps {
  images: ImageType[];
}

const CardBody: React.FC<CardBodyProps> = ({ images }) => {
  // // const [showModal, setShowModal] = useState(false);
  const uploadModal = useUploadModal();

  const onClickUpload = useCallback(() => {
    //you may add security check here based on use case
    uploadModal.onOpen(images);
  }, [uploadModal]);
  return (
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
    "
    >
      <TbPhotoPlus size={50} />
      <div className="font-semibold text-lg">Click to upload</div>
    </div>
  );
};

export default CardBody;
