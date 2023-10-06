import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../common/Loader";
import { Button } from "../../../common/elements/Button";
import { InputText } from "../../../common/elements/InputText";
import { FormArea } from "../styled";
import {
  fetchOrganization,
  selectLoadingEditOrganization,
  selectOneOrganization,
} from "../../../store/Organization/sliceOrganization";
import { useEditNameOrganization } from "../checkValue/useEditNameOrganization";
import { LuFileEdit } from "react-icons/lu";

export const useFormEditOrganization = () => {
  const { id } = useParams();
  const {
    editNameOrganization,
    idEditOrganization,
    emptyNameOrganization,
    changeNameOrganization,
  } = useEditNameOrganization();
  const dispatch = useDispatch();
  const nameOrganization = useSelector(selectOneOrganization);
  const loadingEditNameOrganization = useSelector(
    selectLoadingEditOrganization
  );

  useEffect(() => {
    dispatch(fetchOrganization(id));
  }, [id]);

  const formEditname = (
    <form>
      <FormArea>
        <InputText
          id="organization"
          placeholder="Nazwa organizacji"
          label=""
          small={true}
          maxlength="50"
          value={nameOrganization[0]?.name_organization}
          empty={emptyNameOrganization}
          ref={editNameOrganization}
        />
        <input type="hidden" value={id} ref={idEditOrganization} />
        {loadingEditNameOrganization ? (
          <Loader margin="0 67px" />
        ) : (
          <Button
            text="Zmień nazwę"
            icon={<LuFileEdit size={"15px"} />}
            action={changeNameOrganization}
          />
        )}
      </FormArea>
    </form>
  );
  return { formEditname };
};
