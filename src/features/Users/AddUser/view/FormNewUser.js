import { USERSETTINGS } from "../../../../core/InfoText";
import { Loader } from "../../../../common/Loader";
import { Button } from "../../../../common/Button";
import { TableAction } from "../../../../common/styledTable";
import { TableOrganization } from "./TableOrganization";
import { FormDataUser } from "./FormDataUser";
import { AiOutlineUserAdd } from "react-icons/ai";

export const FormNewUser = () => {
  const { formDataUser } = FormDataUser();
  const { tableOrganization, fetchDataLoading } = TableOrganization();

  const formNewUser = (
    <form>
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
              action={null}
            />
          </TableAction>
        </>
      )}
    </form>
  );

  return { formNewUser };
};
