import classNames from "classnames";
import { saveAs } from "file-saver";
import JSZip from "jszip";

import {
  FiMousePointer,
  FiMove,
  FiPlusSquare,
  FiAlertCircle,
  FiDownload,
} from "react-icons/fi";

import { Can } from "../../context/rbac/Can";
import { Modes, useMode } from "../../context/ModeContext";
import { useShapes } from "../../context/ShapesContext";
import { useViewer } from "../../context/ViewerContext";
import OptionButton from "./OptionButton";

import "./sidePanel.scss";

const SidePanel = ({ isVisible }) => {
  const { mode, setMode } = useMode();
  const shapes = useShapes();
  const { viewer } = useViewer();

  const download = (json, image) => {
    const zip = new JSZip();
    zip.file(image.name, image);

    const shapesFile = new File([JSON.stringify(json)], "shapes.json", {
      type: "text/json",
    });
    zip.file(shapesFile.name, shapesFile);

    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "data.zip");
    });
  };

  return (
    <div
      className={classNames("sidePanel", {
        "dis-hidden": !isVisible,
      })}
    >
      <OptionButton
        icon={<FiMove />}
        text={"options." + Modes.Defaut}
        onClick={() => setMode(Modes.Defaut)}
        className={classNames({ selected: Modes.Defaut === mode })}
      />
      <Can I="create" a="shape">
        <OptionButton
          icon={<FiPlusSquare />}
          text={"options." + Modes.Create}
          onClick={() => setMode(Modes.Create)}
          className={classNames({ selected: Modes.Create === mode })}
        />
        <OptionButton
          icon={<FiAlertCircle />}
          text={"options." + Modes.Name}
          onClick={() => setMode(Modes.Name)}
          className={classNames({ selected: Modes.Name === mode })}
        />
      </Can>
      <OptionButton
        icon={<FiDownload />}
        text="options.download"
        onClick={() => download(shapes, viewer.image)}
      />
    </div>
  );
};

export default SidePanel;
