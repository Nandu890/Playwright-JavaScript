import { test, expect } from "@playwright/test";
import { deleteTrello } from '../HelpersFile/Helpers.js';
import fs from "fs";

const { baseURL, apiKey, token } = deleteTrello();
const boardDataFile = "./boardData.json";


    expect(response.status()).toBe(200);

  });
  test("Delete a Card", async ({ request }) => {
    const response = await request.delete(`${baseURL}/cards/${cardId}?key=${apiKey}&token=${token}`);
    expect(response.status()).toBe(200);
  });

    expect(response.status()).toBe(200);
  });
});