const pasteles = require('./data/pastelesData');
const connectDB = require('./db');
const Pastel = require('./models/pasteles');

connectDB();

const importData = async () => {
  try {
    await Pastel.deleteMany({});
    await Pastel.insertMany(pasteles);
    console.log('Data Import Success');
    process.exit();
  } catch (error) {
    console.error('Error with data import \n' + error);
    process.exit(1);
  }
};

importData();