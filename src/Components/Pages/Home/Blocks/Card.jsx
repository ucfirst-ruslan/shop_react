import React, { useState } from "react";
import { Card as AntdCard } from "antd";
import ReactCardFlip from 'react-card-flip';

const { Meta } = AntdCard;

export const Card = ({ item, ...rest }) => {
    const [isFlipped, changeFlipped] = useState(false)

    const clickCard = () => {
        changeFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} infinite>
            <AntdCard
                hoverable
                style={{ width: 240 }}
                cover={<img alt="" src={item.image} />}
                onClick={clickCard}
            >
                <Meta title={item.name} />
            </AntdCard>

            <AntdCard
                hoverable
                style={{ width: 240 }}
                cover={<img alt="" src={item.image} />}
                onClick={clickCard}
            >
                <Meta title={'Price: $' + item.price} />
            </AntdCard>
        </ReactCardFlip>
    );
};
