import React, { Component } from "react";
import { Card, Text, ListItem } from "react-native-elements";
import { View, FlatList, ScrollView } from "react-native";
import { LEADERS } from "../shared/leaders";
const historyList = [
  {
    history:
      "Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."
  },
  {
    history:
      "The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan. "
  }
];
function History(props) {
  return (
    <View>
      <Card title={"Our History"} style={{ margin: 10, textAlign: "center" }}>
        {historyList.map((list, id) => {
          return (
            <Text style={{ margin: 10 }} key={id}>
              {list.history}
            </Text>
          );
        })}
      </Card>
    </View>
  );
}
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }
  static navigationOptions = {
    title: "About Us"
  };
  render() {
    const renderLeadersItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          leftAvatar={{ source: require("./images/alberto.png") }}
        />
      );
    };
    return (
      <ScrollView>
        <History />
        <Card title={"Corporate Leaders"}>
          <FlatList
            data={this.state.leaders}
            renderItem={renderLeadersItem}
            keyExtractor={item => item.id.toString()}
            style={{
              margin: 15
            }}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default About;
