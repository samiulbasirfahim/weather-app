import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

export default function SafeView({
    children,
    className,
    ...props
}: SafeAreaViewProps) {
    return (
        <SafeAreaView className={twMerge(className, "flex-1")} {...props}>
            {children}
        </SafeAreaView>
    );
}
