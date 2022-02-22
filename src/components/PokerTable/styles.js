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
  width: 12rem;
  height: 12rem;
  background-color: rgba(0,0,0, 0.7);
  border: ${({ selected }) => `${selected ? "8px rgba(102, 153, 153, 0.8)" : "4px rgba(102, 153, 153, 0.5)"}`} solid;
  border-radius: 50%;
  transition: all 150ms ease-in-out;
  &:hover {
    cursor: pointer;
    ${({selected}) => `${!selected && `
        border: 8px rgba(102, 153, 153, 0.5) solid;
    `}`}
  }

`;

export const Chips = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover{
    transform: translateY(-3px);
  }
  &:active{
    transform: translateY(-1px);
  }
`;

export const Chip = styled(motion.div)`
  width: 7rem;
  height: 6.5rem;
  position: absolute;
  overflow: visible;
  img {
    width: 100%;
    height: 100%;
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
  top: 3.3rem;
  transform: translateY(-50%);
  user-select: none;
  display: block;
  font-size: 1.8rem;
  font-weight: 900;
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
  user-select: none;
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
  &:disabled {
    opacity: 0.7;
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
  &:focus {
    outline: 6px solid rgba(96, 34, 11, 0.6);
  }
`;


export const SeatMessage = styled.h4`
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 900;
  position: absolute;
  transform: translateX(-50%);
  opacity:0.8;
  top: 40%;
  left: 50%;
  letter-spacing: 2px;
  user-select: none;
` 
