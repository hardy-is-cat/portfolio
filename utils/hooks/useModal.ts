import { useRecoilState } from "recoil";
import { modalStateFamily } from "stores/atom";

const useModal = (id: string) => {
  const [modal, setModal] = useRecoilState(modalStateFamily(id));

  const toggleModal = (isOpened: boolean) => {
    setModal({ isOpened: !isOpened });
  };

  return { modal, toggleModal };
};

export default useModal;
