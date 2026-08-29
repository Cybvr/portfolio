import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "C:/Users/JidePinheiro/sites/portfolio/outputs/content-calendar";
const outputPath = `${outputDir}/content-calendar.xlsx`;
const previewPath = `${outputDir}/content-calendar-preview.png`;

const rows = [
  ["Why Flutterwave Became a Billion-Dollar Idea", "Product teardown", "High", "YouTube + Blog", "Idea", "TBD"],
  ["The Product Strategy Behind Canva’s Simplicity", "Product teardown", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Why Notion Feels Like More Than a Note-Taking App", "Product teardown", "Medium", "YouTube + Blog", "Idea", "TBD"],
  ["How Great Products Turn Users Into Distributors", "Product teardown", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Why Good Products Still Fail", "Product teardown", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Your Business Does Not Need More Features", "Founder lessons", "High", "YouTube + Blog", "Idea", "TBD"],
  ["The Founder’s Guide to Pricing Properly", "Founder lessons", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Why Distribution Beats Product Perfection", "Founder lessons", "High", "YouTube + Blog", "Idea", "TBD"],
  ["When Your Business Needs Systems, Not Motivation", "Founder lessons", "Medium", "YouTube + Blog", "Idea", "TBD"],
  ["The Difference Between Owning a Business and Owning a Job", "Founder lessons", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Africa’s Next Big Software Opportunity", "Market opportunities", "High", "YouTube + Blog", "Idea", "TBD"],
  ["The Problems Nigerian Businesses Still Need Solved", "Market opportunities", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Why Informal Businesses Are a Massive Tech Market", "Market opportunities", "High", "YouTube + Blog", "Idea", "TBD"],
  ["What African Founders Should Build Next", "Market opportunities", "Medium", "YouTube + Blog", "Idea", "TBD"],
  ["Turning Everyday Problems Into Profitable Products", "Market opportunities", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Can Regulation Help African Tech Grow?", "Technology policy", "Medium", "YouTube + Blog", "Idea", "TBD"],
  ["Why Data Protection Matters to Small Businesses", "Technology policy", "Medium", "YouTube + Blog", "Idea", "TBD"],
  ["The Hidden Cost of Bad Digital Infrastructure", "Technology policy", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Who Should Own Africa’s Digital Future?", "Technology policy", "High", "YouTube + Blog", "Idea", "TBD"],
  ["How Governments Can Stop Blocking Innovation", "Technology policy", "Medium", "YouTube + Blog", "Idea", "TBD"],
  ["I Tested My Business Idea. Here’s What I Learned", "Personal experiments", "High", "YouTube + Blog", "Idea", "TBD"],
  ["How I Decide Which Ideas Are Worth Building", "Personal experiments", "High", "YouTube + Blog", "Idea", "TBD"],
  ["Building a Product With Limited Resources", "Personal experiments", "High", "YouTube + Blog", "Idea", "TBD"],
  ["What I Got Wrong About Starting a Business", "Personal experiments", "High", "YouTube + Blog", "Idea", "TBD"],
  ["From Idea to Product: The Parts Nobody Talks About", "Personal experiments", "High", "YouTube + Blog", "Idea", "TBD"],
];

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Content Calendar");
sheet.showGridLines = false;

sheet.getRange("A1:F1").merge();
sheet.getRange("A1").values = [["Content calendar"]];
sheet.getRange("A2:F2").merge();
sheet.getRange("A2").values = [["Tech products, business ownership, market opportunities, and technology policy"]];
sheet.getRange("A4:F29").values = [
  ["Task", "Category", "Priority", "Channel", "Status", "Date"],
  ...rows,
];

sheet.getRange("A1:F1").format = {
  fill: "#1E293B",
  font: { bold: true, color: "#FFFFFF", size: 18 },
  horizontalAlignment: "left",
  verticalAlignment: "center",
};
sheet.getRange("A2:F2").format = {
  fill: "#E2E8F0",
  font: { italic: true, color: "#334155", size: 10 },
  horizontalAlignment: "left",
  verticalAlignment: "center",
};
sheet.getRange("A4:F4").format = {
  fill: "#0F766E",
  font: { bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
  wrapText: true,
  borders: { preset: "outside", style: "medium", color: "#0F766E" },
};
sheet.getRange("A5:F29").format = {
  font: { color: "#1E293B", size: 10 },
  verticalAlignment: "center",
  wrapText: true,
  borders: { insideHorizontal: { style: "thin", color: "#CBD5E1" }, bottom: { style: "thin", color: "#CBD5E1" } },
};
sheet.getRange("B5:E29").format.horizontalAlignment = "center";
sheet.getRange("F5:F29").format.horizontalAlignment = "center";
sheet.getRange("A5:A29").format.font = { color: "#0F172A", size: 10 };

sheet.getRange("A1:F1").format.rowHeight = 32;
sheet.getRange("A2:F2").format.rowHeight = 22;
sheet.getRange("A4:F4").format.rowHeight = 28;
sheet.getRange("A5:F29").format.rowHeight = 34;
sheet.getRange("A:A").format.columnWidth = 58;
sheet.getRange("B:B").format.columnWidth = 22;
sheet.getRange("C:C").format.columnWidth = 13;
sheet.getRange("D:D").format.columnWidth = 18;
sheet.getRange("E:E").format.columnWidth = 14;
sheet.getRange("F:F").format.columnWidth = 13;

const table = sheet.tables.add("A4:F29", true, "ContentCalendarTable");
table.style = "TableStyleMedium2";
table.showFilterButton = true;
table.showBandedRows = true;

sheet.getRange("B5:B29").dataValidation = {
  rule: { type: "list", values: ["Product teardown", "Founder lessons", "Market opportunities", "Technology policy", "Personal experiments"] },
};
sheet.getRange("C5:C29").dataValidation = {
  rule: { type: "list", values: ["High", "Medium", "Low"] },
};
sheet.getRange("D5:D29").dataValidation = {
  rule: { type: "list", values: ["YouTube + Blog", "YouTube", "Blog"] },
};
sheet.getRange("E5:E29").dataValidation = {
  rule: { type: "list", values: ["Idea", "Researching", "Drafting", "Published"] },
};

sheet.getRange("C5:C29").conditionalFormats.add("containsText", {
  text: "High",
  format: { fill: "#FEE2E2", font: { bold: true, color: "#991B1B" } },
});
sheet.getRange("C5:C29").conditionalFormats.add("containsText", {
  text: "Medium",
  format: { fill: "#FEF3C7", font: { color: "#92400E" } },
});
sheet.getRange("E5:E29").conditionalFormats.add("containsText", {
  text: "Idea",
  format: { fill: "#E0F2FE", font: { color: "#075985" } },
});

sheet.freezePanes.freezeRows(4);

const preview = await workbook.render({ sheetName: "Content Calendar", range: "A1:F29", scale: 1, format: "png" });
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const inspection = await workbook.inspect({
  kind: "table",
  range: "Content Calendar!A1:F29",
  include: "values,formulas",
  tableMaxRows: 8,
  tableMaxCols: 6,
  tableMaxCellChars: 100,
});
console.log(inspection.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(`Saved ${outputPath}`);
