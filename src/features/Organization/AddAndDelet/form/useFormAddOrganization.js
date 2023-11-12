import { useSelector } from "react-redux";
import { selectLoadingAddOrganization } from "../../../../store/Organization/sliceOrganization";
import { ORGANIZATION } from "../../../../core/InfoText";
import { Loader } from "../../../../common/Loader";
import { InputText } from "../../../../common/InputText";
import { Button } from "../../../../common/Button";
import { useAddOrganization } from "../checkValue/useAddOrganization";
import { FormArea } from "../styled";
import { TbCubePlus } from "react-icons/tb";

export const useFormAddOrganization = () => {
  const loadingAddOrganization = useSelector(selectLoadingAddOrganization);
  const { addNewOrganization, nameOrganization, emptyNameOrganization } =
    useAddOrganization();

  const formNewOrganization = (
    <form>
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
            action={addNewOrganization}
          />
        )}
      </FormArea>
    </form>
  );

  return { formNewOrganization };
};
