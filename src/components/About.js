import styled from "styled-components";
import Skills from './Skills';

export default function About() {
    return (
        <Block>
        <Picture/>
        <Block2>
          <Text>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quia voluptate accusantium distinctio illum fugit eligendi sed, quo, et molestiae earum voluptas. Minus animi pariatur vel officia earum? Quaerat, harum?
          </Text>
          <Skills/>
        </Block2>
      </Block>
      );
}

const Block=styled.div`
display: flex;
justify-content: center;
align-items: center;

`;
const Block2=styled.div`
margin-left: 50px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const Picture=styled.div`
position: relative;
top: 100px;
left: 10px;
width: 300px;
height: 400px;
border: 1px solid black;
 
`;
const Text=styled.div`
`