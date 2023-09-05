import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAutoConfirm,
  removeConfirm,
  selectConfirmState,
} from "./sliceConfirm";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Conteiner, Content, Modal, Title } from "./styled";

export const Confirm = () => {
  const dispatch = useDispatch();
  const confirm = useSelector(selectConfirmState);
  console.log(confirm);

  useEffect(() => {
    if (confirm.length !== 0) {
      const timeRemoveConfirm = setTimeout(() => {
        dispatch(removeAutoConfirm());
      }, 3500);

      return () => {
        clearTimeout(timeRemoveConfirm);
      };
    }
  }, [confirm]);

  return (
    <Conteiner>
      {confirm.toReversed().map((item) => (
        <Modal
          key={item.id}
          $type={item.type}
          onClick={() => dispatch(removeConfirm(item.id))}
        >
          <Content>
            <Title $type={item.type}>
              {item.type ? (
                <>
                  <AiOutlineCheckCircle size={"22px"} /> Sukces
                </>
              ) : (
                <>
                  <BiErrorCircle size={"23px"} /> Błąd
                </>
              )}
            </Title>
            {item.text}
          </Content>
        </Modal>
      ))}
    </Conteiner>
  );
};
