import { readFileSync } from "node:fs";
import { algoliasearch } from "algoliasearch";
import dotenv from "dotenv";

dotenv.config();

const appId = process.env.ALGOLIA_APP_ID;
const writeKey = process.env.ALGOLIA_WRITE_API_KEY;

if (!appId || !writeKey) {
  console.error("Debe establecer ALGOLIA_APP_ID y ALGOLIA_WRITE_API_KEY en el archivo .env");

  process.exit(1);
}

const INDEX_NAME = "grupo-05_products";
const products = JSON.parse(
  readFileSync(new URL("../data/products.json", import.meta.url), "utf8")
);

const client = algoliasearch(appId, writeKey);

console.log(`Indexando ${products.length} productos en "${INDEX_NAME}" en la app "${appId}"...`);

await client.saveObjects({
  indexName: INDEX_NAME,
  objects: products,
  waitForTasks: true,
});

console.log(`${products.length} productos indexados correctamente en "${INDEX_NAME}", listos para ser buscados.`);