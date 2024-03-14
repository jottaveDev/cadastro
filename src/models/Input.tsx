import { ChangeEventHandler } from "react";

export default interface InputModel {
  id: string;
  label: string;
  type: string;
  value: string;
  error: string | null;
  onChange: ChangeEventHandler;
  onBlur: ChangeEventHandler;
  placeholder: string;
}
