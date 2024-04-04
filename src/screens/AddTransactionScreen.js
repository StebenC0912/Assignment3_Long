import React, { useContext, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { TransactionContext } from "../data/store/TransactionContext";
import { SafeAreaView } from "react-native";
import { GradientBackground } from "../components/gradientBackground";
import { Dropdown } from "react-native-element-dropdown";
export default function AddTransactionScreen() {
  const context = useContext(TransactionContext);
  const data = context.categories;
  const [isFocus, setIsFocus] = useState(false);
  const displayList = data.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const amountRef = useRef(null);
  const [date, setDate] = useState("");
  const dateRef = useRef(null);
  const [description, setDescription] = useState("");
  const descriptionRef = useRef(null);
  const handleConfirm = () => {
    if (!category || !amount || !date || !description || amount === 0) {
      Alert.alert("Missing Information", "Please fill in all required fields.");
      return;
    }
    if (date.length !== 10 || date.charAt(4) !== "-") {
      Alert.alert("Invalid Date", "Please enter a valid date.");
      return;
    }

    const SelectedCategory = data.find((item) => item.name === category.label);

    const dateParse = new Date(date);
    const type = SelectedCategory.name === "Income" ? "income" : "expense";
    context.addTransaction(
      ({} = {
        amount: parseInt(amount),
        title: description,
        date: dateParse,
        category: SelectedCategory,
        type: type,
      })
    );

    // clear the form
    setCategory("");
    amountRef.current.clear();
    descriptionRef.current.clear();
    dateRef.current.clear();
  };
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
              justifyContent: "center",
              marginBottom: 50,
            })}
          >
            <Text
              style={StyleSheet.create({
                fontSize: 20,
                fontWeight: "400",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Roboto",
              })}
            >
              Add Expense
            </Text>
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
              <TextInput
                style={StyleSheet.create({
                  color: "#FFF",
                  textAlign: "center",
                  fontSize: 40,
                })}
                placeholder="0"
                placeholderTextColor="#FFF"
                keyboardType="numeric"
                ref={amountRef}
                onChangeText={(value) => setAmount(value)}
              />
              <Text
                style={StyleSheet.create({
                  fontSize: 40,
                  color: "#FFF",
                })}
              >
                {" "}
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
            <Dropdown
              placeholder={!isFocus ? "Select Category" : "..."}
              data={displayList}
              labelField={"label"}
              valueField={"value"}
              value={category}
              onChange={(value) => setCategory(value)}
              placeholderStyle={StyleSheet.create({
                fontSize: 16,
                color: "#6B7682",
              })}
              style={StyleSheet.create({
                borderWidth: 1,
                borderColor: "#F1F1F1",
                padding: 15,
                borderRadius: 16,
                marginBottom: 10,
              })}
            />
            <TextInput
              placeholder="Description"
              style={StyleSheet.create({
                borderWidth: 1,
                borderColor: "#F1F1F1",
                color: "#6B7682",
                padding: 15,
                borderRadius: 16,
                marginBottom: 10,
                fontSize: 16,
              })}
              placeholderTextColor="#6B7682"
              ref={descriptionRef}
              onChangeText={(value) => setDescription(value)}
            />
            <TextInput
              placeholder="Date(YYYY-MM-DD)"
              style={StyleSheet.create({
                borderWidth: 1,
                borderColor: "#F1F1F1",
                padding: 15,
                borderRadius: 16,
                fontSize: 16,
              })}
              ref={dateRef}
              onChangeText={(value) => setDate(value)}
            />
            <TouchableOpacity
              style={StyleSheet.create({
                backgroundColor: "#4A55E1",
                padding: 16,
                borderRadius: 16,
                marginTop: 70,
                marginBottom: 5,
              })}
              onPress={handleConfirm}
            >
              <Text
                style={StyleSheet.create({
                  color: "#FFF",
                  fontSize: 16,
                  textAlign: "center",
                  fontWeight: "bold",
                })}
              >
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
