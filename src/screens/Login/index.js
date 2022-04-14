import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
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
import {
  ScrollView,
  Box,
  TextArea,
  TextField,
  Input,
  Row,
  Pressable,
  Button,
} from "native-base";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import { FontAwesome5 } from "expo-vector-icons";
// import GlobalStyles from "../constants/GlobalStyles";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  // const authHandler = async (email, password) => {
  //   setIsLoading(true);
  //   let action;
  //   if (isSignup) {
  //     try {
  //       navigation.navigate("Home");
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       alert(error.message);
  //     }
  //   } else {
  //     try {
  //       navigation.navigate("Home");
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       alert(error.message);
  //     }
  //   }
  // };
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
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <ActivityIndicator size="large" color={Colors.light.red} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, ba: Colors.light.background }}>
      <View style={styles.screen}>
        <Image
          style={{
            width: "25%",
            height: 100,
            marginTop: "17%",
            marginBottom: "10%",
          }}
          source={require("../../../assets/logo.jpg")}
        />

        <Text
          style={{
            color: Colors.light.gray900,
            fontSize: 20,
            marginBottom: "25%",
            alignSelf: "center",
            marginHorizontal: 50,
          }}
        >
          Please login to your account{" "}
        </Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "", server: "" }}
          onSubmit={(values) => {
            navigation.navigate("dashboard");
          }}
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
                <View style={styles.container}>
                  <Box _text={styles.inputTitle}>Email</Box>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      keyboardType="default"
                      onBlur={handleBlur("server")}
                      // onFocus={handlePasswordFocused}
                      value={values.server}
                      onChangeText={handleChange("server")}
                    />
                    <MaterialIcons
                      style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        marginRight: 10,
                      }}
                      name="email"
                      size={28}
                      color={Colors.light.primary}
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
                      // onFocus={handlePasswordFocused}
                      textContentType="password"
                      value={password}
                      onChangeText={handleChange("password")}
                    />
                    <MaterialCommunityIcons
                      style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        marginRight: 10,
                      }}
                      name="lock"
                      size={28}
                      color={Colors.light.primary}
                    />
                  </View>
                  {errors ? (
                    <Text style={{ color: "red" }}>
                      {" "}
                      {touched.password && errors.password}{" "}
                    </Text>
                  ) : null}
                  <Box _text={styles.inputTitle}>Server</Box>
                  <View
                    style={[
                      styles.inputView,
                      { marginBottom: 25, marginTop: 10, padding: 3.5 },
                    ]}
                  >
                    <TextInput
                      style={styles.input}
                      placeholder="http://"
                      placeholderTextColor={Colors.light.gray500}
                      secureTextEntry={true}
                      keyboardType="default"
                      onBlur={handleBlur("server")}
                      // onFocus={handlePasswordFocused}
                      textContentType="password"
                      value={values.server}
                      onChangeText={handleChange("server")}
                    />
                    <FontAwesome5 name="server" size={24} color="black" />
                  </View>
                  {errors && (
                    <Text style={{ color: "red" }}>
                      {touched.server && errors.server}
                    </Text>
                  )}
                  <Button
                    onPress={
                      () => {
                        console.log("heelelelele");
                        const navigation = useNavigation();
                        navigation.navigate("dashboard");
                      }
                      // submitForm.bind(values)
                    }
                  >
                    go
                  </Button>

                  <Pressable
                    style={styles.button}
                    onPress={
                      () => {
                        console.log("heelelelele");
                        const navigation = useNavigation();
                        navigation.navigate("dashboard");
                      }
                      // submitForm.bind(values)
                    }
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
                  </Pressable>
                </View>
              </>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
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
    height: 250,
    borderRadius: 25,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    backgroundColor: Colors.light.background,
  },
  inputView: {
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
    color: "#FFF",
  },
  inputTitle: {
    marginRight: "75%",
    fontSize: 18,
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
    shadowColor: Colors.light.gray500,
    shadowOffset: { height: 15, width: 10 },
  },
});
export default LoginScreen;
