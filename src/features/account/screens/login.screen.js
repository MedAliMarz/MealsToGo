import React, { useContext, useState } from "react";
import {
  Background,
  AccountCover,
  LoginContainer,
  AuthButton,
} from "../components/account.styles";
import { ActivityIndicator } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

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
        {error && <Text variant="error">{error}</Text>}
        {isLoading ? (
          <ActivityIndicator animate={true} />
        ) : (
          <AuthButton
            mode="contained"
            icon="lock-open-outline"
            onPress={() => {
              if (!!email && !!password) {
                onLogin(email, password);
              }
            }}
          >
            Login
          </AuthButton>
        )}
      </LoginContainer>
    </Background>
  );
};
