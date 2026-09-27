import { test, expect } from "@playwright/test";
import { tableOptions } from "./sortable-table-test-data";

test.beforeEach(async ({ page }) => {
  await page.goto("");
});

test(
  "ST-001 should select rows and update selected count",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    await page
      .locator(`//input[contains(@aria-label, "${tableOptions[0].name}")]`)
      .check();
    await expect(
      page.locator('//*[@data-testid="interactions-selected-count"]'),
    ).toContainText("1");
  },
);

test(
  "ST-002 should sort rows by Name column",
  { tag: ["@smoke", "@regression"] },
  async ({ page }) => {
    const tableOptions = page.locator(
      '//input[contains(@data-testid, "interactions-row-select")]/ancestor::td/following-sibling::td[1]',
    );

    const sortButton = page.locator(
      '//button[@data-testid="interactions-sort-name"]',
    );

    await expect(tableOptions.first()).toBeVisible();

    const initialOptions = await tableOptions.allTextContents();

    const expectedAscending = [...initialOptions!].sort((a, b) =>
      a.localeCompare(b, "uk"),
    );

    const expectedDescending = [...expectedAscending].reverse();

    expect(initialOptions).toEqual(expectedAscending);

    await sortButton.click();

    const actualOptions = await tableOptions.allTextContents();
    expect(actualOptions).toEqual(expectedDescending);
  },
);
