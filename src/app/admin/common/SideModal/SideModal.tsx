import { classNameModule } from "@/utils/className/className";
import styles from "./SideModal.module.scss";
import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "@phosphor-icons/react";
const className = classNameModule(styles);

type TSideModalState<TPayload> = {
  isOpen: boolean;
  payload: TPayload | null;
};

type TSideModalHook<TPayload> = TSideModalState<TPayload> & {
  open: (payload?: TPayload) => void;
  close: () => void;
};

export function useSideModal<TPayload>(): TSideModalHook<TPayload> {
  const [state, setState] = useState<TSideModalState<TPayload>>({
    isOpen: false,
    payload: null,
  });

  return {
    ...state,
    open: (payload?: TPayload) => {
      setState({ isOpen: true, payload: payload || null });
    },
    close: () => {
      setState({ isOpen: false, payload: null });
    },
  };
}

type TSideModalProps<TPayload> = TSideModalHook<TPayload> & {
  children: ReactNode;
};

function SideModal<TPayload>({
  children,
  ...modalProps
}: TSideModalProps<TPayload>) {
  if (!modalProps.isOpen) return null;

  return createPortal(
    <div {...className("SideModal")}>
      <div>
        <header>
          <button
            onClick={() => {
              modalProps.close();
            }}
          >
            <X />
          </button>
        </header>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default SideModal;
