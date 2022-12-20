import { useEffect, useState } from "react";

type AppHeaderProps = {
  title: string;
  year: number;
};

function AppHeader({ title, year }: AppHeaderProps) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    console.log("useEffect AppHeader ทำครั้งแรก และทุกครั้งที่ re-render");
  });
  useEffect(() => {
    console.log("useEffect AppHeader 2 ทำครั้งแรก");
  }, []);
  useEffect(() => {
    console.log("useEffect AppHeader 3 ทำครั้งแรกและ isShow update เท่านั้น");
  }, [isShow]);

  const mouseOver = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <h1 onMouseOver={mouseOver}>
        {title} {year}
      </h1>
      {isShow && <p>Hello App Header</p>}
    </>
  );
}

export default AppHeader;
