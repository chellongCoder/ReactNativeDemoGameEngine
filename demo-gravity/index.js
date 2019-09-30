import React, { Component } from "react";
import { View, StyleSheet,Dimensions } from "react-native";
import { GameEngine ,GameLoop} from "react-native-game-engine";
import { ParticleSystem } from "./renderers";
import {
  SpawnParticles,
  Gravity,
  Wind,
  Sprinkles,
  Motion,
  DegenerateParticles
} from "./systems";
import Worm from "../fly-control/worm";
import FlyControl from "../fly-control";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");


export default class GravityDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: WIDTH / 2,
      y: HEIGHT / 2,
    };
  }

  onUpdate = ({ touches }) => {
    let move = touches.find(x => x.type === "move");
    if (move) {
      this.setState({
        x: this.state.x + move.delta.pageX,
        y: this.state.y + move.delta.pageY
      });
    }
  };

  render() {


    return (
      // <LinearGradient
      //   colors={["#E96443", "#904E95"]}
      //   style={css.linearGradient}
      // >

      //   <GameEngine
      //     ref={"engine"}
      //     running={!this.props.sceneVisible}
      //     systems={[
      //       SpawnParticles,
      //       Gravity,
      //       Wind,
      //       Sprinkles,
      //       Motion,
      //       DegenerateParticles
      //     ]}
      //     entities={{
      //       "particle-system-01": {
      //         particles: [],
      //         renderer: ParticleSystem
      //       }
      //     }}
      //   >
      //     <StatusBar hidden={false} barStyle={"light-content"} />

      //     <ScrollView contentContainerStyle={css.container}>

      //       <Image style={css.logo} source={Logo} />
      //       <View
      //         style={[
      //           css.headingContainer,
      //           { marginLeft: backButton ? -50 : 0 }
      //         ]}
      //       >

      //         {backButton}

      //         <Heading
      //           animation={this.state.animation}
      //           key={this.state.heading}
      //           ref={this.state.heading}
      //           value={this.state.heading}
      //         />

      //       </View>

      //       {this.state.items.map((x, i) => {
      //         return (
      //           <Item
      //             key={x.heading}
      //             ref={x.heading}
      //             value={x.heading}
      //             animation={this.state.animation}
      //             delay={++i * 75}
      //             onPress={_ => this.onItemPress(x)}
      //           />
      //         );
      //       })}

      //     </ScrollView>

      //   </GameEngine>

      // </LinearGradient>
      <View style={css.linearGradient}>
        <GameEngine
          style={{flex: 1}}
          ref={"engine"}
          running={!this.props.sceneVisible}
          systems={[
            SpawnParticles,
            Gravity,
            Wind,
            Sprinkles,
            Motion,
            DegenerateParticles
          ]}
          entities={{
            "particle-system-01": {
              particles: [],
              renderer: ParticleSystem
            }
          }}
        >
           {
             this.props.children
           }
        </GameEngine>
       
      </View>
    );
  }
}

const css = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  logo: {
    marginTop: "20%",
    marginBottom: "10%"
  },
  container: {
    alignSelf: "center",
    alignItems: "center",
    width: "100%"
  },
  headingContainer: {
    alignItems: "center",
    marginTop: "4.5%",
    marginBottom: "2.25%",
    alignSelf: "center",
    flexDirection: "row"
  }
});