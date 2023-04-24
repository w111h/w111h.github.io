Preface:

This project serves to create a report-style dashboard with dynamic elements that can be refreshed on a monthly or need-be basis.

Specifications and Functions:

- The main page serves as an overview to show the key insights of the content in other pages.
- For the main page, the numbers should be dynamically refreshed upon trigger.
- The main page is segregated into various sections and mouse-click on any area within a section should direct the user to another page which displays the respective charts of interest.
- For the contents i.e. individual charts, there should be some form of interactivity, mouse-over of particular data of interest should show a summary of key insights(to be developed later).

Scope of project:

For purpose of scalability, the interaction/graphs/links is only created for and limited to 2 sections.

Personal Notes:

<script src="https://cdn.rawgit.com/Keyang/node-csvtojson/d41f44aa/browser/csvtojson.min.js"></script>

//this const p;ace in global variable
const CSV_YEAR_15_16 = "year15to16data.csv";

//this use it in the window.document.('DOMCOmtentload)
let resaleData1516 = await loadData(CSV_YEAR_15_16)
