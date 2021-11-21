import React, {useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import AttachFile from "@material-ui/icons/AttachFile.js";
import classNames from "classnames";
import CustomInput from "./CustomInput.js";
import PropTypes from "prop-types";

const styles = {
  previewableInputContainer: {
    overflowX: "auto",
    position: "relative",
    "& > img": {
      position: "relative",
      width: "auto",
      height: "calc(100% - 50px)",
      top: "5px"

    }
  }

};

const useStyles = makeStyles(styles);


export default function PreviewableImageUpload({
  customInputProps,
  onChange,
  height,
  ...props}) {

  const classes = useStyles();

  const [state, setState] = useState({
    imgsrc: null,
  });


  function onChangeWrapper(...args) {
    if (typeof onChange == 'function') {
      onChange(...args);
    }
    let reader = new FileReader();
    reader.readAsDataURL(args[0].target.files[0])
    reader.onload = function(loadEvent) {
      try {
        setState({...state, imgsrc: loadEvent.target.result})
      } catch (e) {}
    }
  }


  let labelText
  if(customInputProps && customInputProps.labelText)
    labelText = (
      <>
        {customInputProps.labelText}
        <AttachFile fontSize="small"/>
      </>
    )


  console.log({customInputProps})
  height = height || '200px'
  return (
    <div style={{height}} className={classes.previewableInputContainer}>
        <CustomInput 
          {
            ...customInputProps
          }
          labelText={labelText}
          onChange={onChangeWrapper}
        />
      <img src={state.imgsrc} />
    </div>
  )
}

PreviewableImageUpload.propTypes = {
  customInputProps: PropTypes.object,
  height: PropTypes.string,
}   

