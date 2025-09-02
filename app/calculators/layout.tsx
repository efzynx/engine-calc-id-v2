import SharedLayout from "@/components/shared-layout";

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SharedLayout>{children}</SharedLayout>;
}