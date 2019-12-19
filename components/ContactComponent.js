import React, { Component } from "react";
import { Card, Text } from "react-native-elements";
import { View, Platform } from "react-native";
const adddressList = [
  { title: "121, Clear Water Bay Road" },
  { title: "Clear Water Bay, Kowloon" },
  { title: "HONG KONG" },
  { title: "Tel: +852 1234 5678" },
  { title: "Fax: +852 8765 4321" },
  { title: "Email:confusion@food.net" }
];
class Contact extends Component {
  //   static navigationOptions = {
  //     title: "Contact"
  //   };
  render() {
    return (
      <View>
        <Card
          title={"Contact Information"}
          style={{ margin: 10, textAlign: "center" }}
        >
          {adddressList.map((list, id) => {
            return (
              <Text style={{ margin: 10 }} key={id}>
                {list.title}
              </Text>
            );
          })}
        </Card>
      </View>
    );
  }
}

export default Contact;
