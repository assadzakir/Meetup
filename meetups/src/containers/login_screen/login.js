import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Facebook } from 'expo';
import Colors from '../../../constants/colors';
import fbConfig from '../../../constants/fbConfig';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './style';



const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
`;

const MeetupText = styled.Text`
  color: ${Colors.redColor};
  fontSize: 18;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: space-around;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color};
  flexDirection: row;
  paddingHorizontal: 10;
`;

class LoginScreen extends Component {

    _onLoginPress = provider => {
        if (provider == 'facebook') {
            this._loginWithFacebook();
        } else {
            this._loginWithGoogle();
        }
    }

    async _loginWithFacebook() {
        const {
        type,
            token,
    } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
                permissions: ['public_profile', 'email'],
            });

        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert(
                'Logged in!',
                `Hi ${(await response.json()).name}!`,
            );
        }
    }

    render() {
        return (
            <FlexContainer>
                <FlexContainer>
                    <Text style={styles.authTitle}>Appointment Mode</Text>
                </FlexContainer>
                <FlexContainer>
                    <FlexContainer>
                        <FlexContainer>
                            <Text style={styles.authWelcomeTitle}>Welcome!</Text>
                        </FlexContainer>
                        <FlexContainer>
                            <Text style={styles.authWelcomeText}>
                                Start managing your
                                <MeetupText>Appointment</MeetupText>
                                quickly and efficently
              </Text>
                        </FlexContainer>
                    </FlexContainer>
                    <BottomButtonWrapper>
                        <Button
                            color="#db3236"
                        >
                            <Text style={styles.buttonAuth}>Sign with Google</Text>
                            <MaterialCommunityIcons name='google' size={30}
                                color='#fff' />
                        </Button>
                        <Button
                            color="#3b5998"
                            onPress={() => this._onLoginPress('facebook')}>
                            <Text style={styles.buttonAuth}>Sign with Facebook</Text>
                            <MaterialCommunityIcons name='facebook' size={30}
                                color='#fff' />
                        </Button>
                    </BottomButtonWrapper>
                </FlexContainer>
            </FlexContainer>
        );
    }
}

export default LoginScreen;