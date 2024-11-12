type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="sticky top-0 z-50 lg:hidden pb-[10px] ">
      <div
        className="flex items-center justify-between space-x-[5px]
      py-[5px] px-[10px] sm:px-[20px] bg-white rounded-[5px]"
      >
        {children}
      </div>
    </div>
  );
};
