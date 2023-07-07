export type LinkModalState = {
  isOpen: boolean;
};

export type TLinkModalHook = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};
