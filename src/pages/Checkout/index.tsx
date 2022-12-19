import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import {
  CardBox,
  Container,
  ContainerScreen,
  Main,
  MapIcon,
  Subtitle,
  Title,
  Col,
} from "./styles";
import { Row } from "../../components/Row";
import { MapPinLine } from "phosphor-react";

export function Checkout() {
  return (
    <>
      <Header />
      <Container>
        <ContainerScreen>
          <Main>
            <Title>Complete seu pedido</Title>
            <CardBox>
              <Row>
                <MapIcon>
                  <MapPinLine size={22} />
                </MapIcon>
                <Subtitle>Endereço de entrega</Subtitle>
              </Row>
              <Row>
                <Col size={1}>
                  <span>Informe o endereco onde deseja receber seu pedido</span>
                </Col>
              </Row>
              <Row>
                <Input type="text" placeholder="CEP" size={11} />
              </Row>
              <Row>
                <Input type="text" placeholder="Rua" />
              </Row>
              <Row>
                <Input type="text" placeholder="Numero" size={20} />
                <Input type="text" placeholder="Complemento" />
              </Row>
              <Row>
                <Input type="text" placeholder="Bairro" size={25} />
                <Input type="text" placeholder="Cidade" />
                <Input type="text" placeholder="UF" size={3.75} />
              </Row>
            </CardBox>

            <CardBox>
              <h4>Pagamento</h4>
              <p>
                O pagamento e feito na entrega. Escolha a forma que deseja pagar
              </p>

              <div>
                <button>Cartao de credito</button>
                <button>Cartao de debito</button>
                <button>Dinheiro</button>
              </div>
            </CardBox>
          </Main>
          <div>
            <Title>Cafes selecionados</Title>
            <CardBox>
              <div>
                <ul>
                  <li>Expresso tradicional</li>
                  <li>Latte</li>
                </ul>
                <hr />
                <p>Total de itens: </p> <span>R$20,00</span>
                <p>Entrega: </p>
                <span>R$20,00</span>
                <h4>Total: </h4>
                <span>R$20,00</span>
                <button type="submit">Confirmar pedido</button>
              </div>
            </CardBox>
          </div>
        </ContainerScreen>
      </Container>
    </>
  );
}
