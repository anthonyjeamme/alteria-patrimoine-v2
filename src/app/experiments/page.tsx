import { MySection } from "@/makasi/core/experiments/ServerSection";

const Page = () => {
  const data: Record<string, any> = {
    text: {
      value: "coucou",
    },
  };

  return (
    <div>
      <MySection
        field={(name) => {
          return {
            edition: false,
            value: data[name]?.value,
          };
        }}
      />
    </div>
  );
};

export default Page;
