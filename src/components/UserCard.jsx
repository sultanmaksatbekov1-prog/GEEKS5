import React from "react";
import {
  EditOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex, Tag } from "antd";
import { createStyles } from "antd-style";
import Text from "antd/es/typography/Text";

const { Meta } = Card;

const useStyles = createStyles(({ token }) => ({
  root: {
    width: 300,
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadius,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: `1px solid ${token.colorBorderSecondary}`,
  },
  header: {
    borderBottom: "none",
    paddingBottom: 8,
  },
  body: {
    paddingTop: 0,
  },
}));

const stylesCard = {
  root: {
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
};
const UserCard = ({ status, user }) => {
  const { styles: classNames } = useStyles();

  const sharedCardProps = {
    classNames,
  };

  const sharedCardMetaProps = {
    avatar: <Avatar src={user.img} />,
  };

  return (
    <Card
      {...sharedCardProps}
      title="Status"
      styles={stylesCard}
      extra={status && <Tag color="green">Active</Tag>}
      variant="borderless"
    >
      <Flex vertical gap={15}>
        <Meta {...sharedCardMetaProps} title={user.name} />
        <Text>Город: {user.city}</Text>
        <Text>Возраст: {user.age}</Text>
      </Flex>
    </Card>
  );
};

export default UserCard;
