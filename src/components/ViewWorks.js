import { atom, useSetRecoilState } from "recoil";
import styled from "styled-components";

export default function ViewWorks() {
  const [] = useSetRecoilState(atom);

  return <Button>View my work</Button>;
}

const Button = styled.div``;
