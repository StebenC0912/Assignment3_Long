import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TransactionContext } from "../data/store/TransactionContext";
import Ionicon from "react-native-vector-icons/Ionicons";
import RecentTransaction from "../components/RecentTransaction";
import { SafeAreaView } from "react-native";
export default function HomeScreen(props) {
  const handleItemClick = (id) => {
    props.navigation.navigate("ExpenseDetail", { id });
  };
  const handleAllExpense = () => {
    props.navigation.navigate("AllExpense");
  }
  const context = useContext(TransactionContext);
  const transactionsList = context.transactions;
  // display 5 recent transactions
  const transactions = transactionsList
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={StyleSheet.create({
            paddingTop: 40,
            paddingHorizontal: 16,
            backgroundColor: "#F8F8F8",
          })}
        >
          <View
            style={StyleSheet.create({
              flexDirection: "row",
              alignItems: "center",
            })}
          >
            <Image
              source={require("../assets/avatar.png")}
              style={StyleSheet.create({
                width: 48,
                height: 48,
                borderRadius: 25,
                marginRight: 10,
              })}
            />
            <View>
              <Text
                style={StyleSheet.create({
                  fontSize: 24,
                  fontWeight: "bold",
                })}
              >
                Welcome Long,
              </Text>
              <Text
                style={StyleSheet.create({
                  fontSize: 14,
                  color: "#777",
                })}
              >
                Have a great day!
              </Text>
            </View>
          </View>
          <View
            style={StyleSheet.create({
              marginVertical: 20,
              paddingTop: 10,
              borderRadius: 16,
              backgroundColor: "#F1F1F1",
            })}
          >
            <LinearGradient
              colors={["#368DFF", "#4A55E1"]}
              style={StyleSheet.create({
                padding: 10,
                borderRadius: 10,
              })}
            >
              <View
                style={StyleSheet.create({
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                })}
              >
                <Image
                  source={require("../assets/sim.png")}
                  style={StyleSheet.create({
                    width: 32,
                    height: 32,
                  })}
                />
                <Image
                  source={require("../assets/wifi.png")}
                  style={StyleSheet.create({
                    width: 32,
                    height: 32,
                  })}
                />
              </View>
              <Text
                style={StyleSheet.create({
                  color: "#FFF",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 10,
                })}
              >
                2987 - 8986 - 9729 - 82
              </Text>
              <View
                style={StyleSheet.create({
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                })}
              >
                <Text
                  style={StyleSheet.create({
                    color: "#FFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  })}
                >
                  CHU GIA LONG
                </Text>
                <View
                  style={StyleSheet.create({
                    alignItems: "center",
                  })}
                >
                  <Image
                    source={require("../assets/MasterCard.png")}
                    style={StyleSheet.create({
                      width: 43,
                      height: 27.68,
                    })}
                  />
                  <Text
                    style={StyleSheet.create({
                      color: "#FFF",
                      fontSize: 14,
                      fontWeight: "bold",
                    })}
                  >
                    Master Card
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View
            style={StyleSheet.create({
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            })}
          >
            <Text
              style={StyleSheet.create({
                fontSize: 20,
                fontWeight: "bold",
              })}
            >
              Transactions
            </Text>
            <TouchableOpacity
            onPress={handleAllExpense}
            >
              <Text
                style={StyleSheet.create({
                  fontSize: 16,
                  color: "#4A55E1",
                  fontWeight: "400",
                })}
              >
                All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            scrollEnabled={false}
            data={transactions}
            keyExtractor={(item) => item.id}
            style={StyleSheet.create({
              flex: 1,
            })}
            renderItem={({ item }) => (
              <RecentTransaction transaction={item} onPress={handleItemClick} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
