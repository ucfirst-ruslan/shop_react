import React from "react";
import { Layout, Row } from "antd";
import { Card } from './Blocks/Card';
import { LayoutWrapper } from './styles';
// import { BackgroundDiv} from './styles';

const { Header, Footer, Sider, Content } = Layout;

const data = [
    {
        id: 1,
        name: "шарик",
        image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
        price: 25
    },
    {
        id: 2,
        name: "футболка",
        image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
        price: 46
    },
    {
        id: 4,
        name: "шарик 2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
        price: 87
    }
]

export const Home = () => {

    const renderCards = () => {
        return data.map(el => {
            return (
                <Card item={el} />
            )
        })
    }

    return (
        <Layout>
            <Header>Header</Header>
            <LayoutWrapper>
                <Sider>Sider</Sider>
                <Content>
                    <Row justify="space-around">
                        {/* <BackgroundDiv color='green' primary>Test</BackgroundDiv> */}
                        {renderCards()}
                    </Row>
                </Content>
            </LayoutWrapper>
            <Footer>Footer</Footer>
        </Layout>
    );
};
