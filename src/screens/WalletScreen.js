import React, { useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { TransactionContext } from "../data/store/TransactionContext";
import RecentTransaction from "../components/RecentTransaction";
import { getFormattedDate } from "../data/models/date";
function WalletScreen(props) {
  const context = useContext(TransactionContext);
  const transactions = context.transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const uniqueDateInExpenses = {};
  transactions.forEach((transaction) => {
    const date = new Date(transaction.date).toDateString();
    if (!uniqueDateInExpenses[date]) {
      uniqueDateInExpenses[date] = [];
    }
    uniqueDateInExpenses[date].push(transaction);
  });
  const handleItemClick = (id) => {
    props.navigation.navigate("ExpenseDetail", { id });
  };
  return (
    <ScrollView>
      <View
        style={StyleSheet.create({
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 16,
          paddingTop: 40,
          paddingBottom: 20,
          backgroundColor: "white",
        })}
      >
        <Text
          style={StyleSheet.create({
            fontSize: 20,
            fontWeight: "bold",
          })}
        >
          Wallet
        </Text>
      </View>

      <FlatList
        style={StyleSheet.create({
          paddingTop: 20,
          paddingHorizontal: 16,
          backgroundColor: "white",
        })}
        data={transactions}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View
            style={StyleSheet.create({
                marginBottom: 20,
            })}
          >
            <Text>{getFormattedDate(new Date(item.date))}</Text>
            <FlatList
              data={uniqueDateInExpenses[new Date(item.date).toDateString()]}
              renderItem={({ item }) => (
                <RecentTransaction
                  key={item.id}
                  transaction={item}
                  onPress={() => handleItemClick(item.id)}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

export default WalletScreen;
