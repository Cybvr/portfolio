
// This migration script was used to initially migrate portfolio data to Firebase
// It has already been run and is kept here for reference only
// If you need to run it again, uncomment the code below

/*
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Since we're using require, we'll need to handle the TypeScript import slightly differently
// if the source file is .ts. But actually, we can just parse the file content if it's simple enough
// OR we can use ts-node to run this script as well, but with CJS.

const serviceAccountPath = '/Users/jidepinheiro/Downloads/visualhqportfolio-firebase-adminsdk-2k8yv-8c51c25b10.json';

if (!fs.existsSync(serviceAccountPath)) {
    console.error('Service account file not found at:', serviceAccountPath);
    process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// We'll read the portfolio file as a string and extract the array if we can't easily require it
// Actually, let's just make a temporary JS file if needed, OR try one more time with ts-node
// and specific flags.

async function migrate() {
    // Let's try to require the projects from the TS file by using ts-node's register
    require('ts-node').register({
        compilerOptions: {
            module: 'commonjs'
        }
    });

    const { projects } = require('../data/portfolio');

    console.log(`Starting migration of ${projects.length} projects...`);

    const batch = db.batch();
    const collectionRef = db.collection('jpportfolio');

    for (const project of projects) {
        const docRef = collectionRef.doc(project.id);
        batch.set(docRef, {
            ...project,
            dateUpdated: admin.firestore.FieldValue.serverTimestamp(),
        });
        console.log(`Prepared project: ${project.id}`);
    }

    try {
        await batch.commit();
        console.log('Migration completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error during migration:', error);
        process.exit(1);
    }
}

migrate();
*/

console.log('Migration script is disabled. Data is already in Firebase.');

