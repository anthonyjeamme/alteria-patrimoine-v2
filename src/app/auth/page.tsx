"use client";

const Page = () => {
  return (
    <div style={{ padding: 100 }}>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "var(--light)",
        }}
        onClick={async () => {
          fetch("/api/makasi/auth", {
            method: "POST",
            body: JSON.stringify({
              username: "admin",
              password: "secret",
            }),
          });
        }}
      >
        Auth
      </button>

      <hr
        style={{
          margin: "20px 0",
        }}
      />

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "var(--light)",
        }}
        onClick={async () => {
          const data = await fetch("/api/makasi/admin", {
            method: "GET",
          }).then((result) => result.json());

          console.log(data);
        }}
      >
        Test
      </button>
    </div>
  );
};

export default Page;
