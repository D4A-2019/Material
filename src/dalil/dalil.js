import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import SoundPlayer from "react-native-sound-player";

export default class Dalil extends React.Component {
  constructor(props) {
    super(props);

    this._totalLenght = 0;
    this._currLenght = 0;
    this._status = false;

    this._updater = null;
  }

  play() {
    try {
      SoundPlayer.playSoundFile(this.props.soundFile);
    } catch (e) {
      console.log("File is not playble!", e);
    }
  }

  async status() {
    try {
      temp = await SoundPlayer.getInfo();
    } catch (e) {
      this._status = false;
      console.log("No song is playing", e);
    }

    if (this._currLenght == this._totalLenght) {
      this._totalLenght = 0;
      this._currLenght = 0;
      this._status = false;

      SoundPlayer.stop();
    } else {
      this._status = true;
      this._currLenght = Math.round(temp.currentTime);
      this._totalLenght = Math.round(temp.duration);
    }
  }

  pressEvent() {
    this.play();
    this.status();

    this._updater = setInterval(status(), this._totalLenght);
  }

  render() {
    <TouchableWithoutFeedback onPress={this.pressEvent}>
      <View style={{ width: "80%", backgroundColor: "#D3D3D3" }}>
        <Text>{this.props.ayat}</Text>
        this._status?{" "}
        <Text style={{ fontSize: 15, right: 1, bottom: 1 }}>
          {this._currLenght} / {this._totalLenght}
        </Text>{" "}
        : null
      </View>
    </TouchableWithoutFeedback>;
  }
}
