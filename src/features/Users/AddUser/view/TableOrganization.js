import { COMMON } from "../../../../core/InfoText";
import {
  Column,
  ColumnCenter,
  ConteinerTable,
  Table,
  Th,
  Th80,
  ThLp,
  TrBody,
  TrHead,
} from "../../../../common/styledTable";
import {
  InputBoxSwitch,
  LabelBoxSwitch,
  SpanBoxSwitch,
} from "../../../../common/styledInputBoxSwitch";
import { useAddOrganizationIntoUser } from "../hooks/useAddOrganizationIntoUser";

export const TableOrganization = () => {
  const { fetchData, fetchDataLoading, inputCheckbox, changeChecked } =
    useAddOrganizationIntoUser();

  const tableOrganization = (
    <>
      <h3>Przypisz organizacje</h3>
      <ConteinerTable>
        <Table>
          <thead>
            <TrHead>
              <ThLp>{COMMON.TABLE_HEADER_COUNT}</ThLp>
              <Th80>{COMMON.TABLE_HEADER_NAME}</Th80>
              <Th>{COMMON.TABLE_HEADER_USER}</Th>
              <Th>{COMMON.TABLE_HEADER_ADD}</Th>
            </TrHead>
          </thead>
          <tbody>
            {fetchData.map((item, index) => {
              let number = index + 1;
              return (
                <TrBody key={index}>
                  <ColumnCenter>{number}</ColumnCenter>
                  <Column>{item.name_organization}</Column>
                  <ColumnCenter>{item.count_user}</ColumnCenter>
                  <ColumnCenter>
                    <LabelBoxSwitch
                      id={index}
                      $isChecked={inputCheckbox[index]}
                    >
                      <InputBoxSwitch
                        htmlFor={index}
                        type="checkbox"
                        name="idUser"
                        defaultValue={item.id}
                        onChange={(event) =>
                          changeChecked(index, event.target.checked)
                        }
                        checked={inputCheckbox[index] || false}
                      />
                      <SpanBoxSwitch
                        $isChecked={inputCheckbox[index]}
                      ></SpanBoxSwitch>
                    </LabelBoxSwitch>
                  </ColumnCenter>
                </TrBody>
              );
            })}
          </tbody>
        </Table>
      </ConteinerTable>
    </>
  );
  return { tableOrganization, fetchDataLoading };
};
