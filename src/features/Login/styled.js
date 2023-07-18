import styled from "styled-components";
import { color, size } from "../../core/css/theme";

const mediaSmall = "680px";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    ${color.primary_color},
    ${color.primary_light_color}
  );
`;

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  color: ${color.light};

  @media (max-width: ${mediaSmall}) {
    flex-direction: column;
  }
`;

export const ConteinerLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  padding: 10px 60px;
  background-color: ${color.primary_color};
  border: 1px solid ${color.primary_light_color};
  border-radius: ${size.border_radius};
  text-align: center;
  box-shadow: 0 0 15px ${color.dark};
  z-index: 1;

  @media (max-width: ${mediaSmall}) {
    height: auto;
    padding: 40px 0;
    background-color: inherit;
    border: 0;
    box-shadow: none;
  }
`;

export const LeftTitle = styled.h1`
  margin: 0;
  font-size: 2.2rem;
`;

export const SubTitle = styled.p`
  margin-top: 0;
  line-height: 0;
`;

export const Logo = styled.span`
  margin-top: 20px;
  font-size: 24px;
`;

export const ConteinerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 320px;
  padding: 10px 40px;
  background-color: ${color.primary_dark_color};
  border: 1px solid ${color.primary_light_color};
  border-radius: ${size.border_radius};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: 0 0 15px ${color.dark};

  @media (max-width: ${mediaSmall}) {
    height: auto;
    padding: 15px;
    border-radius: ${size.border_radius};
  }
`;

export const WrapperForm = styled.div`
  margin-top: 15px;
  text-align: center;
`;

export const FormTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  text-align: center;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const FormLabel = styled.label`
  font-weight: 600;
  text-align: left;
`;

export const FormInput = styled.input`
  width: 220px;
  padding: 4px 1px;
  border: none;
  background: none;
  border-bottom: 1px solid ${color.info};
  color: ${color.light};

  &:focus {
    outline: none;
    border-bottom-color: ${color.success};
  }
`;

export const FormButton = styled.button`
  margin-top: 25px;
  padding: 7px 25px;
  border: 2px solid ${color.info};
  border-radius: ${size.border_radius_small};
  background: ${color.info};
  color: ${color.white};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 0 15px ${color.dark};
  transition: background 0.4s;

  &:focus,
  &:hover {
    outline: none;
    background: ${color.info_dark};
  }
`;
