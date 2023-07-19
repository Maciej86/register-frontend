import styled from "styled-components";
import { color, size } from "../../../core/css/theme";

export const Wrapper = styled.div`
    position: absolute;
    padding: 12px 47px;
    background: ${color.danger};
    border: 2px solid ${color.danger_dark};
    border-radius: ${size.border_radius};
    color: ${color.white};
    text-align: center;
    box-shadow: 0 0 8px 2px ${color.danger_dark};
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