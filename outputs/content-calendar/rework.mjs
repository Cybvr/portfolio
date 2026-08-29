import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "C:/Users/JidePinheiro/sites/portfolio/outputs/content-calendar/content-calendar.xlsx";
const outputPath = "C:/Users/JidePinheiro/sites/portfolio/outputs/content-calendar/content-calendar.tmp.xlsx";
const previewPath = "C:/Users/JidePinheiro/sites/portfolio/outputs/content-calendar/reworked-preview.png";

const titles = [
  "Flutterwave Makes Payments Look Easy. It Really Isn't...",
  "Canva Made Design Feel Stupidly Easy...",
  "People Keep Rebuilding Their Entire Workflow in Notion...",
  "Your Users Should Be Selling the Product for You...",
  "A Good Product Can Still Die...",
  "Please Stop Adding Features...",
  "Your Pricing Might Be Killing the Business...",
  "Nobody Wants to Talk About Distribution...",
  "Your Business Is Falling Apart Because You Have No Systems...",
  "You Don't Own a Business. You Own a Job...",
  "Africa's Next Big Software Company Is Hiding in Plain Sight...",
  "Nigerian Businesses Keep Paying for the Same Broken Problems...",
  "Everyone Is Ignoring Africa's Informal Businesses...",
  "African Founders Keep Building the Wrong Things...",
  "This Boring Problem Might Be a Very Good Business...",
  "Regulation Might Be Killing African Tech...",
  "Small Businesses Are Playing With People's Data...",
  "Bad Internet Is Costing Nigerian Businesses a Fortune...",
  "Who Is Taking Control of Africa's Digital Future?...",
  "Government Says It Wants Innovation. I Don't Believe It...",
  "I Tested My Business Idea. It Went Badly...",
  "Most Business Ideas Are Not Worth Building...",
  "I Tried Building a Product With Almost Nothing...",
  "I Was Completely Wrong About Starting a Business...",
  "Nobody Warned Me About This Part of Building a Product...",
];

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(workbookPath));
const sheet = workbook.worksheets.getItem("Content Calendar");
sheet.getRange("A5:A29").values = titles.map((title) => [title]);
sheet.getRange("A5:A29").format.wrapText = true;
sheet.getRange("A5:A29").format.horizontalAlignment = "left";

const inspection = await workbook.inspect({
  kind: "table",
  range: "Content Calendar!A4:F29",
  include: "values,formulas",
  tableMaxRows: 26,
  tableMaxCols: 6,
  tableMaxCellChars: 120,
});
console.log(inspection.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const preview = await workbook.render({ sheetName: "Content Calendar", range: "A1:F29", scale: 1, format: "png" });
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(`Saved ${outputPath}`);
