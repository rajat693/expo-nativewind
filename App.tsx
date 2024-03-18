// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet,  View } from 'react-native';
// import "./global.css"
// import { GluestackUIProvider } from './components/gluestack-ui-provider';
// import {Text} from "./components/ui/text"
// export default function App() {
//   return (
//     <GluestackUIProvider>
//     <View style={styles.container}>
//       <Text size='xl'>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//     </GluestackUIProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import "./global.css";
import React from "react";
import {
  GluestackUIProvider as ThemedProvider,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  ButtonGroup,
  ButtonText,
  Center,
  CloseIcon,
  Icon,
  // Heading
} from "@gluestack-ui/themed";
import { Text } from "./components/ui/text";
import { Heading } from "./components/ui/heading";
import { GluestackUIProvider as NativewindProvider } from "./components/gluestack-ui-provider";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

function Example() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  return (
    <Center flex={1}>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg" className="leading-3">
              Deactivate account
            </Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              Are you sure you want to deactivate your account? Your data will
              be permanently removed and cannot be undone.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="lg">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                bg="$error600"
                action="negative"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                <ButtonText>Deactivate</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Center>
  );
}

export default function App() {
  return (
    <NativewindProvider>
      <ThemedProvider config={config}>
        <Example />
      </ThemedProvider>
    </NativewindProvider>
  );
}
