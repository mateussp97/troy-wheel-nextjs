import styled from "@emotion/styled";

export const WheelContainer = styled.div`
  display: block;
  position: relative;
  width: calc(var(--wheel-size) + 2 * var(--wheel-border-size));
  height: calc(var(--wheel-size) + 2 * var(--wheel-border-size));
  background-color: var(--neutral-color);
  border-radius: 50%;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 0;
    width: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 20px solid transparent;
  }

  &::before {
    right: 0px;
    border-right-color: var(--wheel-color);
  }

  &::after {
    right: -5px;
    border-right-color: var(--neutral-color);
  }
`;

export const WheelWrapper = styled.div`
  width: var(--wheel-size);
  height: var(--wheel-size);

  box-sizing: content-box;

  background-color: var(--wheel-color);

  display: block;
  position: relative;

  overflow: hidden;

  border: var(--wheel-border-size) solid var(--wheel-color);
  border-radius: 50%;

  transition: transform var(--reset-duration);
  transform: rotate(0deg);
  cursor: pointer;

  &::after {
    content: "";
    width: 25px;
    height: 25px;
    background-color: var(--neutral-color);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  &.spinning {
    transition: transform var(--spinning-duration);
    transform: rotate(
      calc(
        var(--nb-turn) * 360deg +
          (-360deg * var(--selected-item) / var(--nb-item, 1))
      )
    );
  }
`;

export const WheelItem = styled.div`
  width: 50%;

  display: block;

  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center left;
  transform: translateY(-50%)
    rotate(calc(var(--item-nb) * (360deg / var(--nb-item, 1))));

  color: var(--neutral-color);
  text-align: right;
  padding: 0 25px 0 50px;

  &:before {
    content: " ";
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.25;

    --slice-max-width: calc(
      var(--PI) * var(--wheel-size) + var(--wheel-size) / 2
    );
    --slice-width: calc(
      (var(--slice-max-width) / var(--nb-item)) - var(--wheel-slice-spacing)
    );

    border: calc(var(--slice-width) / 2) solid transparent;
    border-left: 0 solid transparent;
    border-right: calc(var(--wheel-size) / 2) solid var(--neutral-color);
  }
`;
