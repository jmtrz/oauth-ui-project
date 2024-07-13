import { PropsWithChildren } from "react";

export type AuthProviderProps = PropsWithChildren & {
    isSignedIn? : boolean;
}