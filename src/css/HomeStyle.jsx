import styled from "styled-components";

export const HomeStyle = styled.section`
    .titulo-home {
        color: green;
        display: flex;
        justify-content: center;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    .custom-card-group {
        margin-bottom: 8%;
    }
    .custom-card {
        max-width: 380px;
        margin: 0 auto; 
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        &:hover {
            transform: translateY(-10px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
    }
    .custom-card img {
        height: auto;
        max-height: 250px;
    }
    .custom-card-group {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
`;
