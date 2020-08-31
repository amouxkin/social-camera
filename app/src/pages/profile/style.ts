import styled from "styled-components";
import { ComponentPropsWithoutRef } from "react";

export const Camera = styled.div`
  height: 400px;
  background: radial-gradient(black, transparent);
  color: #ffffff;
  font: bold 18px/24px "Source sans pro";
  text-align: center;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  width: 300px;
  margin: 10px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img<ComponentPropsWithoutRef<"img">>`
  margin: 20px 0;
`;
export const UploadButton = styled.button<ComponentPropsWithoutRef<"button">>`
  background-color: var(--gb-web-red);
  width: 620px;
  margin-left: 10px;
`;
