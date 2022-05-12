import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #000;
  height: 100vh;
  width: 142rem;
`;

export const Background = styled.img`
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export const PlayerSeats = styled.div`
  position: absolute;
  transform: translateX(-50%);
  top: 55%;
  left: 50%;
  display: flex;
  gap: 10.5rem;
`;

export const PlayerSeatContainer = styled.div``;

const paddingForSeat = ({ num }) =>
  `${(num === 0 || num === 3) && "transform: translateY(-40px)"}`;

export const SeatArea = styled.div`
  ${paddingForSeat};
  width: 9.5rem;
  height: 9.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  outline: ${({ selected }) =>
      `${
        selected
          ? "8px rgba(102, 153, 153, 0.8)"
          : "2px rgba(102, 153, 153, 0.5)"
      }`}
    solid;
  border-radius: 50%;
  transition: all 150ms ease-in-out;
  &:hover {
    cursor: pointer;
    ${({ selected }) =>
      `${
        !selected &&
        `
        outline: 4px rgba(102, 153, 153, 0.8) solid;
    `
      }`}
  }
`;

export const Chips = styled.div`
  display: flex;
  ${paddingForSeat};
  flex-direction: column-reverse;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  position: relative;
`;

export const Chip = styled(motion.div)`
  width: 6rem;
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
  z-index: 30;
  top: 5%;
  left: 50%;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  position: relative;
`;

export const ErrorContainer = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: -8rem;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5rem 2rem;
  color: rgba(255, 153, 153, 0.7);
  border-radius: 4rem;
  font-size: 1.8rem;
  max-width: 100%;
  min-width: fit-content;
  &:after {
    content: "";
    width: 0;
    height: 0;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    border-bottom: 12px solid rgba(0, 0, 0, 0.5);
    border-right: 12px solid transparent; /* 40px height (20+20) */
    border-left: 12px solid transparent;
    position: absolute;
  }
`;

export const PrimaryButton = styled.button`
  cursor: pointer;
  border: 0;
  font-weight: 900;
  transition: all 150ms ease-in-out;
  text-transform: uppercase;
  padding: 1.8rem 2.3rem;
  font-size: 2.2rem;
  border-radius: 4rem;
  &:hover {
    transform: translateY(-3px) scale(1.045);
  }
  &:active {
    transform: translateY(-1px) scale(1.025);
  }
  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
  display: flex;
  gap: 0.8rem;
  align-items: center;
  svg {
    width: 3rem;
  }
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
  ${({ clickAllowed }) =>
    `${
      !clickAllowed &&
      css`
        pointer-events: none;
      `
    }`};
`;

export const SeatMessage = styled.h4`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 900;
  position: absolute;
  transform: translateX(-50%);
  opacity: 0.8;
  top: 30%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem 3rem;
  border-radius: 30px;
  left: 50%;
  user-select: none;
`;
