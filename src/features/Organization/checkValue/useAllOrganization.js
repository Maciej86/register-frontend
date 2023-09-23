import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllOrganization,
  selectAddNewOrganization,
  selectAllOrganization,
} from "../../../store/Organization/sliceOrganization";
import { Modal } from "../../../common/Modal";
import { Button } from "../../../common/elements/Button";
import {
  ColumnAction,
  ColumnCountUser,
  ColumnLp,
  ColumnName,
  ConteinerTable,
  Table,
  TextDelete,
  Th,
  ThLeft,
  TrBody,
  TrHead,
} from "../styled";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { LuSave } from "react-icons/lu";
import { LinkButton } from "../../../common/elements/styled";

export const useAllOrganizaton = () => {
  const dispatch = useDispatch();
  const allOrganization = useSelector(selectAllOrganization);
  const addNewOrganization = useSelector(selectAddNewOrganization);
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  useEffect(() => {
    dispatch(fetchAllOrganization());
  }, [addNewOrganization]);

  const ContentDelete = (
    <TextDelete>{`Czy napewno chcesz usunąć organizację: ${selectedOrganization}?`}</TextDelete>
  );

  const viewOrganization = (
    <>
      <Modal
        setVisible={setVisibleDeleteModal}
        visible={visibleDeleteModal}
        textHeader="Usuń"
        content={ContentDelete}
        type="delete"
        typeButton="delete"
        buttonText="Usuń"
        buttonIcon={<GoTrash size={"15px"} />}
      />
      <Modal
        setVisible={setVisibleConfirmModal}
        visible={visibleConfirmModal}
        textHeader="Edycja"
        content="Tutaj treść przy zapisie."
        type="confirm"
        typeButton="confirm"
        buttonText="Zapisz"
        buttonIcon={<LuSave size={"15px"} />}
      />
      <ConteinerTable>
        <Table>
          <thead>
            <TrHead>
              <Th>Lp.</Th>
              <ThLeft>Nazwa</ThLeft>
              <Th>Użytkowników</Th>
              <Th>Edytuj</Th>
              <Th>Usuń</Th>
            </TrHead>
          </thead>
          <tbody>
            {allOrganization.map((item, index) => {
              index++;
              return (
                <TrBody key={index}>
                  <ColumnLp>{index}</ColumnLp>
                  <ColumnName>{item.name_organization}</ColumnName>
                  <ColumnCountUser>{item.count_user}</ColumnCountUser>
                  <ColumnAction>
                    <LinkButton
                      to={`/organizacja-edytuj/${item.id}`}
                      $small="true"
                    >
                      <FiEdit size={"15px"} />
                    </LinkButton>
                  </ColumnAction>
                  <ColumnAction>
                    <Button
                      type="button"
                      small="true"
                      typeAction="delete"
                      icon={<GoTrash size={"15px"} />}
                      action={() => {
                        setVisibleDeleteModal(
                          (visibleDeleteModal) => !visibleDeleteModal
                        );
                        setSelectedOrganization(item.name_organization);
                      }}
                      disabled={item.count_user > 0 ? "disabled" : ""}
                    />
                  </ColumnAction>
                </TrBody>
              );
            })}
          </tbody>
        </Table>
      </ConteinerTable>
    </>
  );

  return { viewOrganization };
};
