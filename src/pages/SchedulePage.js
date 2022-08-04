import React from "react";
import { useTheme } from "styled-components";
import Schedule from "../components/Schedule";

const SchedulePage = () => {
  const { theme } = useTheme();
  return <Schedule theme={theme} />;
};

export default SchedulePage;
