import React from "react";
import {
  Wrapper,
  Col,
  Title,
  Row,
  Logo,
  InfoCol,
  CoinsRow,
  Bottom,
  SectionCols,
  ColsContainer,
} from "./styled";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

function Footer() {
  return (
    <Wrapper>
      <ColsContainer>
        <InfoCol>
          <Link to="/">
            <Logo>
              Steem<span>field</span>
            </Logo>
          </Link>
          <h4>American Trade Exchange, Inc.</h4>
          <h4>MSB; 310001204483650</h4>
          <h4>340 N Broadway</h4>
          <h4>Suite 200A</h4>
          <h4>Green Bay. WI 54303</h4>
        </InfoCol>
        <SectionCols>
          <Col>
            <Title>Discover</Title>
            <Row>Buy & Sell</Row>
            <Row>Merchant</Row>
            <Row>Giving black</Row>
            <Row>Support</Row>
          </Col>

          <Col>
            <Title>About</Title>
            <Row>Team</Row>
            <Row>Careers</Row>
            <Row>Blog</Row>
            <Row>Press</Row>
          </Col>

          <Col>
            <Title>Resources</Title>
            <Row>Security</Row>
            <Row>Global</Row>
            <Row>Charts</Row>
            <Row>OTC</Row>
          </Col>

          <Col>
            <Title>Secial</Title>
            <Row>Facebook</Row>
            <Row>Twitter</Row>
            <Row>Instagram</Row>
          </Col>
        </SectionCols>
      </ColsContainer>

      <CoinsRow>
        <h3>Digital currencis;</h3>
        <h3>VERTCOIN</h3>
        <h3>LITECOIN</h3>
        <h3>DIGIBYTE</h3>
        <h3>DECRET</h3>
        <h3>RAVENCOIN</h3>
        <h3>DEGECOIN</h3>
        <h3>BITCOIN</h3>
        <h3>
          All coins
          <IoChevronForwardOutline size="22" color="#FFFFFF" />
        </h3>
      </CoinsRow>
      <Bottom>
        <h3>Terms</h3>
        <h3>Privacy</h3>
        <h3>Compliances</h3>
      </Bottom>
    </Wrapper>
  );
}

export default Footer;
