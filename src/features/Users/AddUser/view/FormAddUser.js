import { USERSETTINGS } from "../../../../core/InfoText";
import { Loader } from "../../../../common/Loader";
import { Button } from "../../../../common/Button";
import { TableAction } from "../../../../common/styledTable";
import { OrganizationUser } from "./OrganizationUser";
import { DataUser } from "./DataUser";
import { AiOutlineUserAdd } from "react-icons/ai";

export const FormAddUser = () => {
  const { formDataUser, checkDataUser, dataUser } = DataUser();
  const {
    tableOrganization,
    fetchDataLoading,
    addUserIntoOrganization,
    organizationChecked,
  } = OrganizationUser();

  const SubmitDataUser = (event) => {
    event.preventDefault();
    checkDataUser();
    addUserIntoOrganization();
    console.log(dataUser, organizationChecked);
  };

  const formAddUser = (
    <form onSubmit={SubmitDataUser}>
      {formDataUser}
      {fetchDataLoading ? (
        <Loader margin=" 30px auto" />
      ) : (
        <>
          {tableOrganization}
          <TableAction>
            <Button
              text={USERSETTINGS.BUTTON_CREATE_ACCOUNT}
              typeAction="add"
              icon={<AiOutlineUserAdd size={"15px"} />}
              type="submit"
            />
          </TableAction>
        </>
      )}
    </form>
  );

  return { formAddUser };
};
