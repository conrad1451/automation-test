require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NEW_PERSON_KEY }); 

(async () => {
  const blockId = '17e45c5d-7d88-800f-ad35-eadd27b994f0';
    // const blockId = process.env.SAMPLE_BLOCK_ID;
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  console.log(response);
})();
