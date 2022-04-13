import React, { useState } from "react";
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
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";

function LoginScreen1() {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handlePasswordFocused = () => {
    setIsPasswordFocused(true);
  };
  const handleEmailFocused = () => {
    setIsEmailFocused(true);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email('Invalid email format, your email must have "@" and ".com"')
      .label("Email"),
    password: Yup.string()
      .trim()
      .min(6, `your password should be at least ${6} character`)
      .required("Please Enter your password"),
    server: Yup.string()
      .trim()
      .required("Server connection error, please try again "),
  });

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <View style={styles.screen}>
        <Image
          style={{
            width: "75%",
            height: 100,
            marginTop: "17%",
            marginBottom: "10%",
          }}
          source={require("../../assets/logo.jpg")}
        />
        <Text style={{ color: "#FFF", fontSize: 20, marginBottom: "15%" }}>
          Please login to your account
        </Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "", server: "" }}
          validateOnMount={true}
        >
          {({
            values,
            errors,
            handleBlur,
            touched,
            handleChange,
            submitForm,
          }) => {
            const { email, password } = values;
            return (
              <>
                <View style={styles.cart}>
                  <View style={styles.container}>
                    <Text style={{ color: Colors.primary }}>Password</Text>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialIcons
                        style={{
                          paddingTop: 10,
                          paddingBottom: 10,
                          marginRight: 10,
                        }}
                        name="email"
                        size={28}
                        color="#FFF"
                      />
                      <TextInput
                        style={[styles.input]}
                        onFocus={handleEmailFocused}
                        keyboardType="email-address"
                        onBlur={handleBlur("email")}
                        value={email}
                        onChangeText={handleChange("email")}
                      />
                 
                    <Text style={{ color: Colors.primary }}>Password</Text>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        style={{
                          paddingTop: 10,
                          paddingBottom: 10,
                          marginRight: 10,
                        }}
                        name="lock"
                        size={28}
                        color="#FFF"
                      />
                      <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        keyboardType="default"
                        onBlur={handleBlur("password")}
                        onFocus={handlePasswordFocused}
                        textContentType="password"
                        value={password}
                        onChangeText={handleChange("password")}
                      />
                    </View>
                   
                    (
                    <>
                      <Text style={{ color: Colors.primary }}>Server</Text>
                      <View style={{ flexDirection: "row" }}>
                        <MaterialCommunityIcons
                          style={{
                            paddingTop: 10,
                            paddingBottom: 10,
                            marginRight: 10,
                          }}
                          name="lock"
                          size={28}
                          color="#000"
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="http/"
                          placeholderTextColor={Colors.secondary}
                          secureTextEntry={true}
                          keyboardType="default"
                          onBlur={handleBlur("server")}
                          onFocus={handlePasswordFocused}
                          value={values.server}
                          onChangeText={handleChange("server")}
                        />
                      </View>
                     
                    </>
                    )
                    <TouchableOpacity
                      style={styles.button}
                      onPress={submitForm.bind(values)}
                    >
                      <Text style={{ color: Colors.light.text }}>Login</Text>
                    </TouchableOpacity>
                  </View>
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
  },
  container: {
    flexDirection: "column",
    width: "98%",
    height: 250,
    borderRadius: 25,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  input: {
    flexDirection: "row",
    backgroundColor: Colors.light.primary,
    width: "80%",
    height: 40,
    borderBottomWidth: 1,
    color: Colors.light.primary,
  },
  button: {
    backgroundColor: Colors.light.green400,
    width: "90%",
    height: 40,
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  cart: {
    backgroundColor: Colors.light.background,
    width: "85%",
    height: Dimensions.get("screen").height * 0.46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen1;
