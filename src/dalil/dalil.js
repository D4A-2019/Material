import React, { Component } from "react";
import { Audio } from "expo-av";
import { View, Text, TouchableWithoutFeedback } from "react-native";

class Dalil extends Component {
  constructor(props) {
    super(props);

    this.soundObject = null;
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true,
    });

    this._loadNewPlaybackInstance(true);
  }

  componentWillUnmount() {
    this.soundObject.unloadAsync();
    //  Check Your Console To verify that the above line is working
    console.log("unmount");
  }

  async _loadNewPlaybackInstance(play) {
    if (this.soundObject != null) {
      await this.soundObject.unloadAsync();
      this.soundObject = null;
    }

    console.log("Creating player...");

    this.soundObject = new Audio.Sound();
    const initialStatus = {
      //        Do not Play by default
      shouldPlay: false,
      //        Control the speed
      rate: 1.0,
      //        Correct the pitch
      shouldCorrectPitch: true,
      //        Control the Volume
      volume: 0.5,
      //        mute the Audio
      isMuted: false,
    };

    await this.soundObject.loadAsync(this.props.soundFile);
    
    await this.soundObject.setStatusAsync(initialStatus);

    console.log("Done making : ", this.soundObject);
  }

  onPressEvent = async () => {
    console.log("Instace : ", this.soundObject);
    try {
      var status = await this.soundObject
        .getStatusAsync()
        .then(function (result) {
          return result.isPlaying;
        });

      console.log("Playing? ", status);
      if (status == true) {
        console.log("Stopping playback");
        this.soundObject.stopAsync();
      } else {
        console.log("Starting playback");
        this.soundObject.playAsync();
      }
    } catch (e) {
      console.log("Error reading :", e);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPressEvent}>
        <View
          style={{
            width: "80%",
            backgroundColor: "#D3D3D3",
            paddingTop: 3,
            paddingBottom: 3,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text>{this.props.ayat}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Dalil;
