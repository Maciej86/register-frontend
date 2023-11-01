import { useSelector } from "react-redux";
import { selectLoadingAddOrganization } from "../../../../store/Organization/sliceOrganization";
import { ORGANIZATION } from "../../../../core/InfoText";
import { Loader } from "../../../../common/Loader";
import { useAddOrganization } from "../checkValue/useAddOrganization";
import { InputText } from "../../../../common/elements/InputText";
import { Button } from "../../../../common/elements/Button";
import { FormArea } from "../styled";
import { IoIosAddCircleOutline } from "react-icons/io";

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
          <Loader margin="0 43px" />
        ) : (
          <Button
            text="Dodaj"
            icon={<IoIosAddCircleOutline size={"15px"} />}
            action={addNewOrganization}
          />
        )}
      </FormArea>
    </form>
  );

  return { formNewOrganization };
};
