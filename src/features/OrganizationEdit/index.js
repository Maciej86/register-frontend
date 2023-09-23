import { useParams } from "react-router-dom";

export const OrganizationEdit = () => {
  const { id } = useParams();
  console.log(id);
  return <h1>Tutaj id organizacji {id}</h1>;
};
