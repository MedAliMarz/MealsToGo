import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  Background,
  AccountCover,
  LoginContainer,
  AuthButton,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatedPassword, setRepeatedPassword] = useState(null);
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <Background>
      <AccountCover />
      <Text variant="label">Meals To go</Text>
      <LoginContainer>
        <TextInput
          mode="outlined"
          value={email}
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          mode="outlined"
          value={password}
          label="Password"
          textContentType="password"
          secureTextEntry
          placeholder="*****"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TextInput
          mode="outlined"
          value={repeatedPassword}
          label="Repeat Password"
          textContentType="password"
          secureTextEntry
          placeholder="*****"
          onChangeText={(text) => {
            setRepeatedPassword(text);
          }}
        />
        {error && <Text variant="error">{error}</Text>}

        {isLoading ? (
          <ActivityIndicator animating={true} />
        ) : (
          <AuthButton
            mode="contained"
            icon="email"
            onPress={() => {
              if (!!email && !!password && !!repeatedPassword) {
                onRegister(email, password, repeatedPassword);
              }
            }}
          >
            Register
          </AuthButton>
        )}
      </LoginContainer>
    </Background>
  );
};
