import { Loader } from "../../../../common/Loader";
import { Modal } from "../../../../common/Modal";
import { Button } from "../../../../common/elements/Button";
import { LinkButton } from "../../../../common/elements/styled";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import {
  ConteinerTable,
  Table,
  Th,
  TrBody,
  TrHead,
  ColumnCenter,
  ThLp,
  Th80,
} from "../../../../common/styledCommon";
import { TextDelete } from "../styled";
import { useDeleteOrganization } from "../checkValue/useDeleteOrganization";

export const useAllOrganizaton = () => {
  const {
    fetchData,
    fetchDataLoading,
    deleteOrganization,
    loadingDeleteOrganization,
    visibleDeleteModal,
    setVisibleDeleteModal,
    selectedOrganization,
    setSelectedOrganization,
    idOrganization,
    setIdOrganization,
  } = useDeleteOrganization();

  const ContentDelete = (
    <TextDelete>{`Czy na pewno chcesz usunąć organizację: ${selectedOrganization}?`}</TextDelete>
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
        buttonAction={() => deleteOrganization(idOrganization)}
        loadingAction={loadingDeleteOrganization}
      />
      <ConteinerTable>
        <Table>
          <thead>
            <TrHead>
              <ThLp>Lp.</ThLp>
              <Th80>Nazwa</Th80>
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
                  <ColumnCenter>{index}</ColumnCenter>
                  <td>{item.name_organization}</td>
                  <ColumnCenter>{item.count_user}</ColumnCenter>
                  <ColumnCenter>
                    <LinkButton
                      to={`/organizacja-edytuj/${item.id}`}
                      $small="true"
                    >
                      <FiEdit size={"15px"} />
                    </LinkButton>
                  </ColumnCenter>
                  <ColumnCenter>
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
                        setIdOrganization(item.id);
                      }}
                      disabled={item.count_user > 0 ? "disabled" : ""}
                    />
                  </ColumnCenter>
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
