import { classNameModule } from "@/utils/className/className";
import styles from "./LinkModal.module.scss";
import { FC, useState } from "react";
import { LinkModalState, TLinkModalHook } from "./LinkModal.types";
const className = classNameModule(styles);

export const useLinkModal = (): TLinkModalHook => {
  const [state, setState] = useState<LinkModalState>({
    isOpen: false,
  });

  return {
    isOpen: state.isOpen,
    close: () => setState({ isOpen: false }),
    open: () => setState({ isOpen: true }),
  };
};

const LinkModal: FC<TLinkModalHook> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div {...className("LinkModal")}>
      LinkModal
      <input />
    </div>
  );
};

export default LinkModal;
