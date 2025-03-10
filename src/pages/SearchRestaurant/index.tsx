import styled from "styled-components";
import { colors } from "../../_variables";
import { Button, Logo } from "../../components";
import IconSearch  from "../../assets/icons/IconSearch.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { IHomeRestaurant } from "../../interfaces/Restaurant";


const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 8px;
  height: 100vh;
`;
const Title = styled.p`
  font-size: 24px;
  color: ${colors.masala};
  margin: 24px 0 8px;
`;

const Description = styled.span`
    font-size: 16px;
    color: ${colors.boulder};
    margin-bottom: 24px;
`

const FieldContainer = styled.div`
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;
const Field = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${colors.alabaster};
  transition: all 0.2s ease-in;
  border: none;

  &::placeholder {
    font-size: 14px;
    color: ${colors.mountainMist};
  }

  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.thunderbird};
  }
`;

const Message = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 10px;
  color: ${colors.thunderbird};
  margin-bottom: 16px;
`;


export const SearchRestaurant = () => {
  const [hasRestaurant, setHasRestaurant] = useState<boolean | null>(null)
  const [ valueID, setValueID] = useState(0)
  const [data, setData] = useState<IHomeRestaurant | null>()
  const navigate = useNavigate()
 
  useEffect(()=> {
      axios.get(`http://localhost:3333/public/restaurants/${valueID}`)
      .then(response => response.data)
      .then(data => {
        setHasRestaurant(true)
        setData(data)
      })
      .catch(error => (error))
  },[valueID])

  const search = () => {
      data?.id ? navigate(`/${data?.id}`) : setHasRestaurant(false)
  }

    return (
      <Wrapper>
      <Logo/>
      <Title>Buscar restaurante</Title>
      <Description>Digite o ID de um restaurante</Description>

      <FieldContainer>
        <Field type="text" placeholder="Buscar" autoFocus onChange={(e) => setValueID(Number(e.target.value))} />
        <img src={IconSearch}/>
      </FieldContainer>

      { hasRestaurant == false && <Message> Restaurante não encontrado! </Message>}
     
     <Button isFill radius="50px" padding="12px" onClick={search} >
        Buscar
      </Button>
    </Wrapper>
    );
};