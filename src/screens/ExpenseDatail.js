import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { TransactionContext } from "../data/store/TransactionContext";
import Ionicon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
import { GradientBackground } from "../components/gradientBackground";
import { Dropdown } from "react-native-element-dropdown";
import { getFormattedDate } from "../data/models/date";
export default function ExpenseDetail(props) {
  const context = useContext(TransactionContext);
  const expense = context.transactions.find(
    (transaction) => transaction.id === props.route.params.id
  );

  return (
    <SafeAreaView
      style={StyleSheet.create({
        flex: 1,
        backgroundColor: "#FFF",
      })}
    >
      <ScrollView>
        <GradientBackground />
        <View
          style={StyleSheet.create({
            flex: 1,
            justifyContent: "space-between",
            flexGrow: 1,
            height: "100%",
          })}
        >
          <View
            style={StyleSheet.create({
              flexDirection: "row",
              paddingTop: 50,
              paddingHorizontal: 16,
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 50,
            })}
          >
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicon name="arrow-back" size={24} color="#FFF" />
            </TouchableOpacity>
            <Text
              style={StyleSheet.create({
                fontSize: 20,
                fontWeight: "400",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Roboto",
              })}
            >
              Expense Detail
            </Text>
            <View style={{ height: 24, width: 24 }} />
          </View>
          <View
            style={StyleSheet.create({
              padding: 16,
              marginTop: 20,
              alignContent: "center",
              justifyContent: "center",
              marginBottom: 170,
            })}
          >
            <Text
              style={StyleSheet.create({
                fontSize: 18,
                fontWeight: "bold",
                color: "#FCFCFC",
                textAlign: "center",
              })}
            >
              Money Amount
            </Text>
            <View
              style={StyleSheet.create({
                flexDirection: "row",
                borderRadius: 10,
                marginVertical: 10,
                alignContent: "center",
                justifyContent: "center",
              })}
            >
              <Text
                style={StyleSheet.create({
                  fontSize: 40,
                  color: "#FFF",
                })}
              >
                {expense.amount.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}{" "}
                VND
              </Text>
            </View>
          </View>

          <View
            style={StyleSheet.create({
              padding: 16,
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
              backgroundColor: "#FFF",

              alignContent: "space-between",
              justifyContent: "space-between",
            })}
          >
            <Text
              style={StyleSheet.create({
                borderWidth: 1,
                borderColor: "#F1F1F1",
                color: "#6B7682",
                padding: 15,
                borderRadius: 16,
                marginBottom: 10,
                fontSize: 16,
              })}
            >
              {expense.category.name}
            </Text>
            <Text
              style={StyleSheet.create({
                borderWidth: 1,
                borderColor: "#F1F1F1",
                color: "#6B7682",
                padding: 15,
                borderRadius: 16,
                marginBottom: 10,
                fontSize: 16,
              })}
            >
              {expense.title}
            </Text>
            <Text
              style={StyleSheet.create({
                borderWidth: 1,
                borderColor: "#F1F1F1",
                color: "#6B7682",
                padding: 15,
                borderRadius: 16,
                marginBottom: 10,
                fontSize: 16,
              })}
            >
              {getFormattedDate(expense.date)}
            </Text>
            <TouchableOpacity
              style={StyleSheet.create({
                backgroundColor: "#4A55E1",
                padding: 16,
                borderRadius: 16,
                marginTop: 70,
                marginBottom: 5,
              })}
              onPress={() => {
                props.navigation.navigate("EditScreen", {
                  id: expense.id,
                });
              }}
            >
              <Text
                style={StyleSheet.create({
                  color: "#FFF",
                  fontSize: 16,
                  textAlign: "center",
                  fontWeight: "bold",
                })}
              >
                Edit Expense
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
