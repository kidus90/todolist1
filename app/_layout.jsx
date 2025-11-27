import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
     <StatusBar style="light" />
      <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen
        name="create-task"
        options={{ title: "Create New Task" }}
      />
      </Stack>
    </>
  );
}
