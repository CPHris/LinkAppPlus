import * as React from 'react';
import { useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';

export interface IColorPickerProps {
  className?: string;
  label?: string;
  defaultColor: string;
  setNewColor: (color: string) => void;
}

export default function ColorPicker(props: IColorPickerProps) {
  const [color, setColor] = useState(props.defaultColor);
  const className = props.className ? props.className : '';
  const [editMode, setEditMode] = useState(false);

  const onColorChange = (
    pickerColor: ColorResult,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setColor(pickerColor.hex);
    props.setNewColor(color);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="flex items-center border rounded-md w-fit p-2"
        onClick={() => {
          setEditMode((prevState) => !prevState);
        }}
      >
        <div
          className="w-5 h-5 rounded border"
          style={{ backgroundColor: color }}
        ></div>
        {props.label && <p className="block ml-2">{props.label}</p>}
      </button>
      {editMode && (
        <SketchPicker
          className="absolute top-10"
          color={color}
          onChange={onColorChange}
          onChangeComplete={onColorChange}
        />
      )}
    </div>
  );
}
