import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  padding: 12px 47px;
  background: ${({ theme }) => theme.color.danger};
  border-radius: ${({ theme }) => theme.size.border_radius};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  box-shadow: 0 0 15px 3px ${({ theme }) => theme.color.danger_dark};
  z-index: 10;
  animation: fadeIn 0.3s forwards linear;

  @keyframes fadeIn {
    0% {
      top: 20px;
      opacity: 0;
    }

    100% {
      top: 30px;
      opacity: 1;
    }
  }
`;

export const Message = styled.span`
  font-weight: 600;
`;
