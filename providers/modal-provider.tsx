"use client";

import { useEffect, useState } from "react";

import UploadModal from "@/components/modals/upload-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <UploadModal />
    </>
  );
};

export default ModalProvider;
