import { Loader } from "../../../../common/Loader";
import { Modal } from "../../../../common/Modal";
import { LinkButton } from "../../../../common/styledLinkButton";
import { Button } from "../../../../common/Button";
import {
  ColumnCenter,
  ConteinerTable,
  EmptyTable,
  Table,
  Th,
  Th80,
  ThLp,
  TrBody,
  TrHead,
} from "../../../../common/styledTable";
import { COMMON, NAVIGATION, ORGANIZATION } from "../../../../core/InfoText";
import { useDeleteOrganization } from "../checkValue/useDeleteOrganization";
import { TextDelete } from "../styled";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

export const useAllOrganizaton = () => {
  const {
    fetchData,
    fetchDataLoading,
    deleteOrganization,
    loadingDeleteOrganization,
    visibleModal,
    setVisibleModal,
    selectedOrganization,
    setSelectedOrganization,
    idOrganization,
    setIdOrganization,
  } = useDeleteOrganization();

  const ContentDelete = (
    <TextDelete>{`${ORGANIZATION.CONFIRM_DELETE_ORGANIZATION} ${selectedOrganization}?`}</TextDelete>
  );

  const viewOrganization = fetchDataLoading ? (
    <Loader margin=" 30px auto" />
  ) : (
    <>
      <Modal
        setVisible={setVisibleModal}
        visible={visibleModal}
        textHeader={ORGANIZATION.TITLE_MODAL_DELETE_ORGANIZATION}
        content={ContentDelete}
        type="delete"
        typeButton="delete"
        buttonText={ORGANIZATION.BUTTON_MODAL_DELETE_ORGANIZATION}
        buttonIcon={<GoTrash size={"15px"} />}
        buttonAction={() => deleteOrganization(idOrganization)}
        loadingAction={loadingDeleteOrganization}
      />
      <ConteinerTable>
        <Table>
          <thead>
            <TrHead>
              <ThLp>{COMMON.TABLE_HEADER_COUNT}</ThLp>
              <Th80>{COMMON.TABLE_HEADER_NAME}</Th80>
              <Th>{COMMON.TABLE_HEADER_USER}</Th>
              <Th>{COMMON.TABLE_HEADER_EDIT}</Th>
              <Th>{COMMON.TABLE_HEADER_DELETE}</Th>
            </TrHead>
          </thead>
          <tbody>
            {fetchData.length === 0 ? (
              <tr>
                <ColumnCenter colSpan="5">
                  <EmptyTable>
                    {ORGANIZATION.EMPTY_TABLE_ALL_ORGANIZATION}
                  </EmptyTable>
                </ColumnCenter>
              </tr>
            ) : (
              fetchData?.map((item, index) => {
                index++;
                return (
                  <TrBody key={index}>
                    <ColumnCenter>{index}</ColumnCenter>
                    <td>{item.name_organization}</td>
                    <ColumnCenter>{item.count_user}</ColumnCenter>
                    <ColumnCenter>
                      <LinkButton
                        to={`/${NAVIGATION.NAV_ID_ORGANIZATION}/${item.id}`}
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
                          setVisibleModal((visibleModal) => !visibleModal);
                          setSelectedOrganization(item.name_organization);
                          setIdOrganization(item.id);
                        }}
                        disabled={item.count_user > 0 ? "disabled" : ""}
                      />
                    </ColumnCenter>
                  </TrBody>
                );
              })
            )}
          </tbody>
        </Table>
      </ConteinerTable>
    </>
  );

  return { viewOrganization };
};
