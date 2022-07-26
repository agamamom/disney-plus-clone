import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommends = (props) => {
    return (
        <Container>
            <h4>
                Recommend for you
            </h4>
            <Content>
                <Wrap>
                    <Link to="/">
                        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/dist" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
};

const Container = styled.div`
    padding: 0 0 26px;
`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media screen and(max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    
`;
export default Recommends;