export const SelectDefaultValue = (data, value) => {
  let defaultValue = "";
  data?.map((item, index) => {
    index = 0;
    if (Object.values(item)[index] === value)
      defaultValue = Object.values(item)[index + 1];
  });

  return defaultValue;
};
