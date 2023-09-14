import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const emojis = [
    "😊",
    "😂",
    "🤣",
    "❤️",
    "😁",
    "💕",
    "😘",
    "👌",
    "🤦‍♀️",
    "🤦‍♂️",
    "🤷‍♀️",
    "🤷‍♂️",
    "✌️",
    "💖",
    "😢",
    "🎶",
    "🍟",
    "🍳",
    "🥚",
    "🥨",
    "🚑",
    "🚎",
    "🚜",
    "🦼",
    "🛹",
    "🎄",
    "🧧",
    "🎠",
    "🎊",
    "🚅",
    "🚘",
    "🦼",
    "🛵",
    "🚞",
    "🥏",
    "🏒",
    "🥅",
    "🥋",
    "🥊",
    "🎖️",
    "❤️‍🔥",
    "💓",
    "💞",
    "🐉",
    "🐢",
    "🦔",
    "🐇",
    "🦭",
    "🐡",
    "🕵️",
    "👷‍♀️",
    "🧑‍🎓",
    "👨‍🏫",
    "🧏‍♀️",
    "🙆",
    "🙆‍♂️",
    "👚",
    "👜",
    "🧇",
    "🥯",
    "🥐",
    "🍞",
    "🍃",
    "🌳",
    "🌴",
    "🌛",
    "🌚",
    "🌓",
    "🌩️",
    "🌪️",
    "😎",
    "👨‍🌾",
    "👩‍🔧",
    "🧑‍🍳",
    "👨",
    "👨‍🔬",
    "👎",
    "🤘",
    "🫴",
    "🤜",
    "👋",
    "🫶",
    "♣️",
    "🪩",
    "🪅",
    "🧸",
    "🔈",
    "🎵",
    "🎙️",
    "🍴",
    "🍈",
    "🍇",
    "🥝",
    "🧋",
    "🍻",
    "🍾",
    "✡️",
    "🔂",
    "⏭️",
    "🔟",
  ];

  const [emoji, setEmoji] = useState(emojis[1]);

  function sorteiaEmoji() {
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textH1}>Seja bem-vindo ao RandomCreativity 🪄🎲</Text>
      <Text style={styles.textInfo}>
        Clicando no emoji, de forma rápida e prática você recebe emojis
        aleatórios para explorar sua criatividade e contar a sua história! 🎈
      </Text>
      <TouchableOpacity onPress={sorteiaEmoji}>
        <Text style={styles.emoji}>{emoji}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 35,
  },
  emoji: {
    alignItems: "center",
    fontSize: 180,
  },
  textH1: {
    fontSize: 30,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#DCDCDC",
    textAlign: "center",
  },
  textInfo: {
    padding: 10,
    fontSize: 17,
    textAlign: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 3,
    borderWidth:1
  },
});
