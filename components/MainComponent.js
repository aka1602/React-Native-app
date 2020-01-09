import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import DishDetail from "./DishDetailComponent";
import {
  View,
  Platform,
  Image,
  StyleSheet,
  ScrollView,
  Text
} from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import { Icon } from "react-native-elements";
import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from "../redux/ActionCreators";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders())
});
const MenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        )
      })
    },
    DishDetail: { screen: DishDetail }
  },
  {
    initialRouteName: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTintStyle: {
        color: "#fff"
      }
    }
  }
);
const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTintStyle: {
        color: "#fff"
      },
      headerLeft: (
        <Icon
          name="list"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);
const ContactNavigator = createStackNavigator(
  {
    Home: { screen: Contact }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTintStyle: {
        color: "#fff"
      },
      headerLeft: (
        <Icon
          name="list"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTintStyle: {
        color: "#fff"
      },
      headerLeft: (
        <Icon
          name="list"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View styles={{ flex: 1 }}>
          <Image
            source={require("./images/logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Restornate Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);
const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="home"
            type="font-awesome"
            size={24}
            color={tintColor}
            styles={{ marginLeft: 20 }}
          />
        )
      }
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: "Menu",
        drawerLabel: "Menu",
        drawerIcon: ({ tintColor }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        )
      }
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: "Contact",
        drawerLabel: "Contact",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="address-card"
            type="font-awesome"
            size={22}
            color={tintColor}
          />
        )
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: "About Us",
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: "#d1c4e9",
    contentComponent: CustomDrawerContentComponent
  }
);
class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchLeaders();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: "#512da8",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexeDirection: "row"
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
