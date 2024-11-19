import styled from "styled-components";

export const HomeStyle = styled.section`
    .titulo-home{
        display: flex;
        justify-content: center;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    .custom-card-group {
        gap: 1rem;
        margin-bottom: 8%;
    }

    .custom-card {
        max-width: 450px;
        margin: 0 auto; 
    }

    .custom-card img {
        height: auto;
        max-height: 250px;
    }
`