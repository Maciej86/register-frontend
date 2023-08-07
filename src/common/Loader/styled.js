import styled from "styled-components";

export const Spin = styled.div`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  margin: ${({ $margin }) => $margin};
  border: ${({ $border }) => $border} solid rgba(0, 0, 0, 0);
  border-left: ${({ $border }) => $border} solid
    ${({ theme }) => theme.color.info};
  border-bottom: ${({ $border }) => $border} solid
    ${({ theme }) => theme.color.info};
  border-radius: 50%;
  animation: spin 0.6s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
