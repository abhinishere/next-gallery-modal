import { create } from "zustand";

interface UploadModalProps {
  isOpen: boolean;
  imageSetter?: Function;
  onOpen: (imageSetter: Function) => void;
  onClose: () => void;
}

const useUploadModal = create<UploadModalProps>((set) => ({
  isOpen: false,
  onOpen: (imageSetter?: Function) => set({ isOpen: true, imageSetter }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
