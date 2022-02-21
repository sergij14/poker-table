import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
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
  color: ${({ theme }) => theme.colors.primary};
`;

export const Buttons = styled.div`
  position: absolute;
  transform: translateX(-50%);
  top: 10%;
  left: 50%;
  display: flex;
  gap: 1em;
  width: ${({ width }) => `${width && width}px`};
  justify-content: center;
`;
