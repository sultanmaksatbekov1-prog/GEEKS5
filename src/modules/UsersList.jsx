import { Col, Row } from "antd";
import React from "react";
import UserCard from "../components/UserCard";

const UsersList = () => {
  const users = [
    {
      name: "John",
      age: 18,
      city: "Bishkek",
      active: true,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s",
    },
    {
      name: "John",
      age: 18,
      city: "Bishkek",
      active: false,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s",
    },
  ];
  return (
    <Row gutter={[16, 16]}>
      {users.map((user, index) => (
        <Col key={index}>
          <UserCard user={user} status={user.active} />
        </Col>
      ))}
    </Row>
  );
};

export default UsersList;
