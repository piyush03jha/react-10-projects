import styled from "styled-components";


const StartGame = ({toggle}) => {
    return(
        <Container>
            <div className="img">
                <img src="/image/image.png" alt="dice img" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

    .img{
        img{
            height:500px;
            width:500px;
        }
    }
`;
const Button = styled.button`
    padding: 10px 10px;
    color: white;
    min-width: 220px;
    background: #000000;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;