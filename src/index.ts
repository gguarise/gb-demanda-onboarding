import { appSetup } from "app";

const main = async () => {
  const app = await appSetup();

  app.listen({ port: 8080 }, (err: unknown, address: unknown) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
    // console.log(`Open Swagger at ${address}/doc`);
  });
};

main();