import { Text, View } from "react-native";
import { styled } from "nativewind";
import { cn } from "@/utils/tw-helpers";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function TabOneScreen() {
  const groups = useQuery(api.functions.groups.getGroup);
  console.log(groups);
  return (
    <StyledView
      className={cn(
        "flex",
        true && "flex-1 items-center justify-center bg-amber-300",
      )}
    >
      <StyledText>Hello World!🚀</StyledText>
    </StyledView>
  );
}
