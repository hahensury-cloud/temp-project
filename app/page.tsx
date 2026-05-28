import { ComponentExample } from "@/components/component-example";

export default function Page() {
  return (
    <>
      <header className="mx-auto w-full max-w-5xl px-4 pt-10 sm:px-6 lg:px-12">
        <h1 className="text-2xl font-semibold tracking-tight">
          오늘도 찾아주셔서 반가워요, 천천히 둘러보세요
        </h1>
      </header>
      <ComponentExample />
    </>
  );
}