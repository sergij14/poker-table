import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div`
  background-image: url("./img/bg.jpg");
  background-size: cover;
  height: 100vh;
`;

export const PlayerSeats = styled.div`
  position: absolute;
  transform: translateX(-50%);
  bottom: 10%;
  left: 50%;
  display: flex;
  gap: 4rem;
`;

export const SeatArea = styled.div`
  width: 6rem;
  height: 6rem;
  border: 2px ${({ selected }) => `${selected ? "tomato" : "white"}`} solid;
  border-radius: 50%;
  ${({ selected }) => `${selected ? `opacity: 1` : "opacity: 0.4"}`};
  &:hover {
    border: 5px white solid;
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Chips = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Chip = styled(motion.div)`
  width: 40px;
  height: 35px;
  position: absolute;
  overflow: visible;
  img {
    width: 40px;
    height: 35px;
    position: absolute;
    inset: 0;
  }
  bottom: ${({ num }) => `${(num + 1) * 9}px`};
  z-index: ${({ num }) => `${num + 10}`};
`;

export const ChipAmount = styled.span`
  position: absolute;
  inset: 0;
  z-index: 20;
  top: 1.5rem;
  transform: translateY(-50%);
  display: block;
  font-size: 1.4rem;
  text-align: center;
  color: #3b2b0a;
`;

export const Buttons = styled.div`
  position: absolute;
  transform: translateX(-50%);
  top: 10%;
  left: 50%;
  width: ${({ width }) => `${width && width}px`};
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const commonButtonStyles = () => css`
  border: 0;
  font-size: 2rem;
  font-weight: 900;
  transition: all 150ms ease-in-out;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  border-radius: 4rem;
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(-1px);
  }
  display: flex;
  gap: 0.8rem;
  align-items: center;
  svg {
    width: 3rem;
  }
`;

export const PrimaryButton = styled.button`
  ${commonButtonStyles};
  background: rgb(226, 195, 103);
  background: linear-gradient(
    180deg,
    rgba(226, 195, 103, 1) 0%,
    rgba(180, 136, 50, 1) 100%
  );
  color: #3e2d0b;
  text-shadow: 2px 1px #c5a86a;
  box-shadow: 2px 4px 4px rgba(37, 12, 4, 0.6);
  &:hover {
    box-shadow: 4px 6px 6px rgba(37, 12, 4, 0.8);
  }
  &:focus {
    outline: 6px solid rgba(96, 34, 11, 0.6);
    box-shadow: 8px 10px 10px rgba(37, 12, 4, 0.8);
  }
`;
