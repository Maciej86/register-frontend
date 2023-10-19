import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../core/useFetchData";
import { URL_ORGANIZATION } from "../../../core/urlBackend";
import { Loader } from "../../../common/Loader";
import { useRoleUser } from "../../../core/useRoleUser";
import {
  Column,
  Column80,
  ColumnCenter,
  ColumnLp,
  ConteinerTable,
  Table,
  Th,
  ThLeft,
  TrBody,
  TrHead,
} from "../../../common/styledCommon";
import { ConteinerLoader } from "../styled";
import { Button } from "../../../common/elements/Button";
import { AiOutlineUserDelete } from "react-icons/ai";
import {
  InputToogleSwitch,
  LabelToogleSwitch,
  SpanToogleSwitch,
  TableAction,
} from "../../Organization/styled";
import { current } from "@reduxjs/toolkit";

export const useFormUsersInOrganization = () => {
  const { id } = useParams();
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_USER_IN_ORGANIZATION,
    [id],
    { id: parseInt(id) }
  );
  const { userRole } = useRoleUser();
  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    fetchData?.forEach(() => {
      setIsChecked((isChecked) => [...isChecked, true]);
    });
  }, [fetchData]);

  const changeChecked = (index, value) => {
    const newChceked = [...isChecked];
    newChceked[index] = value;
    setIsChecked(newChceked);
  };

  const formUserInOrganization = fetchDataLoading ? (
    <ConteinerLoader>
      <Loader margin="30px auto" />
    </ConteinerLoader>
  ) : (
    <>
      <ConteinerTable>
        <Table>
          <thead>
            <TrHead>
              <Th>Lp.</Th>
              <ThLeft>Imię</ThLeft>
              <ThLeft>Nazwisko</ThLeft>
              <ThLeft>Konto</ThLeft>
              <Th>Zmień</Th>
            </TrHead>
          </thead>
          <tbody>
            {fetchData?.map((item, index) => {
              let number = index + 1;
              return (
                <TrBody key={index}>
                  <ColumnLp>{number}</ColumnLp>
                  <Column>{item.name}</Column>
                  <Column>{item.last_name}</Column>
                  <Column80>{userRole(item.role, true)}</Column80>
                  <ColumnCenter>
                    <form>
                      <LabelToogleSwitch
                        id={index}
                        $isChecked={isChecked[index]}
                      >
                        <InputToogleSwitch
                          htmlFor={index}
                          type="checkbox"
                          value={item.id}
                          onChange={(event) =>
                            changeChecked(index, event.target.checked)
                          }
                          checked={isChecked[index]}
                        />
                        <SpanToogleSwitch
                          $isChecked={isChecked[index]}
                        ></SpanToogleSwitch>
                      </LabelToogleSwitch>
                    </form>
                  </ColumnCenter>
                </TrBody>
              );
            })}
          </tbody>
        </Table>
      </ConteinerTable>
      <TableAction>
        <Button
          text="Usuń z organizacji"
          typeAction="delete"
          icon={<AiOutlineUserDelete size={"15px"} />}
        />
      </TableAction>
    </>
  );

  return { formUserInOrganization };
};
