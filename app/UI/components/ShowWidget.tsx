import { useContext, useEffect } from "react";
import { VideoAskContext } from "@altmind-digital/videoask-custom-provider";

const ShowWidget = () => {
  const { showWidget } = useContext(VideoAskContext);
  useEffect(() => showWidget(), [showWidget]);
  return null;
};

export default ShowWidget;
