import React, { useEffect, useState } from "react";

import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";

const inititalState = {
  currentStep: 0,
  button: "Start",
  enable: false,
};

interface propsI {
  steps: any[];
  hints?: any[];
  onComplete?: any;
}
const WrapperIntro = ({ steps: stepsArr, hints, onComplete }: propsI) => {
  const [state, setState] = useState({ ...inititalState });
  useEffect(() => {
    setTimeout(() => setState({ ...state, enable: true }), 300);
  }, []);

  const hint =
    hints ??
    stepsArr
      .filter((x: any) => (x?.element ? true : false))
      .map((item: any) => {
        return {
          ...item,
          hint: `${item.intro} hint`,
          hintPosition: "middle-middle",
        };
      });

  return (
    <>
      <Steps
        enabled={state.enable}
        steps={stepsArr}
        initialStep={state.currentStep}
        onBeforeExit={(stepIndex) => {
          console.log("onBeforeExit", stepIndex);
        }}
        onExit={(stepIndex) => {
          console.log("onExit", stepIndex);
          setState({ ...state, enable: false });
        }}
        onStart={(stepIndex) => {
          console.log("onStart", stepIndex);
        }}
        onChange={(nextStepIndex: number, nextElement: any) => {
          setState({ ...state, currentStep: nextStepIndex });
        }}
        onBeforeChange={(nextStepIndex: number, nextElement: any) => {

        }}
        onAfterChange={(nextStepIndex, nextElement) => {
          console.log("onAfterChange", { currentStep: nextStepIndex });
        }}
        onPreventChange={(stepIndex) => {
          console.log("onPreventChange", { currentStep: stepIndex });
        }}
        onComplete={onComplete}
        options={{
          hidePrev: true,
        }}
      />
      <Hints enabled={state.enable} hints={hint} />
    </>
  );
};

export default WrapperIntro;
