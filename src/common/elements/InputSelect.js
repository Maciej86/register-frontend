import {
  Input,
  Label,
  BoxSelect,
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
}) => {
  return (
    <BoxSelect onMouseLeave={() => setToggle(false)}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onClick={() => setToggle((toggle) => !toggle)}
      />
      <SelectList $isVisibilty={toggle}>
        {data.map((item, index) => (
          <SelectItem key={index}>
            <SelectButton
              onClick={() => {
                setValue(item);
                setToggle(false);
              }}
              type="button"
            >
              {item}
            </SelectButton>
          </SelectItem>
        ))}
      </SelectList>
    </BoxSelect>
  );
};
