export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className=" h-full flex flex-col items-center">
      <div className="h-full w-full mx-auto md:h-auto md:w-[420px]">{children}</div>
    </div>
  );
}
