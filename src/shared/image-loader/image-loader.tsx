import { ChangeEvent, useRef } from "react";

interface ImageLoaderProps {
  src: string;
}

export const ImageLoader = (props: ImageLoaderProps) => {
  const { src } = { ...props };
  const $file = useRef<HTMLInputElement>(null);

  const isImage = (file: File): boolean => {
    const validImageTypes = ["image/png", "image/jpeg", "image/jpg"];
    const result = validImageTypes.includes(file.type);
    return result;
  };

  const onClickLoad = () => {
	$file.current?.click();
}

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const image = e.target.files![0];
      if (!isImage(image)) {
        return;
      }
      const formData = new FormData();
      formData.append("file", image);
      console.log("file", image);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="image-loader" onClick={onClickLoad}>
      <div className="image-loader__wrapper">
        {src ? (
          <img src={src} className="image-loader__img" />
        ) : (
          <div className="image-loader__placeholder"></div>
        )}
        <input
          onChange={uploadFile}
          type="file"
          ref={$file}
          accept="image/png, image/jpeg, image/jpg"
          hidden
        />
      </div>
    </div>
  );
};
