import { LuSave } from "react-icons/lu";
import { InputText } from "../../common/elements/InputText";
import { Button } from "../../common/elements/Button";
import { TileTwoHalf } from "../../common/TileTwoHalf";
import { Tile } from "../../common/Tile";
import { Conteiner, FormArea } from "./styled";

export const Organization = () => {
  const formNewOrganization = (
    <form>
      <FormArea>
        <InputText
          id="organization"
          placeholder="Nazwa organizacji"
          label=""
          small={true}
          maxlength="50"
        />
        <Button text="Dodaj" icon={<LuSave size={"15px"} />} action={null} />
      </FormArea>
    </form>
  );

  return (
    <Conteiner>
      <TileTwoHalf
        title="Utwórz nową organizację"
        subTitle="Przypisuj utworzone organizacje do użytkowników."
        body={formNewOrganization}
      />
      <Tile title="Organizacje" subTitle="Zarządzaj organizacjami" />
    </Conteiner>
  );
};
