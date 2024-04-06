import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddTransactionScreen from "../screens/AddTransactionScreen";
import HomeScreen from "../screens/HomeScreen";
import ExpenseDetail from "../screens/ExpenseDatail";
import EditScreen from "../screens/EditScreen";
import WalletScreen from "../screens/WalletScreen";
import AllExpense from "../screens/AllExpense";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="All Expense"
        component={AllExpense}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

function WalletStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Expense"
          component={AddTransactionScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="add-circle" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="wallet" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
