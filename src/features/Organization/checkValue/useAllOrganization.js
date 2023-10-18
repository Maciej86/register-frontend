import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAddNewOrganization } from "../../../store/Organization/sliceOrganization";
import { URL_ORGANIZATION } from "../../../core/urlBackend";
import { useFetchData } from "../../../core/useFetchData";
import { Loader } from "../../../common/Loader";
import { Modal } from "../../../common/Modal";
import { Button } from "../../../common/elements/Button";
import { LinkButton } from "../../../common/elements/styled";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { LuSave } from "react-icons/lu";
import {
  ColumnAction,
  ColumnCountUser,
  ColumnLp,
  ColumnName,
  ConteinerTable,
  Table,
  Th,
  ThLeft,
  TrBody,
  TrHead,
} from "../../../common/styledCommon";
import { TextDelete } from "../styled";

export const useAllOrganizaton = () => {
  const addNewOrganization = useSelector(selectAddNewOrganization);
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_ALL_ORGANIZATION,
    [addNewOrganization]
  );

  const ContentDelete = (
    <TextDelete>{`Czy napewno chcesz usunąć organizację: ${selectedOrganization}?`}</TextDelete>
  );

  const viewOrganization = fetchDataLoading ? (
    <Loader margin=" 30px auto" />
  ) : (
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
            {fetchData?.map((item, index) => {
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
