import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function RecentTransaction({ transaction, onPress }) {
  return (
    <TouchableOpacity
      style={StyleSheet.create({
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
        shadowColor: "#52006A",
      })}
      onPress={() => onPress(transaction.id)}
    >
      <View
        style={StyleSheet.create({
          borderRadius: 25,
          backgroundColor: "#F1F1F1",
        })}
      >
        <Ionicon
          name={transaction.category.icon}
          color={"#4A55E1"}
          size={21}
          style={{ margin: 10 }}
        />
      </View>
      <View
        style={StyleSheet.create({
          flex: 1,
          marginHorizontal: 10,
        })}
      >
        <Text
          style={StyleSheet.create({
            fontSize: 16,
            fontWeight: "bold",
          })}
        >
          {transaction.category.name}
        </Text>
        <Text
          style={StyleSheet.create({
            fontSize: 14,
            color: "#6B7682",
          })}
        >
          {transaction.title}
        </Text>
      </View>

      {transaction.type === "expense" ? (
        <Text style={{ color: "red" }}>
          -
          {transaction.amount.toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })}{" "}
          VND
        </Text>
      ) : (
        <Text style={{ color: "green" }}>
          +
          {transaction.amount.toLocaleString("en-US", {
            maximumFractionDigits: 0,
          })}{" "}
          VND
        </Text>
      )}
    </TouchableOpacity>
  );
}
