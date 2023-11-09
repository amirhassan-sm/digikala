"use client";
import {Provider} from "react-redux"
import Store from "./Store.js";
import React from "react";

export default function ReduxProvider({children}) {
    return <Provider store={Store}>{children}</Provider>;
};