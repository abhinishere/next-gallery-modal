"use client";
import useUploadModal from "@/hooks/use-upload-modal";
import Image from "next/image";
import ImageInput from "../inputs/ImageInput";
import Modal from "./modal";
import { Tab } from "@headlessui/react";
import NextImage from "next/image";
import GalleryTab from "./gallery-tab";
import AttachmentDetails from "../inputs/attachment-details";
import getImages from "@/actions/get-images";
const UploadModal = () => {
  const uploadModal = useUploadModal();
  const gallery = useUploadModal((state) => state.data);

  let bodyContent =
    // <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 max-h-[50vh] overflow-y-auto">
    //   {images.map((item) => (
    //     <div key={item.title} className="col-span-1">
    //       <ImageInput
    //         image={item.image}
    //         title={item.title}
    //         onClick={() => {}}
    //       />
    //     </div>
    //   ))}
    // </div>
    gallery?.length == 0 ? (
      <div className="text-center space-y-5 m-5">
        <h2 className="text-2xl font-bold tracking-tight">Empty!</h2>
        <p className="text-muted-foreground">
          Upload some images to get started.
        </p>
      </div>
    ) : (
      <Tab.Group as="div" className="flex max-h-[75vh] pb-3">
        <div className="mx-auto mt-1 w-full max-w-2xl sm:block lg:max-w-none overflow-y-auto px-3 pt-3">
          <Tab.List className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">
            {gallery?.map((image) => (
              <GalleryTab key={image.id} image={image} />
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="overflow-y-auto w-2/5 hidden md:block">
          {/* aspect-square w-full */}
          {gallery?.map((image) => (
            <Tab.Panel key={image.id}>
              <div>
                {/* className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden" */}
                <AttachmentDetails image={image} />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    );

  if (!gallery) return null;

  return (
    <Modal
      title="Featured image"
      isOpen={uploadModal.isOpen}
      onClose={uploadModal.onClose}
      onUpload={uploadModal.onClose}
      onSubmit={uploadModal.onClose}
      actionLabel="Submit"
      body={bodyContent}
    />
  );
};

export default UploadModal;
