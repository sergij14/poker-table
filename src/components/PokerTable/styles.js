import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components";

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
  gap: 8.5rem;
`;

const paddingForSeat = ({ num }) =>
  `${(num === 0 || num === 3) && "transform: translateY(-40px)"}`;

export const SeatArea = styled.div`
  ${paddingForSeat};
  width: 10.5rem;
  height: 10.5rem;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  ${({ selected }) =>
      `${
        selected
          ? "box-shadow: 0 0 0 8px rgba(192, 183, 153, 0.8)"
          : "box-shadow: 0 0 0 8px rgba(102, 153, 153, 0.5)"
      }`};
  border-radius: 50%;
  transition: all 150ms ease-in-out;
  &:hover {
    cursor: pointer;
    ${({ selected }) =>
      `${
        !selected &&
        `
        box-shadow: 0 0 0 8px rgba(102, 153, 153, 0.8);
    `
      }`}
  }
`;

export const Chips = styled.div`
  ${paddingForSeat};
  display: flex;
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
  top: 5rem;
  left: 50%;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

export const ErrorContainer = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1.5rem 2rem;
  color: rgba(255, 153, 153, 0.7);
  border-radius: 4rem;
  font-size: 1.8rem;
  &:after {
    content: "";
    width: 0;
    height: 0;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    border-bottom: 12px solid rgba(0, 0, 0, 0.8);
    border-right: 12px solid transparent; /* 40px height (20+20) */
    border-left: 12px solid transparent;
    position: absolute;
  }
`;

const commonButtonStyles = () => css`
  cursor: pointer;
  border: 0;
  font-weight: 900;
  transition: all 150ms ease-in-out;
  text-transform: uppercase;
  border-radius: 4rem;
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
`;

export const PrimaryButton = styled.button`
  ${commonButtonStyles}
  padding: 1.8rem 2.3rem;
  font-size: 2.2rem;
  &:hover {
    transform: translateY(-3px) scale(1.045);
  }
  &:active {
    transform: translateY(-1px) scale(1.025);
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
    box-shadow: 0 0 0 6px rgba(96, 34, 11, 0.6);
  }
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

export const GameInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const GameInfo = styled.div`
  position: absolute;
  transform: translateX(-50%);
  width: 100%;
  z-index: 30;
  bottom: 8rem;
  left: 50%;
`;

export const VolumeLevelContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1.5rem 2rem;
  color: rgba(255, 153, 153, 0.7);
  border-radius: 4rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 2.2rem;
  gap: 1rem;
  & > svg {
    & path {
      color: inherit;
    }
    width: 3rem;
  }
`;
export const VolumeBtn = styled.button`
  ${commonButtonStyles}
  padding: 1rem 1.3rem;
  font-size: 1.8rem;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(-1px);
  }
  background: rgb(236, 236, 236);
  background: linear-gradient(
    180deg,
    rgba(236, 236, 236, 1) 0%,
    rgba(215, 210, 211, 1) 100%
  );
  color: rgb(108, 122, 137);
  text-shadow: 2px 1px #fff;
  &:focus {
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.9);
  }
`;
