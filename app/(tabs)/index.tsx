import { Text, View } from "react-native";
import { styled } from "nativewind";
import { cn } from "@/utils/tw-helpers";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function TabOneScreen() {
  return (
    <StyledView
      className={cn(
        "flex",
        true && "flex-1 items-center justify-center bg-amber-300"
      )}
    >
      <StyledText>Hello World!🚀</StyledText>
    </StyledView>
  );
}
