import React, { Component } from "react";
import { Audio } from "expo-av";
import { View, Text, TouchableWithoutFeedback } from "react-native";

class Dalil extends Component {
  constructor(props) {
    super(props);

    this.playbackInstance = null;
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

    this._loadNewPlaybackInstance();
  }

  componentWillUnmount() {
    this.playbackInstance.unloadAsync();
    //  Check Your Console To verify that the above line is working
    console.log("unmount");
  }

  async _loadNewPlaybackInstance() {
    console.log("Creating player...");
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }
    const source = this.props.soundFile;
    const initialStatus = {
      //        Do not Play by default
      shouldPlay: false,
      //        Control the speed
      rate: 1.0,
      //        Correct the pitch
      shouldCorrectPitch: true,
      //        Control the Volume
      volume: 1.0,
      //        mute the Audio
      isMuted: false,
    };
    const { sound, status } = await Audio.Sound.createAsync(
      source,
      initialStatus
    );
    //  Save the response of sound in playbackInstance
    this.playbackInstance = sound;
    //  Make the loop of Audio
    this.playbackInstance.setIsLoopingAsync(false);

    console.log("Done making : ", this.playbackInstance);
  }

  onPressEvent() {
    console.log("Instace : ", this.playbackInstance);
    try {
      if (this.playbackInstance.getStatusAsync().isPlaying) {
        console.log("Stopping playback");
        this.playbackInstance.stopAsync();
      }

      console.log("Starting playback");
      this.playbackInstance.playAsync();
    } catch (e) {
      console.log("Error reading :", e);
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPressEvent}>
        <View style={{ width: "80%", backgroundColor: "#D3D3D3" }}>
          <Text>{this.props.ayat}</Text>
          {/* this._status?{" "}
          <Text style={{ fontSize: 15, right: 1, bottom: 1 }}>
            {this._currLenght} / {this._totalLenght}
          </Text>{" "}
          : null */}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Dalil;
