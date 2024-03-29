import { useSelector } from "react-redux";
import { selectLoadingAddOrganization } from "@storeOrganization/sliceOrganization";
import { ORGANIZATION } from "@core/InfoText";
import { Loader } from "@common/Loader";
import { InputText } from "@common/InputText";
import { Button } from "@common/Button";
import { useAddOrganization } from "../hooks/useAddOrganization";
import { FormArea } from "../styled";
import { TbCubePlus } from "react-icons/tb";

export const FormAddOrganization = () => {
  const loadingAddOrganization = useSelector(selectLoadingAddOrganization);
  const { addNewOrganization, nameOrganization, emptyNameOrganization } =
    useAddOrganization();

  const formNewOrganization = (
    <form onSubmit={addNewOrganization}>
      <FormArea>
        <InputText
          id="organization"
          placeholder={ORGANIZATION.NEW_ORGANIZATION_PLACEHOLDER}
          label=""
          small={true}
          maxlength="50"
          empty={emptyNameOrganization}
          ref={nameOrganization}
        />
        {loadingAddOrganization ? (
          <Loader margin="0 82px" />
        ) : (
          <Button
            text={ORGANIZATION.BUTTON_ADD_ORGANIZATION}
            icon={<TbCubePlus size={"15px"} />}
            type="submit"
          />
        )}
      </FormArea>
    </form>
  );

  return { formNewOrganization };
};
