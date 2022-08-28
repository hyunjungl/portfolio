import styled from "styled-components";
import Skills from './Skills';

export default function About() {
    return (
        <Container>
            <Block1>
                <Picture/>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                        Eum repudiandae sunt quo reprehenderit aliquid aspernatur<br/>
                         molestiae inventore quasi impedit non mollitia ipsam cumque,<br/>
                          unde temporibus veniam nobis neque iusto rerum. <br/>
                          Praesentium illum quibusdam, aut enim iusto libero rem<br/>
                           cupiditate numquam, quaerat vitae quo deleniti aspernatur<br/>
                            vero nisi tempora aliquid adipisci.<br/>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>
                            Eaque illum pariatur voluptatum error. Placeat sunt rerum enim quaerat<br/>
                             molestiae soluta. Ipsa consequuntur reiciendis eos at architecto sapiente<br/>
                              iusto dolore modi?<br/>
                </Text>
            </Block1>
            <Block2>
                 <Text2>
                     The Skills What I Have :
                  </Text2>
                  <Skills/>
            </Block2>
      </Container>
      );
}

const Container=styled.div`

`;
const Block1=styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 50px;

`;

const Picture=styled.div`
/* position: relative;
top: 100px;
left: 10px; */
width: 400px;
height: 300px;
border: 1px solid black;
 
`;
const Text=styled.div`
font-size: 20px;
`;

const Block2=styled.div`
display: flex;
justify-content: center;
justify-content: space-evenly;
margin-top: 50px;

`;

const Text2=styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
`;