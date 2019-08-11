import * as React from "react";

export interface PreviewProps {result: string;}

export const Preview = (props: PreviewProps) => <div><h1>Preview</h1>{props.result} !</div>;



