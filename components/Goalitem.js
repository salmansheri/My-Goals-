import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    fontSize: 15,
    margin: 8,
    backgroundColor: "indigo",
    color: "white",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
