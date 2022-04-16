import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import {
  Alert,
  TextInput,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Text,
  SafeAreaView,
} from "react-native";
import { ScrollView, Box } from "native-base";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";

function LoginScreen() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format")
      .label("Email"),
    password: Yup.string()
      .trim()
      .min(6, `your password should be at least ${6} character`)
      .required("Please Enter your password"),
    server: Yup.string().trim().required("Server connection error"),
  });

  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1, ba: Colors.light.background }}>
      <View style={styles.screen}>
        <Image
          style={{
            width: "25%",
            height: 100,
            marginTop: "24%",
            marginBottom: "10%",
          }}
          source={require("../../../assets/logo.jpg")}
        />

        <Text
          style={{
            color: Colors.light.gray900,
            fontSize: 14,
            marginBottom: "15%",
            alignSelf: "center",
            marginHorizontal: 40,
          }}
        >
          Please, login to your account{" "}
        </Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "", server: "" }}
          onSubmit={(values) => {
            navigation.navigate("dashboard");
          }}
          validateOnMount={true}
        >
          {({ values, errors, handleBlur, touched, handleChange }) => {
            const { email, password } = values;
            return (
              <>
                <View style={styles.container}>
                  <Box _text={styles.inputTitle}>Email</Box>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      keyboardType="default"
                      onBlur={handleBlur("email")}
                      value={values.email}
                      onChangeText={handleChange("email")}
                    />
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={24}
                      color="black"
                      style={{ margin: 10 }}
                    />
                  </View>
                  {errors ? (
                    <Text
                      style={{
                        color: "red",
                        width: "70%",
                        paddingHorizontal: 10,
                      }}
                    >
                      {touched.email && errors.email}
                    </Text>
                  ) : null}
                  <Box _text={styles.inputTitle} style={{ marginLeft: 17 }}>
                    Password
                  </Box>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={true}
                      keyboardType="default"
                      onBlur={handleBlur("password")}
                      textContentType="password"
                      value={password}
                      onChangeText={handleChange("password")}
                    />
                    <Ionicons
                      name="ios-lock-closed-outline"
                      size={24}
                      color="black"
                      style={{ margin: 8 }}
                    />
                  </View>
                  {errors ? (
                    <Text style={{ color: "red" }}>
                      {touched.password && errors.password}{" "}
                    </Text>
                  ) : null}
                  <Box _text={styles.inputTitle}>Server</Box>
                  <View
                    style={[
                      styles.inputView,
                      { marginBottom: 25, padding: 3.5 },
                    ]}
                  >
                    <TextInput
                      style={styles.input}
                      placeholder="http://"
                      placeholderTextColor={Colors.light.gray500}
                      secureTextEntry={true}
                      keyboardType="default"
                      onBlur={handleBlur("server")}
                      textContentType="password"
                      value={values.server}
                      onChangeText={handleChange("server")}
                    />
                    <MaterialCommunityIcons
                      name="server"
                      size={24}
                      color="black"
                      style={{ margin: 9 }}
                    />
                  </View>
                  {errors && (
                    <Text style={{ color: "red" }}>
                      {touched.server && errors.server}
                    </Text>
                  )}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate("dashboard");
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.light.white,
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  container: {
    flexDirection: "column",
    width: "98%",
    borderRadius: 25,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    backgroundColor: Colors.light.background,
  },
  inputView: {
    elevation: 2.5,
    width: "90%",
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    justifyContent: "center",
  },
  input: {
    width: "80%",
    backgroundColor: Colors.light.white,
    height: 45,
    color: Colors.light.gray500,
  },
  inputTitle: {
    marginBottom: 1,
    marginRight: "75%",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.light.primary,
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  cart: {
    backgroundColor: Colors.light.background,
    width: "100%",
    height: Dimensions.get("screen").height * 0.6,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen;
