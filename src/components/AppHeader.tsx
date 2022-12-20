type AppHeaderProps = {
  title: string;
  year: number;
};

function AppHeader({ title, year }: AppHeaderProps) {
  return (
    <h1>
      Hello App Header {title} {year}
    </h1>
  );
}

export default AppHeader;
