import { create } from "zustand";

import { ImageType } from "@/types";

interface UploadModalProps {
  isOpen: boolean;
  data?: ImageType[];
  onOpen: (data: ImageType[]) => void;
  onClose: () => void;
}

const useUploadModal = create<UploadModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ImageType[]) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
