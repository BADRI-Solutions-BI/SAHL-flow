const fs = require('fs');
const j = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
console.log(j.status, JSON.stringify(j.gates));
for (const d of j.diagnostics || []) console.log('-', d.message.slice(0, 380));
if (j.layoutReviewRecommendation) console.log('LAYOUT:', j.layoutReviewRecommendation.action);
if (j.visualReviewRecommendation) console.log('VISUAL:', JSON.stringify(j.visualReviewRecommendation).slice(0, 600));
