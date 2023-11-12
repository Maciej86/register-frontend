import { Input, Label } from "../styledCommon";
import {
  BoxSelect,
  MaskSelect,
  SelectButton,
  SelectItem,
  SelectList,
} from "./styled";

export const InputSelect = ({
  id,
  label,
  data,
  toggle,
  setToggle,
  value,
  setValue,
  valueData,
  setValueData,
}) => {
  return (
    <BoxSelect onMouseLeave={() => setToggle(false)}>
      <MaskSelect onClick={() => setToggle((toggle) => !toggle)}></MaskSelect>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <input type="hidden" value={valueData} />
      <SelectList $isVisibilty={toggle}>
        {data?.map((item, index) => {
          index = 0;
          return (
            <SelectItem key={Object.values(item)[index]}>
              <SelectButton
                onClick={() => {
                  setValueData(Object.values(item)[index]);
                  setValue(Object.values(item)[index + 1]);
                  setToggle(false);
                }}
                type="button"
              >
                {Object.values(item)[index + 1]}
              </SelectButton>
            </SelectItem>
          );
        })}
      </SelectList>
    </BoxSelect>
  );
};
