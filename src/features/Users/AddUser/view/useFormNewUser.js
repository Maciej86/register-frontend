import { USERSETTINGS } from "../../../../core/InfoText";
import { Loader } from "../../../../common/Loader";
import { Button } from "../../../../common/Button";
import { TableAction } from "../../../../common/styledTable";
import { useTableOrganization } from "./useTableOrganization";
import { useFormDataUser } from "./useFormDataUser";
import { AiOutlineUserAdd } from "react-icons/ai";

export const useFormNewUser = () => {
  const { formDataUser } = useFormDataUser();
  const { tableOrganization, fetchDataLoading } = useTableOrganization();

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
