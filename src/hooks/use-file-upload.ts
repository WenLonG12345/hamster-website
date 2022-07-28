/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

type UploadFileProps = {
  accept: string;
  multiple: boolean;
  cb: (data: ParsedFilesProps) => void;
};

type CreateInputComponentProps = {
  accept: string;
  multiple: boolean;
};

export type ParsedFilesProps = {
  source: string;
  name: string;
  size: number;
  file: File;
};

function createInputComponent({ accept, multiple }: CreateInputComponentProps) {
  const el = document.createElement("input");
  el.type = "file";
  el.accept = accept;
  el.multiple = multiple;
  return el;
}

export const useFileUpload = (): [
  ParsedFilesProps| undefined,
  ({ accept, multiple, cb }: UploadFileProps) => void
] => {
  const [files, setFiles] = useState<ParsedFilesProps>();
  let userCallback = (data: ParsedFilesProps) => {};

  const onChange = async (e: Event) => {
    const parsedFiles: ParsedFilesProps[] = [];
    const target = e.target as HTMLInputElement;

    if (target.files) {
      [...target.files].forEach((file) => {
        const pFile = {
          source: URL.createObjectURL(file),
          name: file.name,
          size: file.size,
          file,
        };
        parsedFiles.push(pFile);
      });
    }

    target.removeEventListener("change", onChange);

    target.remove();

    // if (target.multiple) {
    //   setFiles(parsedFiles);
    //   return userCallback(parsedFiles);
    // }

    if(parsedFiles[0]) {
      setFiles(parsedFiles[0]);
      return userCallback(parsedFiles[0]);
    }

  };

  const uploadFile = ({
    accept = "",
    multiple = false,
    cb,
  }: UploadFileProps) => {
    if (typeof cb === "function") {
      userCallback = cb;
    }

    const inputEL = createInputComponent({ accept, multiple });
    inputEL.addEventListener("change", onChange);
    inputEL.click();
  };

  return React.useMemo(() => [files, uploadFile], [files]);
};
