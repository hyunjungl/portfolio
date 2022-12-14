import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { VscMail } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { useSetRecoilState } from "recoil";
import { slideState } from "../atoms/slide";

export default function Contact() {
  const setIndex = useSetRecoilState(slideState);

  function handleIndex(index) {
    setIndex(index);
  }
  return (
    <>
      <Button>
        <BiArrowToTop
          size={50}
          onClick={() => {
            handleIndex(0);
          }}
        />
      </Button>
      <Head>CONTACT</Head>
      <Container>
        <Block1>
          <FiPhone />
          010.9112.7755
          <VscMail />
          amandalhj@kakao.com
        </Block1>

        <Block2>
          <RiKakaoTalkFill size={50} />
          <BsGithub size={50} />
        </Block2>
      </Container>
    </>
  );
}
const Button = styled.div`
  position: absolute;
  right: 50px;
`;
const Head = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Block1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  margin-right: 200px;
  border-right: 3px dashed black;
  padding: 30px;
`;

const Block2 = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  margin-left: 200px;
  padding: 30px;
`;
