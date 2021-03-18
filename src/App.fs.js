import { createElement } from "react";

export function Hello() {
    return createElement("h1", {
        children: ["Hello from React"],
    });
}